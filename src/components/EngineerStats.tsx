
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Archive } from 'lucide-react';
import { getProjectsEligibleForArchiving } from '@/utils/formSubmissionDB';

// Define the type for engineer stats
type EngineerStat = {
  engineer_id: string;
  engineer_name: string;
  project_count: number;
  secured_count: number;
};

const EngineerStats = () => {
  // Fetch engineer stats using the database function
  const { data: engineerStats, isLoading } = useQuery({
    queryKey: ['engineerStats'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_engineer_stats');
      
      if (error) {
        throw new Error(`Error fetching engineer stats: ${error.message}`);
      }
      
      return data as EngineerStat[];
    }
  });

  // Get projects eligible for archiving
  const { data: archivableProjects } = useQuery({
    queryKey: ['archivableProjects'],
    queryFn: async () => {
      const result = await getProjectsEligibleForArchiving();
      return result.success ? result.data : [];
    }
  });

  // Get top 3 engineers for the leaderboard
  const topEngineers = engineerStats?.slice(0, 3) || [];

  // Get the icon based on position
  const getPositionIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 2:
        return <Award className="h-5 w-5 text-amber-700" />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div className="p-4">Loading engineer statistics...</div>;
  }

  return (
    <div className="space-y-6">
      {archivableProjects && archivableProjects.length > 0 && (
        <Card className="border-amber-500 border bg-amber-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Archive className="h-5 w-5 text-amber-600" />
              Storage Management Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-800">
              {archivableProjects.length} completed {archivableProjects.length === 1 ? 'project has' : 'projects have'} been completed for over 30 days.
              These projects can be archived to OneDrive to optimize storage costs.
            </p>
          </CardContent>
        </Card>
      )}
      
      <h2 className="text-2xl font-bold">Engineer Leaderboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topEngineers.map((engineer, index) => (
          <Card key={engineer.engineer_id} className={index === 0 ? "border-yellow-500 border-2" : ""}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center gap-2">
                  {getPositionIcon(index)}
                  {engineer.engineer_name}
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  Rank #{index + 1}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-muted rounded-md">
                  <div className="text-2xl font-bold">{engineer.project_count}</div>
                  <div className="text-xs text-muted-foreground">Total Projects</div>
                </div>
                <div className="text-center p-2 bg-muted rounded-md">
                  <div className="text-2xl font-bold">{engineer.secured_count}</div>
                  <div className="text-xs text-muted-foreground">Secured Projects</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-8">All Engineers</h3>
      <div className="overflow-hidden rounded-md border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="py-3 px-4 text-left font-medium">Rank</th>
              <th className="py-3 px-4 text-left font-medium">Engineer</th>
              <th className="py-3 px-4 text-left font-medium">Total Projects</th>
              <th className="py-3 px-4 text-left font-medium">Secured Projects</th>
              <th className="py-3 px-4 text-left font-medium">Conversion Rate</th>
            </tr>
          </thead>
          <tbody>
            {engineerStats?.map((engineer, index) => (
              <tr key={engineer.engineer_id} className="border-t">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{engineer.engineer_name}</td>
                <td className="py-3 px-4">{engineer.project_count}</td>
                <td className="py-3 px-4">{engineer.secured_count}</td>
                <td className="py-3 px-4">
                  {engineer.project_count > 0 
                    ? `${Math.round((engineer.secured_count / engineer.project_count) * 100)}%` 
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EngineerStats;
