
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles?: ('admin' | 'engineer' | 'client')[];
};

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, loading, userRole } = useAuth();
  const location = useLocation();

  if (loading) {
    // Show loading state while checking authentication
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Determine which login page to redirect to based on the current path
    let loginPath = "/login";
    
    if (location.pathname.startsWith("/engineer")) {
      loginPath = "/engineer-login";
    } else if (location.pathname.startsWith("/client")) {
      loginPath = "/client-login";
    } else if (location.pathname.startsWith("/admin")) {
      loginPath = "/login";
    }
    
    // Redirect to appropriate login page, saving the current location
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  // If roles are specified, check if the user has the required role
  if (allowedRoles && userRole && !allowedRoles.includes(userRole as 'admin' | 'engineer' | 'client')) {
    // Redirect based on user's role
    if (userRole === 'admin') {
      return <Navigate to="/admin" replace />;
    } else if (userRole === 'engineer') {
      return <Navigate to="/engineer" replace />;
    } else if (userRole === 'client') {
      return <Navigate to="/client" replace />;
    }
    
    // Fallback if something goes wrong
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
