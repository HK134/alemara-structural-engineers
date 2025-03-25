
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Percent, AlertCircle, BarChart3, PieChart, MapPin } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';
import LeadsMap from './LeadsMap';

const LeadAnalytics = () => {
  // Use React Query to fetch lead statistics
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['leadStats'],
    queryFn: async () => {
      // Get total number of leads
      const { count: totalLeads, error: countError } = await supabase
        .from('form_submissions')
        .select('*', { count: 'exact', head: true });
      
      if (countError) throw countError;

      // Get number of secured projects
      const { data: securedData, error: securedError } = await supabase
        .from('form_submissions')
        .select('*')
        .eq('status', 'secured');
      
      if (securedError) throw securedError;

      // Get counts by status using the RPC function
      const { data: statusData, error: statusError } = await supabase
        .rpc('get_status_counts');
      
      if (statusError) throw statusError;

      // Initialize status counts
      const statusCounts = {
        new: 0,
        contacted: 0,
        follow_up: 0,
        meeting_scheduled: 0,
        proposal_sent: 0,
        secured: 0,
        lost: 0,
        not_responded: 0
      };
      
      // Process the status counts from the RPC function
      if (statusData) {
        statusData.forEach((item) => {
          if (statusCounts.hasOwnProperty(item.status)) {
            // Convert the count to a number since it might come as a string
            statusCounts[item.status as keyof typeof statusCounts] = Number(item.count);
          }
        });
      }

      // Calculate secured percentage
      const securedPercentage = totalLeads && totalLeads > 0
        ? ((securedData?.length || 0) / totalLeads) * 100
        : 0;

      // Calculate potential revenue (assuming average project value of £2,500)
      const potentialRevenue = (securedData?.length || 0) * 2500;

      return {
        totalLeads,
        securedPercentage,
        securedProjects: securedData?.length || 0,
        potentialRevenue,
        statusCounts
      };
    },
  });

  // Prepare data for bar chart
  const barChartData = stats ? Object.entries(stats.statusCounts).map(([status, count]) => ({
    name: status.replace('_', ' ').charAt(0).toUpperCase() + status.replace('_', ' ').slice(1),
    value: count
  })) : [];

  // Prepare data for pie chart
  const pieChartData = stats ? [
    { name: 'Secured', value: stats.securedProjects },
    { name: 'Other', value: (stats.totalLeads || 0) - (stats.securedProjects || 0) }
  ] : [];

  const COLORS = ['#22c55e', '#e4e4e7'];

  if (isLoading) return <div className="p-8 text-center">Loading analytics data...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error loading analytics data</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Lead Analytics Dashboard</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalLeads || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Secured Rate</CardTitle>
          </CardHeader>
          <CardContent className="flex items-baseline">
            <div className="text-2xl font-bold">{stats?.securedPercentage.toFixed(1) || 0}%</div>
            <Percent className="h-4 w-4 ml-1 text-muted-foreground" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Secured Projects</CardTitle>
          </CardHeader>
          <CardContent className="flex items-baseline">
            <div className="text-2xl font-bold">{stats?.securedProjects || 0}</div>
            <Lock className="h-4 w-4 ml-2 text-green-500" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Potential Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£{stats?.potentialRevenue.toLocaleString() || 0}</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Lead Status Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#ea384c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="mr-2 h-5 w-5" />
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Map Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Lead Locations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <LeadsMap />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadAnalytics;
