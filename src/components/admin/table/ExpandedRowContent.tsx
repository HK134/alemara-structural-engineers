
import React from 'react';
import { UserCheck } from 'lucide-react';
import { FormSubmission } from '@/utils/db/types';

interface ExpandedRowContentProps {
  submission: FormSubmission;
}

const ExpandedRowContent: React.FC<ExpandedRowContentProps> = ({ submission }) => {
  return (
    <div className="p-4 bg-slate-50 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold mb-1">Postcode</h4>
          <p className="text-sm">{submission.postcode || 'Not provided'}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-1">Address</h4>
          <p className="text-sm">{submission.address || 'Not provided'}</p>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold mb-1">Service Type</h4>
          <p className="text-sm">{submission.service_type}</p>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold mb-1">Client Message</h4>
          <div className="bg-white p-3 rounded border text-sm max-h-48 overflow-y-auto">
            {submission.message ? 
              <p className="whitespace-pre-wrap">{submission.message}</p> : 
              <p className="text-gray-500 italic">No message provided</p>
            }
          </div>
        </div>
        
        {submission.secured && (
          <div className="md:col-span-2 flex items-center space-x-2 bg-green-100 p-3 rounded">
            <UserCheck className="text-green-600" size={18} />
            <span className="text-green-700 text-sm">
              Client portal access enabled with their email as login
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandedRowContent;
