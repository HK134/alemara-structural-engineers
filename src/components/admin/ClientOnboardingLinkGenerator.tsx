
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Copy, Link2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const ClientOnboardingLinkGenerator = () => {
  const [copied, setCopied] = useState(false);
  const baseUrl = window.location.origin;
  const onboardingLink = `${baseUrl}/client-onboarding`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(onboardingLink)
      .then(() => {
        setCopied(true);
        toast.success('Link copied to clipboard');
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy link: ', err);
        toast.error('Failed to copy link');
      });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Link2 className="mr-2 h-5 w-5 text-primary" />
          Client Onboarding Link
        </CardTitle>
        <CardDescription>
          Share this link with clients who contact you via phone or email to add them to your lead system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Input 
              value={onboardingLink} 
              readOnly 
              className="font-mono text-sm"
            />
            <Button 
              onClick={copyToClipboard} 
              variant="outline"
              className="flex-shrink-0"
            >
              {copied ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-muted/20 p-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
          <span>No login required for clients</span>
        </div>
        <div className="flex items-center">
          <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
          <span>Direct entry to lead system</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ClientOnboardingLinkGenerator;
