
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { createTestSubmission } from '@/utils/testDatabaseConnection';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminDashboardContent from '@/components/admin/AdminDashboardContent';

type FormSubmission = {
  id: string;
  form_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string | null;
  created_at: string;
  status: string;
  postcode: string;
  secured: boolean;
  project_reference: string | null;
  engineer_id: string | null;
  address: string | null;
  completion_date: string | null;
  archived_date: string | null;
}

type Engineer = {
  id: string;
  name: string;
  email: string;
  active: boolean;
  created_at: string;
}

const dummyProject = {
  id: 'dummy-id',
  form_type: 'contact',
  first_name: 'Dummy',
  last_name: 'Project',
  email: 'dummy@project.com',
  phone: '0000000000',
  service_type: 'Extension',
  message: 'This is a dummy/test project submission.',
  created_at: new Date().toISOString(),
  status: 'new',
  postcode: 'N/A',
  secured: false,
  project_reference: 'W-25-001',
  engineer_id: null,
  address: '123 Test Lane, London',
  completion_date: null,
  archived_date: null,
};

const LeadsPage = () => {
  const { logout } = useAuth();
  const [currentTab, setCurrentTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'leads' | 'engineers' | 'analytics'>('leads');
  const [selectedEngineerId, setSelectedEngineerId] = useState<string | null>(null);
  const itemsPerPage = 10;

  const { data: engineers, isLoading: engineersLoading } = useQuery({
    queryKey: ['engineers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('engineers')
        .select('*')
        .eq('active', true)
        .order('name');
        
      if (error) {
        throw new Error(`Error fetching engineers: ${error.message}`);
      }
      
      return data as Engineer[];
    }
  });

  const { data: submissions, isLoading, error, refetch } = useQuery({
    queryKey: ['formSubmissions', currentTab, searchQuery, currentPage, selectedEngineerId],
    queryFn: async () => {
      let query = supabase
        .from('form_submissions')
        .select('*');

      if (currentTab !== 'all') {
        query = query.eq('status', currentTab);
      }

      if (searchQuery) {
        query = query.or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`);
      }
      
      if (selectedEngineerId) {
        query = query.eq('engineer_id', selectedEngineerId);
      }

      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;
      query = query.range(from, to).order('created_at', { ascending: false });

      const { data, error } = await query;
      if (error) throw new Error(`Error fetching submissions: ${error.message}`);
      if (!data || data.length === 0) {
        return [dummyProject];
      }
      return data as FormSubmission[];
    },
    refetchOnWindowFocus: true,
    retry: 2
  });

  const { data: totalCount } = useQuery({
    queryKey: ['formSubmissionsCount', currentTab, searchQuery, selectedEngineerId],
    queryFn: async () => {
      let query = supabase
        .from('form_submissions')
        .select('id', { count: 'exact' });

      if (currentTab !== 'all') {
        query = query.eq('status', currentTab);
      }

      if (searchQuery) {
        query = query.or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`);
      }
      
      if (selectedEngineerId) {
        query = query.eq('engineer_id', selectedEngineerId);
      }

      const { count, error } = await query;
      if (error) throw new Error(`Error counting submissions: ${error.message}`);
      return count || 1;
    }
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab, searchQuery, selectedEngineerId]);

  const totalPages = totalCount ? Math.ceil(totalCount / itemsPerPage) : 1;

  const handleManualRefresh = () => {
    toast.info("Refreshing data...");
    refetch();
  };

  const handleCreateTestSubmission = async () => {
    try {
      const result = await createTestSubmission();
      if (result.success) {
        toast.success('Test submission created successfully');
        refetch();
      } else {
        toast.error('Failed to create test submission');
      }
    } catch (error) {
      toast.error('Failed to create test submission');
    }
  };

  const handleEngineerChange = (engineerId: string | null) => {
    setSelectedEngineerId(engineerId);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <AdminHeader 
        title="Lead Management Dashboard"
        onLogout={logout}
        onRefresh={handleManualRefresh}
        onCreateTestSubmission={handleCreateTestSubmission}
        viewMode={viewMode}
        onViewChange={setViewMode}
      />

      <AdminDashboardContent 
        viewMode={viewMode}
        submissions={submissions}
        engineers={engineers}
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        isLoading={isLoading}
        error={error as Error}
        onRefetch={refetch}
        selectedEngineerId={selectedEngineerId}
        onEngineerChange={handleEngineerChange}
      />
    </div>
  );
};

export default LeadsPage;

