
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { setupEngineer } from '@/utils/engineerSetup';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

interface CreateEngineerFormValues {
  name: string;
  email: string;
}

const CreateEngineerForm = () => {
  const form = useForm<CreateEngineerFormValues>();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: CreateEngineerFormValues) => {
    setIsLoading(true);
    try {
      const result = await setupEngineer(data);
      
      if (result.success) {
        toast.success(result.message);
        if (result.credentials?.password) {
          toast.info(`Generated password: ${result.credentials.password}`, {
            duration: 10000
          });
        }
        form.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error creating engineer:', error);
      toast.error('Failed to create engineer');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Engineer Account</CardTitle>
        <CardDescription>Add a new engineer to the system</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="john@example.com" disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Engineer"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateEngineerForm;
