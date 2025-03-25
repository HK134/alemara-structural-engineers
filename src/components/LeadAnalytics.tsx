
import React from 'react';
import LeadsMap from './LeadsMap';

const LeadAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Lead Analytics</h2>
        <p className="text-muted-foreground">
          Visualize where your leads are coming from across London
        </p>
      </div>
      
      <LeadsMap />
      
      <div className="bg-muted/50 p-4 rounded-lg text-sm">
        <p className="font-medium">Geographic insights</p>
        <p className="text-muted-foreground mt-1">
          This map shows the geographic distribution of your leads based on postcodes. 
          Each marker color indicates the status of the lead. 
          Click on markers to see more details about each lead.
        </p>
      </div>
    </div>
  );
};

export default LeadAnalytics;
