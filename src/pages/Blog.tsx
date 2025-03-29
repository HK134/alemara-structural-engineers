
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Blog post data
const blogPosts = [
  {
    title: "5 Things to Consider Before Starting a Loft Conversion",
    excerpt: "Planning a loft conversion? Our structural engineers share the key considerations to ensure success.",
    date: "June 15, 2023",
    slug: "/blog/loft-conversion-considerations",
    image: "/lovable-uploads/bb746e6a-6105-42d2-81e9-1c0805d61938.png",
    category: "Residential"
  },
  {
    title: "Understanding Building Regulations for House Extensions",
    excerpt: "Navigate the complexities of building regulations with our expert guide for homeowners.",
    date: "May 22, 2023",
    slug: "/blog/building-regulations-for-extensions",
    image: "/lovable-uploads/551ecc30-f655-4a5d-8c6a-775bbc45da9e.png",
    category: "Regulations"
  },
  {
    title: "Structural Issues in Period Properties: What to Look For",
    excerpt: "Own a period property? Learn to identify common structural issues before they become major problems.",
    date: "April 10, 2023",
    slug: "/blog/period-property-structural-issues",
    image: "/lovable-uploads/30f1d92e-b72a-4c9c-9edd-e07196399814.png",
    category: "Structural Surveys"
  },
  {
    title: "The Benefits of Steel Frame Construction",
    excerpt: "Discover why steel frame construction is becoming increasingly popular for both residential and commercial buildings.",
    date: "March 5, 2023",
    slug: "/blog/benefits-steel-frame-construction",
    image: "/lovable-uploads/a071a48d-064e-41aa-b5d3-44b29e78d0b8.png",
    category: "Materials"
  },
  {
    title: "Structural Calculations: What Homeowners Need to Know",
    excerpt: "Understanding structural calculations and why they're crucial for your home improvement project.",
    date: "February 18, 2023",
    slug: "/blog/structural-calculations-explained",
    image: "/lovable-uploads/8f1a8336-2983-4ee5-8e70-4663c95ced97.png",
    category: "Education"
  },
  {
    title: "Choosing the Right Structural Engineer for Your Project",
    excerpt: "Essential tips for selecting a qualified structural engineer who will ensure your project's success.",
    date: "January 10, 2023",
    slug: "/blog/choosing-structural-engineer",
    image: "/lovable-uploads/b73082d3-f4cd-498f-93a3-137ac572ed47.png",
    category: "Advice"
  }
];

// Available blog categories
const categories = [
  "All",
  "Residential",
  "Commercial",
  "Structural Surveys",
  "Materials",
  "Regulations",
  "Education",
  "Advice"
];

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Structural Engineering Insights</h1>
            <p className="text-xl max-w-3xl">
              Expert advice, industry knowledge, and technical guidance from our team of experienced structural engineers.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-full rounded-md border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      selectedCategory === category 
                        ? 'bg-[#ea384c] text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-xs font-semibold px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl font-semibold text-[#1A1F2C] mt-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="link" 
                        className="text-[#ea384c] p-0 hover:text-[#ea384c]/80"
                        onClick={() => navigate(post.slug)}
                      >
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-xl">No articles found matching your search criteria.</p>
                <Button 
                  variant="outline"
                  className="mt-4 border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C]">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mt-2">
                  Get the latest structural engineering insights directly to your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent"
                />
                <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
