
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type UserRole = 'admin' | 'engineer' | 'client' | null;

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  userRole: UserRole;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; message: string }>;
  userEmail: string | null;
  userName: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const isAuthed = !!session;
      setIsAuthenticated(isAuthed);
      
      if (session?.user) {
        // Get the user's role from their metadata
        const role = session.user.user_metadata?.role as UserRole || null;
        setUserRole(role);
        setUserEmail(session.user.email);
        setUserName(session.user.user_metadata?.name || null);
      } else {
        setUserRole(null);
        setUserEmail(null);
        setUserName(null);
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
          // Get the user's role from their metadata
          const role = data.session.user.user_metadata?.role as UserRole || null;
          setUserRole(role);
          setUserEmail(data.session.user.email);
          setUserName(data.session.user.user_metadata?.name || null);
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

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUserRole(null);
      setIsAuthenticated(false);
      setUserEmail(null);
      setUserName(null);
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  const updatePassword = async (currentPassword: string, newPassword: string) => {
    if (!userEmail) {
      return { success: false, message: 'You must be logged in to update your password' };
    }
    
    try {
      // First verify the current password by attempting to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password: currentPassword,
      });
      
      if (signInError) {
        return { success: false, message: 'Current password is incorrect' };
      }
      
      // If verification was successful, update the password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (updateError) {
        return { success: false, message: `Failed to update password: ${updateError.message}` };
      }
      
      return { success: true, message: 'Password updated successfully' };
    } catch (error) {
      console.error("Error updating password:", error);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isLoading, 
      login,
      logout, 
      userRole,
      updatePassword,
      userEmail,
      userName
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
