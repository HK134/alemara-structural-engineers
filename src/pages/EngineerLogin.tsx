
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { Key, User, Info, Sparkles, Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const EngineerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, engineerLogin, userRole } = useAuth();
  const location = useLocation();
  
  // Get the intended destination from location state, or default to engineer dashboard
  const from = location.state?.from?.pathname || '/engineer';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await engineerLogin(email, password);
      
      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success('Welcome to your engineer portal!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // If already authenticated as an engineer, redirect to the engineer dashboard
  if (isAuthenticated && userRole === 'engineer') {
    return <Navigate to={from} replace />;
  }
  
  // If authenticated but not as an engineer, redirect to the admin dashboard
  if (isAuthenticated && userRole !== 'engineer') {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-4 flex items-center justify-center overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-cyan-500/15 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-10"></div>
      </div>
      
      <div className="container max-w-md z-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2 flex justify-center items-center gap-2">
            <Sparkles className="h-8 w-8 text-emerald-400" />
            <span>Engineer Portal</span>
          </h1>
          <p className="text-emerald-300 text-sm italic">Engineering excellence at your fingertips</p>
        </div>
        
        <Card className="backdrop-blur-lg bg-white/90 border-0 shadow-xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200 to-teal-300 rounded-bl-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-emerald-200 rounded-tr-full opacity-20"></div>
          
          <CardHeader className="space-y-1 text-center relative z-10">
            <div className="flex justify-center w-full mb-2">
              <img 
                src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
                alt="Alemara Engineering" 
                className="h-12 w-auto bg-white/80 p-2 rounded-lg shadow-md"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800">Engineer Login</CardTitle>
            <CardDescription className="text-slate-600">
              Enter your credentials to access your engineering dashboard
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-800 flex items-center gap-2">
                  <User size={14} />
                  <span>Email</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 pl-3"
                    required
                  />
                  <Shield className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-800 flex items-center gap-2">
                  <Key size={14} />
                  <span>Password</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 pl-3"
                    required
                  />
                  <Shield className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
              </div>
              
              <div className="mt-2 p-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-1 text-slate-700">
                  <Info size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">Engineer Access Only</span>
                </div>
                <p className="text-xs text-slate-600">
                  This portal is exclusively for authorized Alemara engineers.
                  If you're having trouble logging in, please contact your administrator.
                </p>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg py-5 shadow-lg relative overflow-hidden group"
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? 'Signing in...' : 'Access Engineering Tools'}
                  {!isLoading && <Sparkles className="h-4 w-4 animate-pulse" />}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EngineerLogin;
