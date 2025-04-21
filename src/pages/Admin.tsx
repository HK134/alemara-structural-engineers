
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

const Admin = () => {
  const { logout } = useAuth();
  const [currentTab, setCurrentTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'leads' | 'engineers' | 'analytics'>('leads');
  const [selectedEngineerId, setSelectedEngineerId] = useState<string | null>(null);
  const itemsPerPage = 10;

  // Fetch engineers
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

  // Fetch form submissions
  const { data: submissions, isLoading, error, refetch } = useQuery({
    queryKey: ['formSubmissions', currentTab, searchQuery, currentPage, selectedEngineerId],
    queryFn: async () => {
      console.log("Fetching submissions with filters:", { currentTab, searchQuery, currentPage, selectedEngineerId });
      
      let query = supabase
        .from('form_submissions')
        .select('*');

      // Apply status filter
      if (currentTab !== 'all') {
        console.log(`Applying status filter: ${currentTab}`);
        query = query.eq('status', currentTab);
      }

      // Apply search query
      if (searchQuery) {
        console.log(`Applying search query: ${searchQuery}`);
        query = query.or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`);
      }
      
      // Apply engineer filter
      if (selectedEngineerId) {
        console.log(`Applying engineer filter: ${selectedEngineerId}`);
        query = query.eq('engineer_id', selectedEngineerId);
      }

      // Apply pagination
      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;
      console.log(`Applying pagination: rows ${from} to ${to}`);
      query = query.range(from, to).order('created_at', { ascending: false });

      console.log("Executing Supabase query...");
      const { data, error } = await query;
      
      if (error) {
        console.error("Error fetching submissions:", error);
        throw new Error(`Error fetching submissions: ${error.message}`);
      }
      
      console.log("Fetched submissions:", data);
      return data as FormSubmission[];
    },
    refetchOnWindowFocus: true,
    retry: 2
  });

  // Fetch total count for pagination
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
      
      if (error) {
        console.error("Error counting submissions:", error);
        throw new Error(`Error counting submissions: ${error.message}`);
      }
      
      console.log("Total count of submissions:", count);
      return count || 0;
    }
  });

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab, searchQuery, selectedEngineerId]);

  useEffect(() => {
    const checkSubmissions = async () => {
      console.log("Debug: Checking for submissions in database...");
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*');
      
      if (error) {
        console.error("Debug check failed:", error);
        toast.error("Error fetching form submissions. Please check console for details.");
      } else {
        console.log("Debug: All submissions in database:", data);
        if (data && data.length > 0) {
          console.log("Database has submissions, but they may not be shown due to filters");
        } else {
          console.log("No submissions found in database");
          toast.info("No submissions found in the database. Try submitting a new form.");
        }
      }
    };
    
    checkSubmissions();
    
    const refreshTimer = setTimeout(() => {
      console.log("Forcing refetch of submissions...");
      refetch();
    }, 1000);
    
    return () => clearTimeout(refreshTimer);
  }, [refetch]);

  const totalPages = totalCount ? Math.ceil(totalCount / itemsPerPage) : 1;

  const handleManualRefresh = () => {
    console.log("Manual refresh requested");
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
      console.error('Error creating test submission:', error);
      toast.error('Failed to create test submission');
    }
  };

  const handleEngineerChange = (engineerId: string | null) => {
    setSelectedEngineerId(engineerId);
    console.log(`Engineer filter changed to: ${engineerId || 'All Engineers'}`);
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

export default Admin;
