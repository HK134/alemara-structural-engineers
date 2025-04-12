
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BarChart, LineChart } from 'lucide-react';
import LeadAnalytics from '@/components/LeadAnalytics';
import EngineerStats from '@/components/EngineerStats';
import LeadsTabContent from './LeadsTabContent';

type Engineer = {
  id: string;
  name: string;
  email: string;
  active: boolean;
  created_at: string;
}

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

interface AdminDashboardContentProps {
  viewMode: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics';
  submissions: FormSubmission[] | undefined;
  engineers: Engineer[] | undefined;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  currentTab: string;
  onTabChange: (tab: string) => void;
  isLoading: boolean;
  error: Error | null;
  onRefetch: () => void;
  selectedEngineerId?: string | null;
  onEngineerChange?: (engineerId: string | null) => void;
}

const AdminDashboardContent: React.FC<AdminDashboardContentProps> = ({
  viewMode,
  submissions,
  engineers,
  searchQuery,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange,
  currentTab,
  onTabChange,
  isLoading,
  error,
  onRefetch,
  selectedEngineerId,
  onEngineerChange
}) => {
  switch (viewMode) {
    case 'leads':
      return (
        <LeadsTabContent 
          submissions={submissions}
          engineers={engineers}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          currentTab={currentTab}
          onTabChange={onTabChange}
          isLoading={isLoading}
          error={error}
          onRefetch={onRefetch}
          selectedEngineerId={selectedEngineerId}
          onEngineerChange={onEngineerChange}
        />
      );
    case 'map':
      return <LeadAnalytics />;
    case 'engineers':
      return <EngineerStats />;
    case 'seo':
      return (
        <div className="p-4 bg-gray-50 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">SEO Analytics</h2>
          <p className="mb-4">Track and analyze your website's SEO performance with our advanced tools.</p>
          <Link to="/admin/seo">
            <Button className="flex items-center gap-2">
              <BarChart size={16} />
              Go to SEO Dashboard
            </Button>
          </Link>
        </div>
      );
    case 'analytics':
      return (
        <div className="p-4 bg-gray-50 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Website Analytics</h2>
          <p className="mb-4">Monitor your website performance with detailed visitor insights.</p>
          <Link to="/admin/analytics">
            <Button className="flex items-center gap-2">
              <LineChart size={16} />
              Go to Analytics Dashboard
            </Button>
          </Link>
        </div>
      );
    default:
      return null;
  }
};

export default AdminDashboardContent;
