
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { Key, User, Info, Sparkles, Lightbulb, Rocket, Brain, Shield, Zap } from 'lucide-react';
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

  // Rotating inspirational messages for engineers
  const inspirationalMessages = [
    "Engineering dreams into reality, one calculation at a time",
    "Where precision meets passion and innovation knows no bounds",
    "Building tomorrow's world with today's brilliance",
    "Your expertise transforms blueprints into landmarks",
    "Turning complex challenges into elegant solutions"
  ];
  
  // Select a random message
  const randomMessage = inspirationalMessages[Math.floor(Math.random() * inspirationalMessages.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 p-4 flex items-center justify-center overflow-hidden relative">
      {/* Enhanced background elements with more modern touch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-500/15 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Additional modern elements */}
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-violet-500/15 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-blue-500/15 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-10"></div>
      </div>
      
      <div className="container max-w-md z-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2 flex justify-center items-center gap-2">
            <Rocket className="h-8 w-8 text-indigo-300" />
            <span>Engineer Portal</span>
          </h1>
          <p className="text-indigo-200 text-sm italic">{randomMessage}</p>
        </div>
        
        <Card className="backdrop-blur-lg bg-white/90 border-0 shadow-xl overflow-hidden relative">
          {/* Enhanced decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-200 to-purple-300 rounded-bl-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-tr-full opacity-20"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-tl from-violet-200 to-indigo-200 rounded-tl-full opacity-10"></div>
          
          <CardHeader className="space-y-1 text-center relative z-10">
            <div className="flex justify-center w-full">
              <div className="relative bg-white/80 p-2 rounded-lg shadow-md mb-2 inline-block">
                <img 
                  src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
                  alt="Alemara Engineering" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800 mt-2">Engineer Access</CardTitle>
            <CardDescription className="text-slate-600">
              Innovation begins with your expertise
            </CardDescription>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-2 mb-1">
                <Brain size={18} className="text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Engineer Excellence Hub</span>
              </div>
              <p className="text-xs text-indigo-600">
                "Bringing structural integrity to every project, and innovative solutions to every challenge."
              </p>
            </div>
          </CardHeader>
          
          {step === 'email' ? (
            <form onSubmit={handleRequestAccess}>
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
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 pl-3"
                      required
                    />
                    <Shield className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-2 mb-2 text-slate-700">
                    <Zap size={18} className="text-violet-500" />
                    <span className="text-sm font-medium">First time logging in?</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Enter your email and we'll send you secure login credentials.
                    Only authorized Alemara engineers can access this portal.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg py-5 shadow-lg relative overflow-hidden group"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? 'Processing...' : 'Request Access'}
                    {!isLoading && <Sparkles className="h-4 w-4 animate-pulse" />}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </CardFooter>
            </form>
          ) : (
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
                      value={email}
                      disabled
                      className="border-slate-200 bg-slate-50 pl-3"
                    />
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
                      placeholder="Enter the password from your email"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 pl-3"
                      required
                    />
                    <Shield className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-lg border border-indigo-100">
                  <div className="flex items-center gap-2 mb-2 text-slate-700">
                    <Info size={18} className="text-indigo-500" />
                    <span className="text-sm font-medium">Check your email</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    We've sent your secure login credentials to {email}. 
                    Please check your inbox and enter the password provided.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-2">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg py-5 shadow-lg relative overflow-hidden group"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? 'Connecting...' : 'Access Engineering Tools'}
                    {!isLoading && <Sparkles className="h-4 w-4 animate-pulse" />}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <Button 
                  type="button" 
                  variant="ghost"
                  className="text-slate-600 hover:text-indigo-700"
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
    </div>
  );
};

export default EngineerLogin;
