
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

interface AdminSearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const AdminSearchBar: React.FC<AdminSearchBarProps> = ({ 
  searchQuery, 
  onSearchChange 
}) => {
  return (
    <div className="flex items-center w-full md:w-auto relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <Input
        placeholder="Search by name or email"
        className="pl-10 w-full md:w-80"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default AdminSearchBar;
