
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createEngineer } from '@/utils/db/engineers';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { UserPlus, Mail, Check, AlertCircle, User } from 'lucide-react';

const EngineerManagement = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultPassword, setResultPassword] = useState<string | null>(null);
  const queryClient = useQueryClient();
  
  // Query to fetch engineers
  const { data: engineers, isLoading } = useQuery({
    queryKey: ['engineers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('engineers')
        .select('*')
        .order('name');
      
      if (error) throw new Error(error.message);
      return data;
    }
  });
  
  // Mutation to create an engineer
  const createEngineerMutation = useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      setIsSubmitting(true);
      const result = await createEngineer(name, email);
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      return result;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      
      // Check if a password was returned and show it
      if (data.data?.password) {
        setResultPassword(data.data.password);
      }
      
      // Reset form
      setName('');
      setEmail('');
      
      // Refresh engineers list
      queryClient.invalidateQueries({ queryKey: ['engineers'] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim() || !email.trim()) {
      toast.error('Name and email are required');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    // Clear any previous password result
    setResultPassword(null);
    
    // Submit the form
    createEngineerMutation.mutate({ name, email });
  };
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-primary" />
            Add New Engineer
          </CardTitle>
          <CardDescription>
            Create a new engineer account with auto-generated password
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Engineer Name
                </span>
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  Email Address
                </span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="engineer@example.com"
              />
            </div>
            
            {resultPassword && (
              <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-md">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Engineer added successfully!</p>
                    <p className="text-sm text-green-700 mt-1">
                      An email has been sent, but here's the generated password for your records:
                    </p>
                    <p className="mt-2 font-mono bg-white p-2 rounded border border-green-200 text-sm">
                      {resultPassword}
                    </p>
                    <p className="text-xs text-green-600 mt-2">
                      Please save this password in a secure location. It won't be shown again.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Engineer Account'}
              {!isSubmitting && <UserPlus className="h-4 w-4" />}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      {isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Existing Engineers</CardTitle>
            <CardDescription>Engineers with system access</CardDescription>
          </CardHeader>
          <CardContent>
            {engineers && engineers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-medium">Name</th>
                      <th className="text-left py-2 px-4 font-medium">Email</th>
                      <th className="text-left py-2 px-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {engineers.map((engineer) => (
                      <tr key={engineer.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{engineer.name}</td>
                        <td className="py-3 px-4">{engineer.email}</td>
                        <td className="py-3 px-4">
                          {engineer.active ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              Inactive
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <AlertCircle className="mx-auto h-8 w-8 mb-2" />
                <p>No engineers found</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EngineerManagement;
