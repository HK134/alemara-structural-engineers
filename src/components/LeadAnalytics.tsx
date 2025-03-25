
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartBarIcon, ChartPieIcon, LockClosedIcon, Users } from 'lucide-react';
import LeadsMap from './LeadsMap';

const LeadAnalytics = () => {
  // Fetch summary statistics for leads
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['leadStats'],
    queryFn: async () => {
      // Get total count
      const { count: totalCount, error: countError } = await supabase
        .from('form_submissions')
        .select('*', { count: 'exact', head: true });
      
      if (countError) throw countError;

      // Get secured count
      const { count: securedCount, error: securedError } = await supabase
        .from('form_submissions')
        .select('*', { count: 'exact', head: true })
        .eq('secured', true);
      
      if (securedError) throw securedError;

      // Get counts by status
      const { data: statusData, error: statusError } = await supabase
        .from('form_submissions')
        .select('status, count')
        .group('status');
      
      if (statusError) throw statusError;

      // Get secured value (assuming each secured project has equal value)
      const averageProjectValue = 5000; // Example value in £
      const totalSecuredValue = securedCount * averageProjectValue;

      // Format status data for chart
      const statusCounts = statusData.reduce((acc, curr) => {
        acc[curr.status] = parseInt(curr.count);
        return acc;
      }, {});

      return {
        totalLeads: totalCount || 0,
        securedLeads: securedCount || 0,
        securedPercentage: totalCount ? Math.round((securedCount / totalCount) * 100) : 0,
        totalSecuredValue,
        statusCounts: {
          new: statusCounts.new || 0,
          contacted: statusCounts.contacted || 0,
          closed: statusCounts.closed || 0,
          archived: statusCounts.archived || 0
        }
      };
    }
  });

  // Prepare chart data
  const statusChartData = React.useMemo(() => {
    if (!stats) return [];
    
    return [
      { name: 'New', value: stats.statusCounts.new, color: '#3b82f6' },
      { name: 'Contacted', value: stats.statusCounts.contacted, color: '#eab308' },
      { name: 'Closed', value: stats.statusCounts.closed, color: '#22c55e' },
      { name: 'Archived', value: stats.statusCounts.archived, color: '#6b7280' }
    ];
  }, [stats]);

  const conversionData = React.useMemo(() => {
    if (!stats) return [];
    
    return [
      { name: 'Secured', value: stats.securedLeads, color: '#22c55e' },
      { name: 'Not Secured', value: stats.totalLeads - stats.securedLeads, color: '#d1d5db' }
    ];
  }, [stats]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Lead Analytics</h2>
        <p className="text-muted-foreground">
          Visualize and analyze your leads data
        </p>
      </div>
      
      {statsLoading ? (
        <div className="flex items-center justify-center h-40">
          <div className="text-xl text-muted-foreground">Loading statistics...</div>
        </div>
      ) : (
        <>
          {/* Key metrics cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{stats?.totalLeads || 0}</div>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{stats?.securedPercentage || 0}%</div>
                  <ChartBarIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Secured Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{stats?.securedLeads || 0}</div>
                  <LockClosedIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Potential Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">£{stats?.totalSecuredValue?.toLocaleString() || 0}</div>
                  <ChartPieIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Status Distribution</CardTitle>
                <CardDescription>Breakdown of leads by their current status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ChartContainer 
                    className="h-full"
                    config={{
                      new: { color: '#3b82f6' },
                      contacted: { color: '#eab308' },
                      closed: { color: '#22c55e' },
                      archived: { color: '#6b7280' }
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={statusChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent 
                              formatter={(value, name) => [`${value} leads`, name]}
                            />
                          }
                        />
                        <Bar dataKey="value">
                          {statusChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="flex justify-center mt-4 gap-4">
                  {statusChartData.map((status, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }}></div>
                      <span className="text-sm">{status.name}: {status.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>Percentage of leads converted to secured projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ChartContainer 
                    className="h-full"
                    config={{
                      secured: { color: '#22c55e' },
                      notSecured: { color: '#d1d5db' }
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={conversionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={90}
                          dataKey="value"
                        >
                          {conversionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip
                          content={
                            <ChartTooltipContent 
                              formatter={(value, name) => [`${value} leads`, name]}
                            />
                          }
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <Badge className="text-lg px-3 py-1 bg-green-600">
                    {stats?.securedPercentage || 0}% Conversion Rate
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map visualization */}
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>View where your leads are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <LeadsMap />
              </div>
            </CardContent>
          </Card>
        </>
      )}

      <div className="bg-muted/50 p-4 rounded-lg text-sm">
        <p className="font-medium">Analytics insights</p>
        <p className="text-muted-foreground mt-1">
          This dashboard shows key metrics about your leads including total count, secured projects,
          conversion rates, and geographic distribution. Use these insights to track your business performance
          and identify areas for improvement.
        </p>
      </div>
    </div>
  );
};

export default LeadAnalytics;
