
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Engineer } from '@/utils/db/types';

interface EngineerBadgeProps {
  engineerId: string | null;
  engineers?: Engineer[];
}

const EngineerBadge: React.FC<EngineerBadgeProps> = ({ engineerId, engineers }) => {
  const getEngineerName = (engineerId: string | null) => {
    if (!engineerId) return 'Not assigned';
    const engineer = engineers?.find(e => e.id === engineerId);
    return engineer ? engineer.name : 'Unknown engineer';
  };

  return engineerId ? (
    <Badge variant="outline" className="bg-slate-100">
      {getEngineerName(engineerId)}
    </Badge>
  ) : (
    <Badge variant="outline" className="text-gray-500">
      Unassigned
    </Badge>
  );
};

export default EngineerBadge;
