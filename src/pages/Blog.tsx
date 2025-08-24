
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Calendar, ArrowRight, Tag, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { 
  fetchBlogPosts, 
  fetchBlogCategories, 
  formatBlogDate,
  type BlogPost,
  type BlogResponse 
} from '@/utils/blogService';
import { useToast } from "@/components/ui/use-toast";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState<BlogResponse | null>(null);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const POSTS_PER_PAGE = 9;

  // Load categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchBlogCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    loadCategories();
  }, []);

  // Load blog posts when filters or pagination change
  useEffect(() => {
    const loadBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await fetchBlogPosts(
          {
            category: selectedCategory,
            search: searchTerm || undefined
          },
          {
            page: currentPage,
            limit: POSTS_PER_PAGE
          }
        );
        setBlogData(response);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        toast({
          title: "Error loading blog posts",
          description: "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, [searchTerm, selectedCategory, currentPage, toast]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog | Structural Engineering Insights</title>
        <meta name="description" content="Expert articles from Alemara Structural Engineers on structural surveys, extensions, loft conversions, regulations, and property issues in London." />
        <link rel="canonical" href="https://alemara.co.uk/blog" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
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
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category filter */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-[#ea384c] hover:bg-[#ea384c]/90" 
                    : "border-gray-300 text-gray-700"}
                  onClick={() => handleCategoryChange(category)}
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
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <div className="h-48 bg-gray-200 animate-pulse" />
                    <CardHeader>
                      <div className="h-4 bg-gray-200 animate-pulse rounded mb-2" />
                      <div className="h-6 bg-gray-200 animate-pulse rounded" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 animate-pulse rounded" />
                        <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : blogData && blogData.data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogData.data.map((post) => (
                    <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image_url || '/placeholder.svg'} 
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
                      <CardContent className="flex-grow">
                        <p className="text-gray-600">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 mt-auto">
                        <div className="w-full flex flex-col gap-3">
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formatBlogDate(post.date_published)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{post.read_time} min read</span>
                            </div>
                          </div>
                          <Link to={`/blog/${post.slug}`} className="w-full">
                            <Button variant="outline" className="w-full text-[#ea384c] border-[#ea384c] hover:bg-[#ea384c] hover:text-white">
                              Read Full Article <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {/* Pagination */}
                {blogData.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: blogData.totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => handlePageChange(page)}
                          className={currentPage === page ? "bg-[#ea384c] hover:bg-[#ea384c]/90" : ""}
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === blogData.totalPages}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No articles found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or category filters</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={clearFilters}
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
      <StickyBookingButton />
    </div>
  );
};

export default Blog;
