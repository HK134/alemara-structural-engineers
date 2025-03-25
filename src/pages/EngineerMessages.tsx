
import React from 'react';
import EngineerDashboardHeader from '@/components/EngineerDashboardHeader';
import AIDraftGenerator from '@/components/AIDraftGenerator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const EngineerMessages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EngineerDashboardHeader />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Client Response Assistant</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Response Draft Generator</CardTitle>
                <CardDescription>
                  Generate professional response drafts for new client inquiries.
                  Customize the template options to match the specific requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AIDraftGenerator />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Project Documentation
                </CardTitle>
                <CardDescription>
                  When projects are secured, a new folder is automatically created in your company OneDrive.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm">
                    <p>All secured projects have dedicated folders for:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Client communication</li>
                      <li>Technical drawings</li>
                      <li>Site visit photos</li>
                      <li>Contracts and agreements</li>
                      <li>Invoices and financial documents</li>
                    </ul>
                  </div>
                  
                  <div className="text-sm text-muted-foreground border-t pt-4">
                    <p>Folder naming convention:</p>
                    <p className="font-mono bg-gray-100 p-2 rounded mt-1">
                      Project-REF123 - Customer Name
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerMessages;
