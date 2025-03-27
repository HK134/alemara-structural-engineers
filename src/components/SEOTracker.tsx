
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  SearchIcon, 
  RefreshCw,
  BarChart2,
  Globe,
  TrendingUp
} from 'lucide-react';

// Sample data for demonstration
const sampleKeywords = [
  { id: 1, keyword: "structural engineer london", position: 12, change: 2, volume: 1200 },
  { id: 2, keyword: "structural survey cost", position: 8, change: -3, volume: 880 },
  { id: 3, keyword: "building regulations structural engineer", position: 15, change: 0, volume: 720 },
  { id: 4, keyword: "load bearing wall removal", position: 5, change: 4, volume: 1500 },
  { id: 5, keyword: "structural calculations for extension", position: 10, change: -1, volume: 650 },
];

const sampleTrafficData = [
  { name: 'Jan', organic: 400, direct: 240, referral: 180 },
  { name: 'Feb', organic: 420, direct: 250, referral: 190 },
  { name: 'Mar', organic: 450, direct: 260, referral: 200 },
  { name: 'Apr', organic: 470, direct: 270, referral: 220 },
  { name: 'May', organic: 540, direct: 280, referral: 240 },
  { name: 'Jun', organic: 580, direct: 290, referral: 250 },
];

const SEOTracker = () => {
  const [domain, setDomain] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState('overview');
  const [keywords, setKeywords] = useState(sampleKeywords);
  const [newKeyword, setNewKeyword] = useState('');

  // Simulate fetching data
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Add new keyword
  const handleAddKeyword = () => {
    if (newKeyword.trim()) {
      const newKeywordObj = {
        id: keywords.length + 1,
        keyword: newKeyword,
        position: Math.floor(Math.random() * 30) + 1,
        change: Math.floor(Math.random() * 10) - 5,
        volume: Math.floor(Math.random() * 1000) + 200
      };
      setKeywords([...keywords, newKeywordObj]);
      setNewKeyword('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">SEO Tracker</h2>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={handleRefresh}
          disabled={isLoading}
        >
          <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
          Refresh Data
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Domain Analysis</CardTitle>
          <CardDescription>Track SEO metrics for your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter your domain (e.g., yourwebsite.com)"
                className="w-full"
              />
            </div>
            <Button className="flex items-center gap-2">
              <SearchIcon size={16} />
              Analyze
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="w-full border-b">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart2 size={16} />
            Overview
          </TabsTrigger>
          <TabsTrigger value="keywords" className="flex items-center gap-2">
            <TrendingUp size={16} />
            Keywords
          </TabsTrigger>
          <TabsTrigger value="competitors" className="flex items-center gap-2">
            <Globe size={16} />
            Competitors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Domain Authority</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">42/100</div>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowUpIcon size={14} className="mr-1" /> +3 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Organic Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">128</div>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowUpIcon size={14} className="mr-1" /> +15 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Backlinks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">843</div>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowUpIcon size={14} className="mr-1" /> +67 from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Organic Traffic Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={sampleTrafficData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="organic" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="direct" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="referral" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6 mt-6">
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Input 
                value={newKeyword} 
                onChange={(e) => setNewKeyword(e.target.value)}
                placeholder="Add new keyword to track" 
              />
            </div>
            <Button onClick={handleAddKeyword}>Add Keyword</Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Tracked Keywords</CardTitle>
              <CardDescription>Performance of your targeted keywords</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Keyword</th>
                      <th scope="col" className="px-6 py-3">Position</th>
                      <th scope="col" className="px-6 py-3">Change</th>
                      <th scope="col" className="px-6 py-3">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywords.map((keyword) => (
                      <tr key={keyword.id} className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">{keyword.keyword}</td>
                        <td className="px-6 py-4">{keyword.position}</td>
                        <td className="px-6 py-4">
                          {keyword.change > 0 ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              <ArrowUpIcon size={14} className="mr-1" />
                              {keyword.change}
                            </Badge>
                          ) : keyword.change < 0 ? (
                            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                              <ArrowDownIcon size={14} className="mr-1" />
                              {Math.abs(keyword.change)}
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                              0
                            </Badge>
                          )}
                        </td>
                        <td className="px-6 py-4">{keyword.volume.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Analysis</CardTitle>
              <CardDescription>Track your main competitors' SEO performance</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">
                Connect your SEO tracking account to view competitor data
              </p>
              <Button className="mt-4">Connect Account</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOTracker;
