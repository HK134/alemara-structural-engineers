
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { BarChart, LineChart, PieChart } from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data - in a real app, this would come from the actual analytics API
const sampleData = [
  { name: "Jan", visitors: 1200, pageviews: 3400, bounceRate: 42 },
  { name: "Feb", visitors: 1900, pageviews: 4200, bounceRate: 39 },
  { name: "Mar", visitors: 2400, pageviews: 6100, bounceRate: 38 },
  { name: "Apr", visitors: 1600, pageviews: 4800, bounceRate: 43 },
  { name: "May", visitors: 3200, pageviews: 7600, bounceRate: 35 },
  { name: "Jun", visitors: 4100, pageviews: 9800, bounceRate: 32 },
  { name: "Jul", visitors: 3800, pageviews: 8900, bounceRate: 34 },
];

const sourceData = [
  { name: "Organic Search", value: 4300, fill: "#8884d8" },
  { name: "Direct", value: 2900, fill: "#82ca9d" },
  { name: "Referral", value: 1200, fill: "#ffc658" },
  { name: "Social", value: 900, fill: "#ff8042" },
  { name: "Email", value: 600, fill: "#0088fe" },
];

const topPagesData = [
  { page: "/", visitors: 3200, conversion: 4.7 },
  { page: "/rear-extensions", visitors: 1900, conversion: 3.2 },
  { page: "/loft-conversions", visitors: 1700, conversion: 3.8 },
  { page: "/new-builds", visitors: 1500, conversion: 2.9 },
  { page: "/renovations", visitors: 1200, conversion: 2.4 },
  { page: "/contact", visitors: 900, conversion: 7.6 },
];

const WebsiteAnalytics = () => {
  const [analyticsId, setAnalyticsId] = useState(localStorage.getItem("google_analytics_id") || "");
  const [isTracking, setIsTracking] = useState(!!localStorage.getItem("google_analytics_id"));

  const handleSaveAnalyticsId = () => {
    if (analyticsId) {
      localStorage.setItem("google_analytics_id", analyticsId);
      setIsTracking(true);
      window.location.reload();  // Reload to activate Google Analytics
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Website Analytics Dashboard</h1>
        
        {!isTracking ? (
          <Card>
            <CardHeader>
              <CardTitle>Set Up Google Analytics</CardTitle>
              <CardDescription>
                Enter your Google Analytics Measurement ID to start tracking website traffic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="analytics-id">Google Analytics Measurement ID</Label>
                  <Input 
                    id="analytics-id" 
                    placeholder="G-XXXXXXXXXX" 
                    value={analyticsId}
                    onChange={(e) => setAnalyticsId(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    You can find your Measurement ID in your Google Analytics account under Admin → Data Streams
                  </p>
                </div>
                <Button onClick={handleSaveAnalyticsId} className="w-full sm:w-auto">
                  Save and Activate Tracking
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <Alert className="mb-6">
              <AlertDescription>
                Google Analytics is active with Measurement ID: {analyticsId}
                <Button 
                  variant="link" 
                  className="ml-2 p-0 h-auto"
                  onClick={() => {
                    localStorage.removeItem("google_analytics_id");
                    setIsTracking(false);
                    setAnalyticsId("");
                  }}
                >
                  Change
                </Button>
              </AlertDescription>
            </Alert>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="visitors" className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  Visitors
                </TabsTrigger>
                <TabsTrigger value="sources" className="flex items-center gap-2">
                  <PieChart className="h-4 w-4" />
                  Traffic Sources
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Total Visitors</CardTitle>
                      <CardDescription>Last 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">18,200</div>
                      <p className="text-xs text-green-500 flex items-center mt-1">
                        +12.3% from previous period
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Avg. Session Duration</CardTitle>
                      <CardDescription>Time on site</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">2:45</div>
                      <p className="text-xs text-green-500 flex items-center mt-1">
                        +0:18 from previous period
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Bounce Rate</CardTitle>
                      <CardDescription>Single page sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">38.7%</div>
                      <p className="text-xs text-green-500 flex items-center mt-1">
                        -2.1% from previous period
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Website Traffic</CardTitle>
                    <CardDescription>Visitors and pageviews over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={sampleData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPageviews" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <CartesianGrid strokeDasharray="3 3" />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="visitors"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorVisitors)"
                          />
                          <Area
                            type="monotone"
                            dataKey="pageviews"
                            stroke="#82ca9d"
                            fillOpacity={1}
                            fill="url(#colorPageviews)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="visitors" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Pages</CardTitle>
                      <CardDescription>Most visited pages on your website</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topPagesData.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-medium">{item.page}</div>
                              <div className="text-sm text-muted-foreground">{item.visitors.toLocaleString()} visitors</div>
                            </div>
                            <div className="text-sm font-medium">{item.conversion}% conversion</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Visitor Behavior</CardTitle>
                      <CardDescription>Bounce rate over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsLineChart
                            data={sampleData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                              type="monotone"
                              dataKey="bounceRate"
                              stroke="#8884d8"
                              activeDot={{ r: 8 }}
                            />
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="sources" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Traffic Sources</CardTitle>
                      <CardDescription>Where your visitors are coming from</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart
                            data={sourceData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8884d8" />
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Acquisition Channels</CardTitle>
                      <CardDescription>Monthly channel performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sourceData.map((source, index) => (
                          <div key={index} className="flex items-center">
                            <div
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: source.fill }}
                            />
                            <div className="flex-1">
                              <div className="font-medium">{source.name}</div>
                            </div>
                            <div>{source.value.toLocaleString()} visitors</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default WebsiteAnalytics;
