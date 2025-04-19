import React, { useState } from 'react';
import { format, startOfWeek, addDays, isAfter, isBefore } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { CalendarClock, Clock, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Mock data for availability slots
// In a real app, this would come from the database
const initialAvailability = [
  { date: '2024-08-05', slots: ['09:00', '10:00', '14:00', '15:00'] },
  { date: '2024-08-06', slots: ['11:00', '13:00', '16:00'] },
  { date: '2024-08-09', slots: ['09:00', '10:00', '11:00', '12:00'] },
];

type AvailabilitySlot = {
  date: string;
  slots: string[];
};

// Expanded working hours from 7am to 8pm
const workingHours = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

const EngineerAvailability = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [availability, setAvailability] = useState<AvailabilitySlot[]>(initialAvailability);
  const [activeTab, setActiveTab] = useState('availability');

  // Function to toggle availability for a specific time slot
  const toggleTimeSlot = (time: string) => {
    if (!selectedDate) return;
    
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    const existingDay = availability.find(day => day.date === dateStr);
    
    if (existingDay) {
      // Toggle the time slot for the existing day
      const updatedSlots = existingDay.slots.includes(time)
        ? existingDay.slots.filter(slot => slot !== time)
        : [...existingDay.slots, time].sort();
      
      setAvailability(availability.map(day => 
        day.date === dateStr ? { ...day, slots: updatedSlots } : day
      ));
    } else {
      // Add a new day with this time slot
      setAvailability([...availability, { date: dateStr, slots: [time] }]);
    }
  };

  // Get available slots for the selected date
  const getAvailableSlotsForSelectedDate = () => {
    if (!selectedDate) return [];
    
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    const dayAvailability = availability.find(day => day.date === dateStr);
    
    return dayAvailability?.slots || [];
  };

  // Save availability to the database
  const saveAvailability = async () => {
    try {
      // In a real app, this would send data to the database
      // For now, we'll just simulate success
      console.log("Saving availability:", availability);
      
      // Here's where the Supabase code would go to save to the database
      /*
      const { data, error } = await supabase
        .from('engineer_availability')
        .upsert(availability.map(day => ({
          engineer_id: '...', // would come from auth context
          date: day.date,
          available_slots: day.slots
        })));
        
      if (error) throw error;
      */
      
      toast("Your availability has been updated successfully.");
    } catch (error) {
      console.error("Error saving availability:", error);
      toast("There was a problem saving your availability.", {
        variant: "destructive"
      });
    }
  };

  // Function to check if a date has any available slots
  const hasAvailableSlots = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const dayAvailability = availability.find(day => day.date === dateStr);
    return dayAvailability && dayAvailability.slots.length > 0;
  };

  // Generate the weekly view - now includes weekends
  const generateWeekView = () => {
    if (!selectedDate) return null;
    
    const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 }); // Start from Monday
    const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)); // Monday to Sunday
    
    return (
      <div className="grid grid-cols-7 gap-4 mt-4">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="border rounded-md">
            <div className="bg-gray-100 p-2 font-medium text-center border-b">
              {format(day, 'EEEE')}<br />
              {format(day, 'MMM d')}
            </div>
            <div className="p-2 space-y-1 max-h-96 overflow-y-auto">
              {workingHours.map((time, timeIndex) => {
                const dateStr = format(day, 'yyyy-MM-dd');
                const dayAvailability = availability.find(d => d.date === dateStr);
                const isAvailable = dayAvailability?.slots.includes(time);
                
                return (
                  <div 
                    key={timeIndex} 
                    className={`text-xs p-1 rounded text-center cursor-default 
                      ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-gray-50 text-gray-400'}`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <CalendarClock className="h-6 w-6 mr-2 text-primary" />
        <h1 className="text-2xl font-bold">Manage Your Availability</h1>
      </div>
      
      <Tabs defaultValue="availability" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="availability">Set Availability</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Overview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="availability" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>
                  Choose a date to set your available time slots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md pointer-events-auto"
                  modifiers={{
                    hasSlots: hasAvailableSlots
                  }}
                  modifiersStyles={{
                    hasSlots: { backgroundColor: '#d1fae5', color: '#065f46' }
                  }}
                />
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Available Time Slots
                </CardTitle>
                <CardDescription>
                  {selectedDate ? (
                    `Setting availability for ${format(selectedDate, 'EEEE, MMMM d, yyyy')}`
                  ) : (
                    'Select a date on the calendar'
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDate ? (
                  <>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4 max-h-80 overflow-y-auto">
                      {workingHours.map((time, index) => {
                        const isSelected = getAvailableSlotsForSelectedDate().includes(time);
                        
                        return (
                          <Button
                            key={index}
                            variant={isSelected ? "default" : "outline"}
                            className={`${isSelected ? 'bg-green-600 hover:bg-green-700' : ''}`}
                            onClick={() => toggleTimeSlot(time)}
                          >
                            {time}
                          </Button>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div>
                        <p className="text-sm text-gray-500">
                          {getAvailableSlotsForSelectedDate().length} time slots selected
                        </p>
                      </div>
                      <Button onClick={saveAvailability} className="flex items-center">
                        <Save className="mr-2 h-4 w-4" />
                        Save Availability
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Please select a date to set your availability
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="weekly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Availability</CardTitle>
              <CardDescription>
                Overview of your available time slots for the week (including weekends)
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generateWeekView()}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EngineerAvailability;
