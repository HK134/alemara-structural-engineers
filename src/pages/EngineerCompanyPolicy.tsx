
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EngineerCompanyPolicy = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Company Policy</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Alemara Engineering Policies</CardTitle>
          <CardDescription>
            Essential company policies and guidelines for all engineers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="code-of-conduct">
              <AccordionTrigger>Code of Conduct</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    All Alemara Engineering staff are expected to maintain the highest standards of 
                    professional conduct when representing the company. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Treating all clients, colleagues, and partners with respect and courtesy</li>
                    <li>Maintaining confidentiality regarding client information and projects</li>
                    <li>Avoiding conflicts of interest or actions that could harm the company's reputation</li>
                    <li>Adhering to all safety protocols and regulations</li>
                    <li>Reporting any concerns or violations through proper channels</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="work-quality">
              <AccordionTrigger>Work Quality Standards</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Alemara Engineering is committed to delivering exceptional quality in all projects. 
                    Engineers must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Follow all applicable engineering standards and building codes</li>
                    <li>Maintain detailed and accurate documentation</li>
                    <li>Perform thorough quality checks before delivering any work</li>
                    <li>Seek peer review for complex calculations or designs</li>
                    <li>Continuously update skills and knowledge of industry best practices</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="health-safety">
              <AccordionTrigger>Health & Safety Guidelines</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Safety is our top priority at all times. All engineers must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Complete required safety training before visiting any sites</li>
                    <li>Always wear appropriate PPE (Personal Protective Equipment)</li>
                    <li>Report any unsafe conditions immediately</li>
                    <li>Never take unnecessary risks on site</li>
                    <li>Be familiar with emergency procedures for all work locations</li>
                    <li>Ensure proper risk assessments are completed before beginning work</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="expenses">
              <AccordionTrigger>Expenses & Reimbursement</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Alemara Engineering will reimburse legitimate business expenses. Guidelines include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All expenses must be submitted with receipts within 30 days</li>
                    <li>Travel expenses must be pre-approved for non-standard site visits</li>
                    <li>Use company-approved vendors and services when possible</li>
                    <li>Adhere to spending limits for meals and accommodations</li>
                    <li>Complete expense reports accurately and honestly</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Required Documents</CardTitle>
          <CardDescription>
            Essential forms and documents for company operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-medium mb-2">Site Visit Checklist</h3>
              <p className="text-sm text-gray-500 mb-4">Required before any site assessment</p>
              <a href="#" className="text-sm text-blue-600 hover:underline">Download PDF</a>
            </div>
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-medium mb-2">Health & Safety Manual</h3>
              <p className="text-sm text-gray-500 mb-4">Complete safety procedures and policies</p>
              <a href="#" className="text-sm text-blue-600 hover:underline">Download PDF</a>
            </div>
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-medium mb-2">Expense Claim Form</h3>
              <p className="text-sm text-gray-500 mb-4">For submitting business expenses</p>
              <a href="#" className="text-sm text-blue-600 hover:underline">Download Excel</a>
            </div>
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-medium mb-2">Project Sign-off Template</h3>
              <p className="text-sm text-gray-500 mb-4">For client approval on project completion</p>
              <a href="#" className="text-sm text-blue-600 hover:underline">Download Word</a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EngineerCompanyPolicy;
