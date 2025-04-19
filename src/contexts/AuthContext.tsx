import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  userId: string | null;
  userName: string | null;
  userEmail: string | null; // Add this property
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
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

          // Fetch user details from the 'users' table
          const { data: userDetails, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (userError) {
            console.error("Error fetching user details:", userError);
            setUserRole(null);
            setUserName(null);
          } else {
            setUserRole(userDetails?.role || null);
            setUserName(userDetails?.full_name || null);
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
        setUserId(null);
        setUserRole(null);
        setUserName(null);
        setUserEmail(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
        setIsAuthenticated(true);
        setUserId(session?.user.id || null);
        setUserEmail(session?.user.email || null);

        // Fetch user details after sign-in
        supabase
          .from('users')
          .select('*')
          .eq('id', session?.user.id)
          .single()
          .then(({ data: userDetails, error: userError }) => {
            if (userError) {
              console.error("Error fetching user details after sign-in:", userError);
              setUserRole(null);
              setUserName(null);
            } else {
              setUserRole(userDetails?.role || null);
              setUserName(userDetails?.full_name || null);
            }
          });
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

      // Fetch user details after login
      const { data: userDetails, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user?.id)
        .single();

      if (userError) {
        console.error("Error fetching user details after login:", userError);
        setUserRole(null);
        setUserName(null);
      } else {
        setUserRole(userDetails?.role || null);
        setUserName(userDetails?.full_name || null);
      }

      return { success: true, message: "Login successful" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Login failed" };
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
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
