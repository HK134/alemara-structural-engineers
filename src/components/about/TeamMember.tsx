
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[#ea384c]/20">
          {image ? (
            <Avatar className="w-full h-full">
              <AvatarImage src={image} alt={`${name} - ${role}`} className="object-cover" />
              <AvatarFallback className="bg-[#ea384c]/10 text-[#ea384c] text-2xl">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#ea384c]/10">
              <User className="h-10 w-10 text-[#ea384c]/70" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-[#1A1F2C]">{name}</h3>
        <div className="text-sm font-medium text-[#ea384c] mt-1 mb-3">{role}</div>
      </div>
      
      <p className="text-sm text-gray-600 text-center">{bio}</p>
    </div>
  );
};

export default TeamMember;
