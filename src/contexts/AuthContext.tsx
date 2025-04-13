
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  userRole: 'admin' | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<'admin' | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const isAuthed = !!session;
      setIsAuthenticated(isAuthed);
      
      if (session?.user) {
        // All users are considered admins now
        setUserRole('admin');
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
    });

    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setIsAuthenticated(!!data.session);
        
        if (data.session?.user) {
          // All users are considered admins now
          setUserRole('admin');
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

      // All users are considered admins now
      setUserRole('admin');
      return { success: true, message: 'Login successful' };
    } catch (error) {
      console.error('Login error:', error);
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
