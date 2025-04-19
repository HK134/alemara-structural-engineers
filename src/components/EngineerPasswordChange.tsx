
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';

const EngineerPasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { updatePassword } = useAuth();

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await updatePassword(newPassword);
      
      if (result.success) {
        toast.success("Password updated successfully");
        // Reset form
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Remove current password field since Supabase doesn't require it for password update */}
      <div>
        <label className="block mb-2">New Password</label>
        <Input 
          type="password" 
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
        />
      </div>
      <div>
        <label className="block mb-2">Confirm New Password</label>
        <Input 
          type="password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
        />
      </div>
      <Button 
        onClick={handlePasswordChange} 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Updating...' : 'Change Password'}
      </Button>
    </div>
  );
};

export default EngineerPasswordChange;
