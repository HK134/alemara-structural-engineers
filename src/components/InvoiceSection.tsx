
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Receipt, Calendar, FileText, Download, PoundSterling, Clock } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Types for invoices
type InvoiceStatus = 'paid' | 'due' | 'overdue' | 'upcoming';

interface Invoice {
  id: string;
  projectRef: string;
  projectName: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
  description: string;
}

const InvoiceSection = () => {
  // Mock data for invoices - in a real application, this would come from Supabase
  const invoices: Invoice[] = [
    {
      id: "INV-2024-001",
      projectRef: "W-25-001",
      projectName: "Home Extension Survey",
      amount: 950.00,
      issueDate: "2024-07-15",
      dueDate: "2024-08-15",
      status: "due",
      description: "Structural survey and report for home extension project"
    },
    {
      id: "INV-2024-002",
      projectRef: "W-25-003",
      projectName: "Building Regulations",
      amount: 1250.00,
      issueDate: "2024-07-10",
      dueDate: "2024-07-24",
      status: "overdue",
      description: "Building regulations compliance assessment and certification"
    },
    {
      id: "INV-2024-003",
      projectRef: "W-25-004",
      projectName: "Commercial Development",
      amount: 750.00,
      issueDate: "2024-08-01",
      dueDate: "2024-09-01",
      status: "upcoming",
      description: "Initial deposit for commercial development structural assessment"
    },
    {
      id: "INV-2024-004",
      projectRef: "W-25-002",
      projectName: "Structural Assessment",
      amount: 1100.00,
      issueDate: "2024-06-10",
      dueDate: "2024-07-10",
      status: "paid",
      description: "Full structural assessment of existing property"
    }
  ];

  // Filter invoices for different tabs
  const dueInvoices = invoices.filter(invoice => invoice.status === 'due' || invoice.status === 'overdue');
  const upcomingInvoices = invoices.filter(invoice => invoice.status === 'upcoming');
  const paidInvoices = invoices.filter(invoice => invoice.status === 'paid');

  // Get the total amount due
  const totalDue = dueInvoices.reduce((total, invoice) => total + invoice.amount, 0);

  // Helper function to render status badge
  const renderStatusBadge = (status: InvoiceStatus) => {
    switch(status) {
      case 'paid':
        return <Badge className="bg-green-500">Paid</Badge>;
      case 'due':
        return <Badge className="bg-amber-500">Due</Badge>;
      case 'overdue':
        return <Badge className="bg-red-500">Overdue</Badge>;
      case 'upcoming':
        return <Badge className="bg-blue-500">Upcoming</Badge>;
      default:
        return null;
    }
  };

  // Invoice detail component
  const InvoiceDetailSheet = ({ invoice }: { invoice: Invoice }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">View</Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Invoice {invoice.id}</SheetTitle>
          <SheetDescription>
            {invoice.projectName} ({invoice.projectRef})
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-medium">London Structural Surveys</h3>
              <p className="text-sm text-gray-500">123 Engineering Avenue</p>
              <p className="text-sm text-gray-500">London, W1 1AA</p>
            </div>
            <div className="text-right">
              {renderStatusBadge(invoice.status)}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Invoice Details</h4>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-sm">Invoice Number:</p>
              <p className="text-sm font-medium">{invoice.id}</p>
              
              <p className="text-sm">Issue Date:</p>
              <p className="text-sm font-medium">{invoice.issueDate}</p>
              
              <p className="text-sm">Due Date:</p>
              <p className="text-sm font-medium">{invoice.dueDate}</p>
              
              <p className="text-sm">Project Reference:</p>
              <p className="text-sm font-medium">{invoice.projectRef}</p>
            </div>
          </div>

          <div className="border rounded-md p-4 mb-6">
            <h4 className="text-sm font-medium mb-2">Services</h4>
            <div className="mb-3">
              <p className="text-sm font-medium">{invoice.projectName}</p>
              <p className="text-sm text-gray-500">{invoice.description}</p>
            </div>
            <div className="flex justify-between border-t pt-2">
              <p className="font-medium">Total Amount:</p>
              <p className="font-bold">£{invoice.amount.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Payment due by {invoice.dueDate}
            </p>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Invoices</CardTitle>
            <CardDescription>Manage your project invoices</CardDescription>
          </div>
          {totalDue > 0 && (
            <Card className="bg-amber-50 px-3 py-2">
              <div className="flex items-center text-amber-800">
                <PoundSterling className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-xs font-medium">Total Due</p>
                  <p className="text-lg font-bold">£{totalDue.toFixed(2)}</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="due">
          <TabsList className="mb-4">
            <TabsTrigger value="due" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Due ({dueInvoices.length})
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming ({upcomingInvoices.length})
            </TabsTrigger>
            <TabsTrigger value="paid" className="flex items-center">
              <Receipt className="h-4 w-4 mr-2" />
              Paid ({paidInvoices.length})
            </TabsTrigger>
            <TabsTrigger value="all" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              All ({invoices.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="due">
            {dueInvoices.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dueInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{invoice.projectName}</p>
                          <p className="text-xs text-gray-500">{invoice.projectRef}</p>
                        </div>
                      </TableCell>
                      <TableCell>£{invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>{renderStatusBadge(invoice.status)}</TableCell>
                      <TableCell className="text-right">
                        <InvoiceDetailSheet invoice={invoice} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-6 bg-gray-50 rounded-md">
                <Receipt className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">No due invoices</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming">
            {upcomingInvoices.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{invoice.projectName}</p>
                          <p className="text-xs text-gray-500">{invoice.projectRef}</p>
                        </div>
                      </TableCell>
                      <TableCell>£{invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{invoice.issueDate}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell className="text-right">
                        <InvoiceDetailSheet invoice={invoice} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-6 bg-gray-50 rounded-md">
                <Calendar className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">No upcoming invoices</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="paid">
            {paidInvoices.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Paid Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paidInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{invoice.projectName}</p>
                          <p className="text-xs text-gray-500">{invoice.projectRef}</p>
                        </div>
                      </TableCell>
                      <TableCell>£{invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell className="text-right">
                        <InvoiceDetailSheet invoice={invoice} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-6 bg-gray-50 rounded-md">
                <Receipt className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">No paid invoices</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="all">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{invoice.projectName}</p>
                        <p className="text-xs text-gray-500">{invoice.projectRef}</p>
                      </div>
                    </TableCell>
                    <TableCell>£{invoice.amount.toFixed(2)}</TableCell>
                    <TableCell>{invoice.issueDate}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell>{renderStatusBadge(invoice.status)}</TableCell>
                    <TableCell className="text-right">
                      <InvoiceDetailSheet invoice={invoice} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" className="flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Download All Invoices
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InvoiceSection;
