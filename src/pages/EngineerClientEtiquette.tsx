
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, User, Navigation, MessageSquare, Phone } from 'lucide-react';

const EngineerClientEtiquette = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Client Etiquette & Training</h1>
      
      <Tabs defaultValue="etiquette" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="etiquette">Client Etiquette</TabsTrigger>
          <TabsTrigger value="training">Professional Development</TabsTrigger>
        </TabsList>
        
        <TabsContent value="etiquette" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-500" />
                Client Interaction Guidelines
              </CardTitle>
              <CardDescription>
                Best practices for professional client relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-medium text-blue-800 mb-2">The Alemara Promise</h3>
                  <p className="text-blue-700">
                    At Alemara Engineering, we promise to deliver exceptional service, technical excellence, 
                    and clear communication to every client. This isn't just what we do—it's who we are.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">First Impressions</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Arrive 5-10 minutes early for all appointments</li>
                    <li>Dress professionally and appropriately for the site conditions</li>
                    <li>Introduce yourself clearly and explain your role</li>
                    <li>Have business cards and company materials ready</li>
                    <li>Be prepared with all necessary equipment and documentation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Communication</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use clear, non-technical language when explaining concepts to clients</li>
                    <li>Listen actively to client concerns and questions</li>
                    <li>Respond to emails and calls within 24 business hours</li>
                    <li>Document key discussions and decisions in writing</li>
                    <li>Avoid making promises that cannot be guaranteed</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Handling Difficult Situations</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remain calm and professional when faced with challenges</li>
                    <li>Focus on solutions rather than problems</li>
                    <li>Escalate issues to management when appropriate</li>
                    <li>Acknowledge mistakes directly and outline correction plans</li>
                    <li>Always thank clients for their feedback, even if critical</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Navigation className="h-5 w-5 mr-2 text-blue-500" />
                Site Visit Protocol
              </CardTitle>
              <CardDescription>
                Professional conduct during client site visits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Before the Visit</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Confirm appointment details 24 hours in advance</li>
                    <li>Research property history and relevant details</li>
                    <li>Prepare all necessary equipment and documentation</li>
                    <li>Plan your route to arrive on time</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">During the Visit</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Respect the client's property and privacy</li>
                    <li>Explain the inspection/assessment process clearly</li>
                    <li>Document findings thoroughly with photos and notes</li>
                    <li>Answer questions honestly, saying "I'll find out" when needed</li>
                    <li>Leave the site as you found it</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">After the Visit</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Send a follow-up email summarizing key findings and next steps</li>
                    <li>Process documentation promptly</li>
                    <li>Update project status in the company system</li>
                    <li>Schedule any necessary follow-up visits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="training" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="h-5 w-5 mr-2 text-purple-500" />
                Professional Development Resources
              </CardTitle>
              <CardDescription>
                Educational materials to enhance your skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Psychology of Client Relations</h3>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium mb-2">Building Client Trust</h4>
                      <p className="text-sm text-gray-500 mb-3">Understanding the psychology of trust in professional relationships</p>
                      <a href="#" className="text-sm text-purple-600 hover:underline">View Course</a>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium mb-2">Conflict Resolution</h4>
                      <p className="text-sm text-gray-500 mb-3">Strategies for managing difficult conversations and disagreements</p>
                      <a href="#" className="text-sm text-purple-600 hover:underline">View Course</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Technical Communication</h3>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium mb-2">Explaining Technical Concepts</h4>
                      <p className="text-sm text-gray-500 mb-3">How to break down complex engineering topics for clients</p>
                      <a href="#" className="text-sm text-purple-600 hover:underline">View Workshop</a>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium mb-2">Report Writing</h4>
                      <p className="text-sm text-gray-500 mb-3">Creating clear, professional engineering reports</p>
                      <a href="#" className="text-sm text-purple-600 hover:underline">View Templates</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Professional Growth</h3>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium mb-2">Leadership in Engineering</h4>
                      <p className="text-sm text-gray-500 mb-3">Developing leadership skills for project management</p>
                      <a href="#" className="text-sm text-purple-600 hover:underline">View Series</a>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium mb-2">Business Development</h4>
                      <p className="text-sm text-gray-500 mb-3">Understanding the business side of engineering practice</p>
                      <a href="#" className="text-sm text-purple-600 hover:underline">View Course</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-purple-500" />
                Communication Skills
              </CardTitle>
              <CardDescription>
                Resources to improve client communication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h3 className="font-medium text-purple-800 mb-2">Why Communication Matters</h3>
                  <p className="text-purple-700">
                    Effective communication is as important as technical expertise. It builds trust, 
                    prevents misunderstandings, and helps clients feel confident in our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Recommended Reading</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="#" className="text-purple-600 hover:underline">Crucial Conversations: Tools for Talking When Stakes Are High</a></li>
                    <li><a href="#" className="text-purple-600 hover:underline">Technical Communication for Engineers</a></li>
                    <li><a href="#" className="text-purple-600 hover:underline">The Trusted Advisor</a></li>
                    <li><a href="#" className="text-purple-600 hover:underline">Engineering Your Communication Success</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Online Courses</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="#" className="text-purple-600 hover:underline">Active Listening for Engineers (2 hours)</a></li>
                    <li><a href="#" className="text-purple-600 hover:underline">Client Presentation Skills (4 hours)</a></li>
                    <li><a href="#" className="text-purple-600 hover:underline">Email Communication Best Practices (1 hour)</a></li>
                    <li><a href="#" className="text-purple-600 hover:underline">Handling Difficult Conversations (3 hours)</a></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EngineerClientEtiquette;
