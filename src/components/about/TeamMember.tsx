
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
}

const TeamMember = ({ name, role, image, bio, email }: TeamMemberProps) => {
  // Format the first name for email if not provided
  const firstName = name.split(' ')[0].toLowerCase();
  const emailAddress = email || `${firstName}@alemara.co.uk`;
  
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
        <div className="text-sm font-medium text-[#ea384c] mt-1 mb-2">{role}</div>
        
        <a 
          href={`mailto:${emailAddress}`}
          className="text-sm text-[#1A1F2C] hover:text-[#ea384c] transition-colors flex items-center gap-1 mb-3"
        >
          <Mail className="h-3.5 w-3.5" />
          {emailAddress}
        </a>
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <button className="w-full py-2 px-4 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-[#1A1F2C] transition-colors">
            View Bio
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="space-y-2">
            <h4 className="font-medium text-[#1A1F2C]">{name}</h4>
            <p className="text-sm text-gray-600">{bio}</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TeamMember;
