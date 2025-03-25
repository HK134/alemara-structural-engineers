
import React from 'react';
import EngineerDashboardHeader from '@/components/EngineerDashboardHeader';
import EngineerTimesheetComponent from '@/components/EngineerTimesheet';

const EngineerTimesheet = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EngineerDashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Timesheet</h1>
        <EngineerTimesheetComponent />
      </main>
    </div>
  );
};

export default EngineerTimesheet;
