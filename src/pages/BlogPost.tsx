import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, User } from "lucide-react";
import { fetchBlogPostBySlug, fetchFeaturedBlogPosts, formatBlogDate, getBlogImageUrl, type BlogPost } from '@/utils/blogService';
import { useToast } from "@/components/ui/use-toast";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!slug) return;

    const loadPost = async () => {
      setLoading(true);
      try {
        const blogPost = await fetchBlogPostBySlug(slug);
        if (blogPost) {
          setPost(blogPost);
          // Load related posts (featured posts as fallback)
          const related = await fetchFeaturedBlogPosts(3);
          // Filter out current post from related posts
          setRelatedPosts(related.filter(p => p.id !== blogPost.id).slice(0, 2));
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        toast({
          title: "Error loading blog post",
          description: "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, toast]);

  if (notFound) {
    return <Navigate to="/404" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4 w-3/4" />
                <div className="h-4 bg-gray-200 rounded mb-8 w-1/2" />
                <div className="h-64 bg-gray-200 rounded mb-8" />
                <div className="space-y-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const pageTitle = `${post.title} | Alemara Structural Engineers Blog`;
  const pageDescription = post.meta_description || post.excerpt || post.title;
  const canonicalUrl = `https://alemara.co.uk/blog/${post.slug}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={getBlogImageUrl(post.image_path) || ''} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": getBlogImageUrl(post.image_path) || "",
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Alemara Structural Engineers"
            },
            "datePublished": post.date_published,
            "dateModified": post.updated_at,
            "description": pageDescription
          })}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#ea384c]">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-[#ea384c]">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-[#ea384c]" />
                  <span className="text-[#ea384c] text-sm font-medium">{post.category}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1F2C] mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatBlogDate(post.date_published)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.read_time} min read</span>
                  </div>
                </div>

                {post.excerpt && (
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                )}
              </header>

              {/* Featured Image */}
              {post.image_path && (
                <div className="mb-8">
                  <img 
                    src={getBlogImageUrl(post.image_path)!} 
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-[#1A1F2C] prose-a:text-[#ea384c] prose-a:no-underline hover:prose-a:underline">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-[#1A1F2C] mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold text-[#1A1F2C] mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- ')) {
                    return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <p key={index} className="font-semibold mb-4">{paragraph.replace(/\*\*/g, '')}</p>;
                  } else if (paragraph.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                  }
                })}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/blog">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#1A1F2C] mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={getBlogImageUrl(relatedPost.image_path) || '/placeholder.svg'} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="h-4 w-4 text-[#ea384c]" />
                          <span className="text-[#ea384c] text-sm">{relatedPost.category}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{relatedPost.title}</h3>
                        <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                        <Link to={`/blog/${relatedPost.slug}`}>
                          <Button variant="link" className="text-[#ea384c] p-0">
                            Read More <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#1A1F2C] rounded-lg p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Need Structural Engineering Services?</h2>
              <p className="text-gray-300 mb-6">
                Our team of chartered structural engineers is ready to help with your project. 
                From initial consultation to detailed design, we provide comprehensive structural engineering services across London.
              </p>
              <Link to="/contact">
                <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default BlogPostPage;
