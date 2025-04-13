
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import EngineerManagementComponent from '@/components/admin/EngineerManagement';

const EngineerManagement = () => {
  return (
    <AdminLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-8">Engineer Management</h1>
        <EngineerManagementComponent />
      </div>
    </AdminLayout>
  );
};

export default EngineerManagement;
