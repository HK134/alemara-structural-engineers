import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// This is a placeholder - we'll replace it with real data later
const blogPosts = [
  {
    id: 1,
    title: "5 Things to Consider Before Starting a Loft Conversion",
    excerpt: "Planning a loft conversion? Our structural engineers share the key considerations to ensure success.",
    content: `<p>Converting your loft into a living space can add significant value to your home, but there are several important structural considerations to address before you begin. This guide explores the essential factors to evaluate before starting your loft conversion project.</p>
    
    <h2>1. Structural Assessment</h2>
    <p>Before any work begins, a thorough structural assessment is essential. This includes evaluating:</p>
    <ul>
      <li>Existing roof structure and whether it needs reinforcement</li>
      <li>Load-bearing capabilities of the floor beneath</li>
      <li>Wall strength and stability</li>
      <li>Foundation adequacy for the additional weight</li>
    </ul>
    
    <h2>2. Headroom Requirements</h2>
    <p>For a loft to be habitable, you need adequate headroom. Building regulations typically require a minimum height of 2.2m over at least half the floor area. If your existing loft doesn't meet these requirements, you may need to consider:</p>
    <ul>
      <li>Raising the roof (which requires planning permission)</li>
      <li>Lowering the ceiling of the floor below (more complex and disruptive)</li>
    </ul>
    
    <h2>3. Access Considerations</h2>
    <p>How will people access the new space? You'll need a permanent staircase that complies with building regulations. Consider:</p>
    <ul>
      <li>Space required for a staircase (approximately 1.8m x 0.8m footprint)</li>
      <li>Impact on the room below</li>
      <li>Building regulations regarding rise, going, and headroom</li>
    </ul>
    
    <h2>4. Building Regulations and Planning Permission</h2>
    <p>Most loft conversions are covered under permitted development rights, but you'll still need:</p>
    <ul>
      <li>Building regulations approval for structural changes, fire safety, thermal efficiency, etc.</li>
      <li>Planning permission if you're extending beyond the existing roof space</li>
      <li>Party wall agreements if you share walls with neighbors</li>
    </ul>
    
    <h2>5. Budgetary Considerations</h2>
    <p>Finally, be realistic about costs. A typical loft conversion can cost between £30,000 and £50,000 depending on the complexity. Allow for:</p>
    <ul>
      <li>Structural engineering fees</li>
      <li>Building control fees</li>
      <li>Construction costs</li>
      <li>A contingency of at least 10% for unexpected issues</li>
    </ul>
    
    <p>By considering these five crucial factors before beginning your loft conversion project, you can ensure a smoother process with fewer surprises along the way. Our structural engineers can help assess your property and provide detailed recommendations tailored to your specific circumstances.</p>`,
    date: "June 15, 2023",
    slug: "loft-conversion-considerations",
    category: "Residential",
    image: "/lovable-uploads/bb746e6a-6105-42d2-81e9-1c0805d61938.png",
    author: "Sarah Johnson, MEng CEng",
    relatedPosts: [2, 3]
  },
  {
    id: 2,
    title: "Understanding Building Regulations for House Extensions",
    excerpt: "Navigate the complexities of building regulations with our expert guide for homeowners.",
    content: "Full article content goes here...",
    date: "May 22, 2023",
    slug: "building-regulations-for-extensions",
    category: "Regulations",
    image: "/lovable-uploads/551ecc30-f655-4a5d-8c6a-775bbc45da9e.png",
    author: "Michael Patel, BSc CEng MIStructE",
    relatedPosts: [1, 5]
  },
  // ... other posts would be defined here
];

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the current post based on slug
  const currentPost = blogPosts.find(post => post.slug === slug);
  
  // Get related posts
  const relatedPosts = currentPost?.relatedPosts
    ? blogPosts.filter(post => currentPost.relatedPosts?.includes(post.id))
    : [];
  
  if (!currentPost) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
              <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
              <Link to="/blog">
                <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90">
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero section with blog image */}
        <div className="w-full h-64 md:h-96 relative">
          <img 
            src={currentPost.image} 
            alt={currentPost.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Blog content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Back to blog link */}
            <Link to="/blog" className="inline-flex items-center text-[#ea384c] mb-6 hover:text-[#ea384c]/80">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
            </Link>
            
            {/* Blog meta info */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-4 w-4 text-[#ea384c]" />
                <span className="text-[#ea384c] text-sm">{currentPost.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentPost.title}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-500 text-sm">{currentPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-500 text-sm">{currentPost.date}</span>
                </div>
              </div>
            </div>
            
            {/* Blog content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />
            
            {/* Author bio */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">About the Author</h3>
              <p className="text-gray-600">
                {currentPost.author} is a chartered structural engineer with extensive experience in residential and commercial projects across London.
              </p>
            </div>
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow duration-300">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">{post.date}</div>
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="link" className="text-[#ea384c]">
                            Read more <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
