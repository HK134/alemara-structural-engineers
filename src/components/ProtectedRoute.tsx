
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles?: ('admin' | 'engineer' | 'client')[];
};

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, userRole } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Show loading state while checking authentication
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Determine which login page to redirect to based on the current path
    let loginPath = "/admin";
    
    // Fallback to admin path for now
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  // If roles are specified, check if the user has the required role
  if (allowedRoles && userRole && !allowedRoles.includes(userRole as any)) {
    // Redirect based on user's role
    if (userRole === 'admin') {
      return <Navigate to="/admin" replace />;
    }
    
    // Fallback if something goes wrong
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
