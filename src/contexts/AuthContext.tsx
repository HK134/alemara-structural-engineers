import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  engineerLogin: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  userRole: 'admin' | 'engineer' | 'client' | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<'admin' | 'engineer' | 'client' | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setIsAuthenticated(!!data.session);
        
        if (data.session?.user) {
          const { data: engineerData, error: engineerError } = await supabase
            .from('engineers')
            .select('*')
            .eq('email', data.session.user.email)
            .single();
            
          if (engineerData) {
            setUserRole('engineer');
          } else {
            setUserRole('admin');
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const isAuthed = !!session;
      setIsAuthenticated(isAuthed);
      
      if (session?.user) {
        const checkUserRole = async () => {
          const { data: engineerData } = await supabase
            .from('engineers')
            .select('*')
            .eq('email', session.user.email)
            .single();
            
          if (engineerData) {
            setUserRole('engineer');
          } else {
            setUserRole('admin');
          }
        };
        
        checkUserRole();
      } else {
        setUserRole(null);
      }
      
      setIsLoading(false);
      
      if (event === 'SIGNED_IN') {
        toast.success('Signed in successfully');
      } else if (event === 'SIGNED_OUT') {
        toast.success('Signed out successfully');
      }
    });

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
        .eq('email', email)
        .eq('active', true)
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
        if (error.message.includes('Invalid login credentials')) {
          const { error: signUpError } = await supabase.auth.signUp({
            email,
            password,
          });
          
          if (signUpError) {
            console.error("Engineer signup error:", signUpError.message);
            return { success: false, message: signUpError.message };
          }
          
          const { error: retryLoginError } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          
          if (retryLoginError) {
            console.error("Engineer login retry error:", retryLoginError.message);
            return { success: false, message: retryLoginError.message };
          }
          
          return { success: true, message: 'Engineer account created and logged in successfully' };
        }
        
        console.error("Engineer login error:", error.message);
        return { success: false, message: error.message };
      }
      
      setUserRole('engineer');
      return { success: true, message: 'Engineer login successful' };
    } catch (error) {
      console.error('Engineer login error:', error);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUserRole(null);
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, engineerLogin, logout, userRole }}>
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
