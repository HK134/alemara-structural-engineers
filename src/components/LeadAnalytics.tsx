
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data (in a real app, this would come from an API or props)
const monthlyLeads = [
  { name: 'Jan', leads: 65 },
  { name: 'Feb', leads: 59 },
  { name: 'Mar', leads: 80 },
  { name: 'Apr', leads: 81 },
  { name: 'May', leads: 56 },
  { name: 'Jun', leads: 55 },
  { name: 'Jul', leads: 40 },
  { name: 'Aug', leads: 33 },
  { name: 'Sep', leads: 45 },
  { name: 'Oct', leads: 78 },
  { name: 'Nov', leads: 69 },
  { name: 'Dec', leads: 91 },
];

const conversionData = [
  { name: 'Jan', leads: 65, converted: 25 },
  { name: 'Feb', leads: 59, converted: 20 },
  { name: 'Mar', leads: 80, converted: 35 },
  { name: 'Apr', leads: 81, converted: 40 },
  { name: 'May', leads: 56, converted: 22 },
  { name: 'Jun', leads: 55, converted: 18 },
];

const LeadAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Generation</CardTitle>
            <CardDescription>Monthly leads for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyLeads}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="leads" fill="#ea384c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Lead Conversion Rate</CardTitle>
            <CardDescription>Leads vs. converted projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={conversionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="leads" 
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="converted" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Distribution by Service Type</CardTitle>
            <CardDescription>Number of leads by service category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { name: 'Residential', value: 150 },
                    { name: 'Commercial', value: 75 },
                    { name: 'Loft Conversion', value: 120 },
                    { name: 'Extension', value: 90 },
                    { name: 'Structural Survey', value: 60 },
                    { name: 'Other', value: 30 },
                  ]}
                  margin={{ top: 5, right: 30, left: 90, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#1A1F2C" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadAnalytics;
