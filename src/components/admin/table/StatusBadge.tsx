
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

const statusColors: Record<string, string> = {
  'new': 'bg-blue-500',
  'contacted': 'bg-yellow-500',
  'live': 'bg-purple-500',
  'closed': 'bg-green-500',
  'archived': 'bg-gray-500'
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <Badge className={`${statusColors[status] || 'bg-gray-500'}`}>
      {status}
    </Badge>
  );
};

export default StatusBadge;
