
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog post data - this will be replaced with actual data later
const blogPosts = [
  {
    id: 1,
    title: "5 Things to Consider Before Starting a Loft Conversion",
    excerpt: "Planning a loft conversion? Our structural engineers share the key considerations to ensure success.",
    content: "Full article content goes here...",
    date: "June 15, 2023",
    slug: "/blog/loft-conversion-considerations",
    category: "Residential",
    image: "/lovable-uploads/bb746e6a-6105-42d2-81e9-1c0805d61938.png",
    author: "Sarah Johnson, MEng CEng"
  },
  {
    id: 2,
    title: "Understanding Building Regulations for House Extensions",
    excerpt: "Navigate the complexities of building regulations with our expert guide for homeowners.",
    content: "Full article content goes here...",
    date: "May 22, 2023",
    slug: "/blog/building-regulations-for-extensions",
    category: "Regulations",
    image: "/lovable-uploads/551ecc30-f655-4a5d-8c6a-775bbc45da9e.png",
    author: "Michael Patel, BSc CEng MIStructE"
  },
  {
    id: 3,
    title: "Structural Issues in Period Properties: What to Look For",
    excerpt: "Own a period property? Learn to identify common structural issues before they become major problems.",
    content: "Full article content goes here...",
    date: "April 10, 2023",
    slug: "/blog/period-property-structural-issues",
    category: "Historic Buildings",
    image: "/lovable-uploads/30f1d92e-b72a-4c9c-9edd-e07196399814.png",
    author: "Emma Roberts, PhD CEng MICE"
  },
  {
    id: 4,
    title: "Commercial Property Surveys: A Complete Guide",
    excerpt: "Essential information for business owners and property investors about structural surveys for commercial buildings.",
    content: "Full article content goes here...",
    date: "March 5, 2023",
    slug: "/blog/commercial-property-surveys-guide",
    category: "Commercial",
    image: "/lovable-uploads/8f1a8336-2983-4ee5-8e70-4663c95ced97.png",
    author: "David Wilson, MSc CEng MIStructE"
  },
  {
    id: 5,
    title: "Subsidence in London Properties: Causes and Solutions",
    excerpt: "London's clay soil makes subsidence a common issue. Learn about the causes, signs, and effective remediation approaches.",
    content: "Full article content goes here...",
    date: "February 18, 2023",
    slug: "/blog/london-property-subsidence",
    category: "London Properties",
    image: "/lovable-uploads/b73082d3-f4cd-498f-93a3-137ac572ed47.png",
    author: "Thomas Chen, MEng CEng MICE"
  },
  {
    id: 6,
    title: "How to Choose a Structural Engineer for Your Project",
    excerpt: "Not all structural engineers are equal. Learn what qualifications and experience to look for when hiring an engineer.",
    content: "Full article content goes here...",
    date: "January 7, 2023",
    slug: "/blog/choosing-structural-engineer",
    category: "Advice",
    image: "/lovable-uploads/be2ffdaf-904e-4449-b8bf-ba820e52e28f.png",
    author: "Olivia Martinez, CEng MIStructE"
  }
];

// Get unique categories
const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero section */}
        <section className="bg-[#1A1F2C] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Structural Engineering Insights
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert advice, technical guides, and industry knowledge from our team of chartered structural engineers
              </p>
              <div className="relative max-w-lg mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category filter */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-[#ea384c] hover:bg-[#ea384c]/90" 
                    : "border-gray-300 text-gray-700"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog posts grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="h-4 w-4 text-[#ea384c]" />
                          <CardDescription className="text-[#ea384c]">{post.category}</CardDescription>
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 mt-auto flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <Link to={post.slug}>
                          <Button variant="link" className="text-[#ea384c]">
                            Read more <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No articles found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or category filters</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter signup - Optional */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C] mb-4">
                Stay Updated on Structural Engineering
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to receive our latest articles, engineering tips, and industry insights directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow"
                />
                <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
