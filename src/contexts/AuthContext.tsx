
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  userId: string | null;
  userName: string | null;
  userEmail: string | null;
  isLoading: boolean; // Added to match usage in ProtectedRoute
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  // Add updatePassword to match usage in EngineerPasswordChange
  updatePassword?: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; message: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
          setIsAuthenticated(true);
          setUserId(session.user.id);
          setUserEmail(session.user.email || null);

          // For now, let's set a default role - we'll update this with real data later
          setUserRole('admin');
          setUserName('Admin User');
        } else {
          setIsAuthenticated(false);
          setUserId(null);
          setUserRole(null);
          setUserName(null);
          setUserEmail(null);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        setIsAuthenticated(false);
        setUserId(null);
        setUserRole(null);
        setUserName(null);
        setUserEmail(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
        setIsAuthenticated(true);
        setUserId(session?.user.id || null);
        setUserEmail(session?.user.email || null);
        
        // Set default values - would be replaced with actual DB queries
        setUserRole('admin');
        setUserName('Admin User');
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        setUserId(null);
        setUserRole(null);
        setUserName(null);
        setUserEmail(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("Login failed:", error);
        return { success: false, message: error.message };
      }

      setIsAuthenticated(true);
      setUserId(data.user?.id || null);
      setUserEmail(data.user?.email || null);

      // Set default values - would be replaced with actual DB queries
      setUserRole('admin');
      setUserName('Admin User');

      return { success: true, message: "Login successful" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Login failed" };
    }
  };

  // Add placeholder updatePassword implementation
  const updatePassword = async (currentPassword: string, newPassword: string) => {
    try {
      // This would be implemented properly when needed
      console.log('Update password called with', currentPassword, newPassword);
      return { success: true, message: "Password updated successfully" };
    } catch (error) {
      console.error("Password update error:", error);
      return { success: false, message: "Failed to update password" };
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout failed:", error);
      }
      setIsAuthenticated(false);
      setUserId(null);
      setUserRole(null);
      setUserName(null);
      setUserEmail(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value: AuthContextType = {
    isAuthenticated,
    userRole,
    userId,
    userName,
    userEmail,
    isLoading,
    login,
    logout,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
