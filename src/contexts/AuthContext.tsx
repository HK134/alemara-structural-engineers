
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { AuthChangeEvent } from '@supabase/supabase-js';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  engineerLogin: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  clientLogin: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  userRole: 'admin' | 'engineer' | 'client' | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<'admin' | 'engineer' | 'client' | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const isAuthed = !!session;
      setIsAuthenticated(isAuthed);
      
      if (session?.user) {
        setTimeout(async () => {
          // First check if user is an engineer
          const { data: engineerData, error: engineerError } = await supabase
            .from('engineers')
            .select('*')
            .eq('email', session.user.email as string)
            .eq('active', true as boolean)
            .single();
            
          if (engineerData) {
            setUserRole('engineer');
          } else {
            // Then check if user is associated with a form submission (client)
            const { data: clientData, error: clientError } = await supabase
              .from('form_submissions')
              .select('*')
              .eq('email', session.user.email as string)
              .eq('secured', true as boolean)
              .eq('client_auth_created', true as boolean)
              .maybeSingle();
              
            if (clientData) {
              setUserRole('client');
            } else {
              // Default to admin if not engineer or client
              setUserRole('admin');
            }
          }
        }, 0);
      } else {
        setUserRole(null);
      }
      
      setIsLoading(false);
      
      if (event === 'SIGNED_IN') {
        toast.success('Signed in successfully');
      } else if (event === 'SIGNED_OUT') {
        toast.success('Signed out successfully');
      } else if (event === 'PASSWORD_RECOVERY') {
        toast.info('Please check your email for password reset instructions');
      } else if (event === 'USER_UPDATED') {
        toast.success('Your profile has been updated');
      } else if (event === 'TOKEN_REFRESHED') {
        console.log('Auth token refreshed');
      }
      
      const confirmationEvents: AuthChangeEvent[] = ['SIGNED_IN'];
      if (confirmationEvents.includes(event) && session?.user?.email_confirmed_at) {
        toast.success('Email confirmed successfully');
      }
    });

    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setIsAuthenticated(!!data.session);
        
        if (data.session?.user) {
          // First check if user is an engineer
          const { data: engineerData } = await supabase
            .from('engineers')
            .select('*')
            .eq('email', data.session.user.email as string)
            .eq('active', true as boolean)
            .single();
            
          if (engineerData) {
            setUserRole('engineer');
          } else {
            // Then check if user is associated with a form submission (client)
            const { data: clientData } = await supabase
              .from('form_submissions')
              .select('*')
              .eq('email', data.session.user.email as string)
              .eq('secured', true as boolean)
              .eq('client_auth_created', true as boolean)
              .maybeSingle();
              
            if (clientData) {
              setUserRole('client');
            } else {
              // Default to admin if not engineer or client
              setUserRole('admin');
            }
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        return { success: false, message: error.message };
      }

      return { success: true, message: 'Login successful' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const engineerLogin = async (email: string, password: string) => {
    try {
      const { data: engineerData, error: engineerError } = await supabase
        .from('engineers')
        .select('*')
        .eq('email', email as string)
        .eq('active', true as boolean)
        .single();
        
      if (engineerError || !engineerData) {
        console.error("Engineer not found:", engineerError?.message);
        return { success: false, message: 'Engineer account not found or inactive' };
      }
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Engineer login error:", error.message);
        
        if (error.message.includes('Email not confirmed')) {
          return { 
            success: false, 
            message: 'Please confirm your email address first. Check your inbox for the confirmation link.' 
          };
        }
        
        return { success: false, message: error.message };
      }
      
      setUserRole('engineer');
      return { success: true, message: 'Engineer login successful' };
    } catch (error) {
      console.error('Engineer login error:', error);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const clientLogin = async (email: string, password: string) => {
    try {
      // Check if this email is associated with a secured project
      const { data: clientData, error: clientError } = await supabase
        .from('form_submissions')
        .select('*')
        .eq('email', email)
        .eq('secured', true)
        .eq('client_auth_created', true)
        .maybeSingle();
        
      if (clientError || !clientData) {
        console.error("Client account not found:", clientError?.message);
        return { success: false, message: 'No client account found for this email' };
      }
      
      // Proceed with login
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Client login error:", error.message);
        
        if (error.message.includes('Email not confirmed')) {
          return { 
            success: false, 
            message: 'Please confirm your email address first. Check your inbox for the confirmation link.' 
          };
        }
        
        return { success: false, message: error.message };
      }
      
      setUserRole('client');
      return { success: true, message: 'Client login successful' };
    } catch (error) {
      console.error('Client login error:', error);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUserRole(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isLoading, 
      login, 
      engineerLogin,
      clientLogin, 
      logout, 
      userRole 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
