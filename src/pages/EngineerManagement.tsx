
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import EngineerManagementComponent from '@/components/admin/EngineerManagement';

const EngineerManagement: React.FC = () => {
  return (
    <AdminLayout>
      <EngineerManagementComponent />
    </AdminLayout>
  );
};

export default EngineerManagement;
