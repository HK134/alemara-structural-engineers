import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  userId: string | null;
  userName: string | null;
  userEmail: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  updatePassword: (newPassword: string) => Promise<{ success: boolean; message: string }>;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
          setIsAuthenticated(true);
          setUserId(session.user.id);
          setUserEmail(session.user.email || null);

          // Fetch engineer details if the user is an engineer
          const { data: engineerDetails, error: engineerError } = await supabase
            .from('engineers')
            .select('*')
            .eq('email', session.user.email)
            .single();

          if (engineerError && engineerError.code !== 'PGRST116') {
            console.error("Error fetching engineer details:", engineerError);
          } else if (engineerDetails) {
            setUserRole('engineer');
            setUserName(engineerDetails.name);
          } else {
            // Check if user is an admin (you might want to adjust this based on your admin identification logic)
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.user_metadata?.role === 'admin') {
              setUserRole('admin');
              setUserName(user.user_metadata.name || null);
            }
          }
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
        resetUserState();
      } finally {
        setLoading(false);
      }
    };

    const resetUserState = () => {
      setUserId(null);
      setUserRole(null);
      setUserName(null);
      setUserEmail(null);
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setIsAuthenticated(true);
        setUserId(session.user.id);
        setUserEmail(session.user.email);

        // Fetch engineer details
        const { data: engineerDetails } = await supabase
          .from('engineers')
          .select('*')
          .eq('email', session.user.email)
          .single();

        if (engineerDetails) {
          setUserRole('engineer');
          setUserName(engineerDetails.name);
        } else {
          // Check if admin
          if (session.user.user_metadata?.role === 'admin') {
            setUserRole('admin');
            setUserName(session.user.user_metadata.name || null);
          }
        }
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        resetUserState();
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) return { success: false, message: error.message };

      return { success: true, message: "Login successful" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Login failed" };
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setIsAuthenticated(false);
      resetUserState();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const updatePassword = async (newPassword: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        return { success: false, message: error.message };
      }

      return { success: true, message: "Password updated successfully" };
    } catch (error) {
      console.error("Password update error:", error);
      return { success: false, message: "Failed to update password" };
    }
  };

  const value: AuthContextType = {
    isAuthenticated,
    userRole,
    userId,
    userName,
    userEmail,
    loading,
    login,
    logout,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
