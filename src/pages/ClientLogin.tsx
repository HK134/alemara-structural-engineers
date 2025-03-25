
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { LockKeyhole, Mail } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ClientLogin = () => {
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, login } = useAuth();
  const location = useLocation();
  
  // Get the intended destination from location state, or default to client dashboard
  const from = location.state?.from?.pathname || '/client';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !postcode) {
      toast.error('Please enter both email and postcode');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real implementation, we would use the postcode as password
      // For now, we're using the same login method
      const result = await login(email, postcode);
      
      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success('Welcome to your client portal!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // If already authenticated, redirect to the client dashboard
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="absolute top-0 left-0 w-full h-32 bg-slate-800 rounded-b-[30%] transform -skew-y-1"></div>
      
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl border-0 z-10">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 w-32 h-32">
            <img 
              src="/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png" 
              alt="London Structural Surveys Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-800">Client Portal</CardTitle>
          <CardDescription className="text-slate-600">
            Access your project dashboard and documentation
          </CardDescription>
          <Badge variant="outline" className="bg-slate-100 text-slate-700 mx-auto mt-2">
            Secure login
          </Badge>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-800">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-slate-200 focus:border-slate-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode" className="text-slate-800">Postcode</Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                <Input
                  id="postcode"
                  type="text"
                  placeholder="Enter your postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="pl-10 border-slate-200 focus:border-slate-500"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-lg py-6"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Enter Client Portal'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ClientLogin;
