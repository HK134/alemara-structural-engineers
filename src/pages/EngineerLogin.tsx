
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { Key, User, Info, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { sendLoginCredentialsEmail, isAuthorizedEngineer } from '@/utils/engineerEmailService';

const EngineerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [engineersList, setEngineersList] = useState<{name: string, email: string}[]>([]);
  const { isAuthenticated, engineerLogin, userRole } = useAuth();
  const location = useLocation();
  
  // Get the intended destination from location state, or default to engineer dashboard
  const from = location.state?.from?.pathname || '/engineer';

  useEffect(() => {
    // Fetch engineers for the admin view only
    const fetchEngineers = async () => {
      const { data, error } = await supabase
        .from('engineers')
        .select('name, email')
        .eq('active', true);
        
      if (error) {
        console.error("Error fetching engineers:", error);
        return;
      }
      
      if (data) {
        setEngineersList(data);
      }
    };
    
    fetchEngineers();
  }, []);

  // Function to create a password for the engineer
  const generatePassword = (name: string) => {
    const reversedName = name.toLowerCase().split('').reverse().join('');
    const randomNumbers = Math.floor(Math.random() * 900 + 100); // 3 random digits (100-999)
    return `${reversedName}${randomNumbers}`;
  };

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Check if this is an authorized engineer
      const isAuthorized = await isAuthorizedEngineer(email);
      
      if (!isAuthorized) {
        toast.error('Access denied. You are not authorized to access the engineer portal.');
        setIsLoading(false);
        return;
      }
      
      // Get engineer's name to generate password
      const { data: engineerData } = await supabase
        .from('engineers')
        .select('name')
        .eq('email', email)
        .single();
      
      if (!engineerData) {
        toast.error('Error retrieving engineer information');
        setIsLoading(false);
        return;
      }
      
      // Generate password
      const generatedPassword = generatePassword(engineerData.name);
      
      // Send login credentials via email
      const emailSent = await sendLoginCredentialsEmail(email, generatedPassword);
      
      if (emailSent) {
        toast.success('Login credentials have been sent to your email address');
        setPassword(generatedPassword); // Set the password in state but don't show to user
        setStep('password');
      } else {
        toast.error('Failed to send login credentials. Please try again or contact support.');
      }
    } catch (error) {
      console.error('Error in request access:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Verify this is an authorized engineer before login attempt
      const isAuthorized = await isAuthorizedEngineer(email);
      
      if (!isAuthorized) {
        toast.error('Access denied. You are not authorized to access the engineer portal.');
        setIsLoading(false);
        return;
      }
      
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      {/* Top decorative shape */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-b-[30%] transform skew-y-1 z-0"></div>
      
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl border-0 z-10">
        <CardHeader className="space-y-1 text-center pb-0">
          <div className="flex justify-center w-full">
            <img 
              src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
              alt="Alemara Engineering" 
              className="h-16 mb-2"
              width="auto"
              height="64"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-800">Engineer Portal</CardTitle>
          <CardDescription className="text-slate-600">
            Access to excellence and innovation
          </CardDescription>
          
          <div className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={18} className="text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Your expertise builds tomorrow's world</span>
            </div>
            <p className="text-xs text-emerald-600 italic">
              "Excellence in every calculation, innovation in every design, and precision in every detail."
            </p>
          </div>
        </CardHeader>
        
        {step === 'email' ? (
          <form onSubmit={handleRequestAccess}>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-800">Email</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-slate-700">
                  <Info size={18} />
                  <span className="text-sm font-medium">First time login?</span>
                </div>
                <p className="text-sm text-slate-600">
                  Enter your email address to request access. If you're authorized, 
                  we'll send login details to your email address.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg py-6"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Request Access'}
              </Button>
            </CardFooter>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-800">Email</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    disabled
                    className="pl-10 border-slate-200 bg-slate-50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-800">Password</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter the password sent to your email"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-slate-700">
                  <Info size={18} />
                  <span className="text-sm font-medium">Check your email</span>
                </div>
                <p className="text-sm text-slate-600">
                  We've sent your login credentials to {email}. 
                  Please check your inbox and enter the password provided.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-2">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg py-6"
                disabled={isLoading}
              >
                {isLoading ? 'Connecting...' : 'Access Engineer Tools'}
              </Button>
              <Button 
                type="button" 
                variant="ghost"
                className="text-slate-600"
                onClick={() => setStep('email')}
                disabled={isLoading}
              >
                Back to email entry
              </Button>
            </CardFooter>
          </form>
        )}
      </Card>
    </div>
  );
};

export default EngineerLogin;
