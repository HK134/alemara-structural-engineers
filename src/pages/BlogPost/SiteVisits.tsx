
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Search,
  Clock,
  CalendarCheck,
  MapPin,
  Building,
  Ruler,
  HardHat,
  Microscope,
  Construction,
  FileSpreadsheet,
  Users,
  CheckSquare,
  Camera,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BookingDialog from '@/components/BookingDialog';
import StickyBookingButton from '@/components/StickyBookingButton';

const SiteVisitsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Structural Engineering Site Visits in London | Alemara Engineering</title>
        <meta name="description" content="Learn why professional structural engineering site visits are crucial before construction, what our engineers look for, and how our detailed inspections benefit your London property project." />
        <link rel="canonical" href="https://londonstructuralsurveys.com/blog/structural-engineering-site-visits" />
        <meta property="og:title" content="Structural Engineering Site Visits in London | Alemara Engineering" />
        <meta property="og:description" content="Expert guide to structural engineering site visits for London properties - what to expect, why they're important, and how they can save you time and money." />
        <meta property="og:image" content="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" />
        <meta property="og:url" content="https://londonstructuralsurveys.com/blog/structural-engineering-site-visits" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Structural Engineering Site Visits in London | Alemara Engineering" />
        <meta name="twitter:description" content="Expert guide to structural engineering site visits for London properties - what to expect, why they're important, and how they can save you time and money." />
        <meta name="twitter:image" content="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Why We Conduct Structural Engineering Site Visits",
              "image": "/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png",
              "datePublished": "2023-05-15T08:00:00+01:00",
              "dateModified": "2023-11-28T10:30:00+01:00",
              "author": {
                "@type": "Organization",
                "name": "Alemara Engineering",
                "url": "https://londonstructuralsurveys.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Alemara Engineering",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://londonstructuralsurveys.com/logo.png"
                }
              },
              "description": "Expert guide to structural engineering site visits for London properties - what to expect, why they're important, and how they can save you time and money.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://londonstructuralsurveys.com/blog/structural-engineering-site-visits"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Updated with new background image */}
        <section className="bg-[#1A1F2C] py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-[#ea384c]/20 px-4 py-2 rounded-full mb-4">
                <span className="text-[#ea384c] font-semibold text-sm">PROFESSIONAL STRUCTURAL ASSESSMENTS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Why We Conduct Structural Engineering Site Visits</h1>
              <p className="text-xl mb-8">
                Detailed guide to our comprehensive engineering site visits - ensuring accuracy, safety, and compliance for London property projects
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle2 className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>All London Boroughs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>Certified Structural Engineers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingDialog>
                  <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40] text-white">
                    <span className="flex items-center">
                      Book a Site Visit <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </BookingDialog>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  <a href="tel:02080049060" className="flex items-center">
                    Call 020 8004 9060
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <article className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-gray-700">
                    Site visits are a crucial component of any structural engineering project in London. They provide our engineers with firsthand insights about the property that simply cannot be gained from plans or photos alone. Here's why these visits are essential and what to expect when our engineers visit your property.
                  </p>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Reasons for Site Visits Before Construction</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Card className="border border-gray-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                            <Search className="h-6 w-6 text-[#ea384c]" />
                          </div>
                          <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Accurate Assessment</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Allows engineers to see the actual condition of the property, identifying potential issues that may not be visible in drawings or plans.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                            <Building className="h-6 w-6 text-[#ea384c]" />
                          </div>
                          <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Building Context</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Understanding how the property interacts with neighboring buildings, especially in London's densely built environment.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                            <Ruler className="h-6 w-6 text-[#ea384c]" />
                          </div>
                          <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Precise Measurements</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Taking critical dimensions that ensure designs are accurate and construction plans are feasible for the specific property.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                            <AlertTriangle className="h-6 w-6 text-[#ea384c]" />
                          </div>
                          <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Risk Identification</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Early detection of potential structural issues that could impact project costs, timelines, or safety considerations.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Importance of the Visit Inspection</h2>
                  <p>
                    The on-site inspection forms the backbone of our structural assessment process. During these visits, our chartered structural engineers conduct a thorough examination of all relevant structural elements. This hands-on approach enables us to:
                  </p>

                  <ul className="space-y-4 my-6">
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
                      <span>Identify existing structural defects that may compromise the integrity of your planned construction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
                      <span>Examine the condition of load-bearing elements like walls, beams, and foundations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
                      <span>Evaluate the property's ability to support proposed structural changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
                      <span>Gather critical information for creating accurate designs and calculations</span>
                    </li>
                  </ul>

                  <div className="my-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">Did You Know?</h3>
                    <p className="text-gray-700">
                      Many London properties have undergone multiple undocumented modifications over decades or even centuries. Our site visits often reveal critical structural elements that aren't shown on any existing plans or drawings.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">What We Look For During a Site Visit</h2>
                  <div className="grid grid-cols-1 gap-4 my-6">
                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
                      <h3 className="font-semibold text-[#1A1F2C] flex items-center">
                        <HardHat className="h-5 w-5 text-[#ea384c] mr-2" />
                        Structural Elements
                      </h3>
                      <p className="text-gray-600 mt-2">
                        We examine all load-bearing components including walls, beams, columns, lintels, and foundation elements. Special attention is paid to their condition, size, and arrangement.
                      </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
                      <h3 className="font-semibold text-[#1A1F2C] flex items-center">
                        <AlertTriangle className="h-5 w-5 text-[#ea384c] mr-2" />
                        Signs of Distress
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Our engineers look for cracks, sagging, leaning, or bulging in walls and other structural components that may indicate underlying problems.
                      </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
                      <h3 className="font-semibold text-[#1A1F2C] flex items-center">
                        <Microscope className="h-5 w-5 text-[#ea384c] mr-2" />
                        Material Assessment
                      </h3>
                      <p className="text-gray-600 mt-2">
                        We identify the materials used in construction (types of brick, concrete, steel, timber) and assess their condition and properties, which is crucial for accurate structural calculations.
                      </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
                      <h3 className="font-semibold text-[#1A1F2C] flex items-center">
                        <MapPin className="h-5 w-5 text-[#ea384c] mr-2" />
                        Site Constraints
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Identifying access limitations, proximity to neighboring structures, party wall considerations, and potential construction challenges specific to the London urban environment.
                      </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
                      <h3 className="font-semibold text-[#1A1F2C] flex items-center">
                        <Camera className="h-5 w-5 text-[#ea384c] mr-2" />
                        Documentation
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Comprehensive photographic records and detailed measurements are taken to inform the design process and provide evidence of the property's pre-construction condition.
                      </p>
                    </div>
                  </div>

                  <div className="my-10">
                    <img 
                      src="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" 
                      alt="Structural engineer conducting a detailed site visit inspection" 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">Our structural engineer examining foundation elements during a site visit in North London</p>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Common Structural Issues Uncovered During Visits</h2>
                  <p>
                    Our site visits frequently reveal issues that would otherwise go undetected. In London properties, we commonly encounter:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-[#1A1F2C] mb-2">Inadequate Support for Previous Modifications</h3>
                        <p className="text-gray-600">
                          Many London properties have had DIY or unpermitted renovations that removed or compromised load-bearing elements.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-[#1A1F2C] mb-2">Subsidence and Settlement Issues</h3>
                        <p className="text-gray-600">
                          London's clay soil makes properties particularly vulnerable to movement during dry summers and wet winters.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-[#1A1F2C] mb-2">Deteriorated Victorian Foundations</h3>
                        <p className="text-gray-600">
                          Many period properties have shallow foundations that may be inadequate for modern extensions or significant alterations.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-[#1A1F2C] mb-2">Party Wall Complications</h3>
                        <p className="text-gray-600">
                          Shared walls between properties often have complex structural relationships that require careful consideration.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Construction Phase Site Visits</h2>
                  <p>
                    Our involvement doesn't end with the initial site visit. We also conduct critical inspection visits during construction:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#ea384c] font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1F2C]">Foundation Inspection</h3>
                        <p className="text-gray-600">Verifying that foundations are constructed according to design specifications before they're covered.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#ea384c] font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1F2C]">Steel/Structural Frame Verification</h3>
                        <p className="text-gray-600">Confirming that steel beams, columns, and connections are installed correctly.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#ea384c] font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1F2C]">Critical Stage Inspections</h3>
                        <p className="text-gray-600">Ensuring structural elements are properly installed before they're concealed by finishes.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#ea384c] font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1F2C]">Unforeseen Condition Response</h3>
                        <p className="text-gray-600">Providing rapid on-site solutions when unexpected issues are uncovered during construction.</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Case Study: Structural Site Visit in Clapton, London</h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6">
                    <p className="italic text-gray-700 mb-4">
                      "Our client was planning a rear extension and loft conversion for their Victorian terraced house in Clapton. The initial site visit revealed several critical issues not visible from architectural plans:"
                    </p>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>Previously unidentified chimney breast removal without proper structural support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>Significant cracking in the party wall requiring stabilization before new works</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>Shallow foundations that would need underpinning for the proposed extension</span>
                      </li>
                    </ul>

                    <p className="mt-4 text-gray-700">
                      By identifying these issues early, we were able to redesign the structural scheme, adjust the project budget appropriately, and prevent what would have been costly and dangerous surprises during construction.
                    </p>
                  </div>

                  <div className="my-10">
                    <img 
                      src="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" 
                      alt="Structural engineer examining foundation during site visit" 
                      className="w-full h-auto rounded-lg shadow-md object-cover"
                      style={{ maxHeight: "400px" }}
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">Our engineer assessing foundation conditions at a London property</p>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">How Alemara's Site Visits Benefit Clients</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ea384c]/10 rounded-full mb-4">
                        <FileSpreadsheet className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <h3 className="font-semibold text-[#1A1F2C] mb-2">Accurate Design & Costing</h3>
                      <p className="text-gray-600 text-sm">
                        Detailed site information leads to precise designs and more accurate project cost estimates.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ea384c]/10 rounded-full mb-4">
                        <Clock className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <h3 className="font-semibold text-[#1A1F2C] mb-2">Reduced Delays</h3>
                      <p className="text-gray-600 text-sm">
                        Early identification of potential issues minimizes costly mid-project redesigns and construction delays.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ea384c]/10 rounded-full mb-4">
                        <Users className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <h3 className="font-semibold text-[#1A1F2C] mb-2">Regulatory Compliance</h3>
                      <p className="text-gray-600 text-sm">
                        Ensuring designs meet building regulations and addressing specific London borough requirements.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-[#1A1F2C]">How long does a typical site visit take?</h3>
                      <p className="text-gray-600 mt-2">
                        Most residential site visits take 1-2 hours, depending on the property size and project complexity. Commercial properties may require longer assessments.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1A1F2C]">Do I need to be present during the site visit?</h3>
                      <p className="text-gray-600 mt-2">
                        While not always necessary, it's beneficial for you or a representative to be present to provide access and discuss specific concerns or plans directly with our engineer.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1A1F2C]">How quickly can you schedule a site visit in London?</h3>
                      <p className="text-gray-600 mt-2">
                        We typically schedule site visits within 2-5 working days across all London boroughs, with emergency appointments available when necessary.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1A1F2C]">What documentation do you provide after the site visit?</h3>
                      <p className="text-gray-600 mt-2">
                        Following the visit, we provide a detailed report summarizing our findings, including photographs, measurements, and preliminary recommendations for your project.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 mb-8 p-6 bg-[#1A1F2C] rounded-lg text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to Schedule Your Structural Site Visit?</h3>
                    <p className="mb-6">
                      Our team of experienced structural engineers covers all London boroughs and can help ensure your construction project starts with a solid foundation of accurate information.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <BookingDialog>
                        <Button className="bg-[#ea384c] hover:bg-[#d02e40] text-white">
                          Book a Site Visit Now
                        </Button>
                      </BookingDialog>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                        <a href="tel:02080049060" className="flex items-center">
                          Call 020 8004 9060
                        </a>
                      </Button>
                    </div>
                  </div>

                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Contact Card */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8 sticky top-24">
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Need Structural Engineering Help?</h3>
                  <p className="text-gray-600 mb-6">
                    Our certified structural engineers can assess your London property and provide expert guidance for your project.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#ea384c]/10 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-[#ea384c]" />
                      </div>
                      <div className="text-gray-700">
                        Serving all 32 London boroughs
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#ea384c]/10 p-2 rounded-full">
                        <CalendarCheck className="h-5 w-5 text-[#ea384c]" />
                      </div>
                      <div className="text-gray-700">
                        Quick appointments available
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#ea384c]/10 p-2 rounded-full">
                        <HardHat className="h-5 w-5 text-[#ea384c]" />
                      </div>
                      <div className="text-gray-700">
                        Chartered structural engineers
                      </div>
                    </div>
                  </div>
                  <BookingDialog>
                    <Button className="w-full bg-[#ea384c] hover:bg-[#d02e40] text-white mb-3">
                      Book a Site Visit
                    </Button>
                  </BookingDialog>
                  <Button variant="outline" className="w-full">
                    <a href="tel:02080049060" className="flex items-center justify-center w-full">
                      Call 020 8004 9060
                    </a>
                  </Button>
                </div>

                {/* Related Services */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Related Services</h3>
                  <div className="space-y-4">
                    <Link to="/services/structural-surveys" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Search className="h-5 w-5 text-[#ea384c] mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors">Structural Surveys</h4>
                        <p className="text-sm text-gray-600">Comprehensive property assessments for structural issues</p>
                      </div>
                    </Link>
                    <Separator />
                    <Link to="/services/residential/extensions" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Building className="h-5 w-5 text-[#ea384c] mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors">House Extensions</h4>
                        <p className="text-sm text-gray-600">Structural engineering for residential extensions</p>
                      </div>
                    </Link>
                    <Separator />
                    <Link to="/services/residential/internal-alterations" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Construction className="h-5 w-5 text-[#ea384c] mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors">Internal Alterations</h4>
                        <p className="text-sm text-gray-600">Removing walls, creating openings, and structural modifications</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <Link to="/blog/loft-conversion-considerations" className="flex group">
                      <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src="/lovable-uploads/bb746e6a-6105-42d2-81e9-1c0805d61938.png" 
                          alt="Loft conversion" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors text-sm">5 Things to Consider Before Starting a Loft Conversion</h4>
                        <p className="text-xs text-gray-500 mt-1">June 15, 2023</p>
                      </div>
                    </Link>
                    <Separator />
                    <Link to="/blog/period-property-structural-issues" className="flex group">
                      <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src="/lovable-uploads/30f1d92e-b72a-4c9c-9edd-e07196399814.png" 
                          alt="Period property" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors text-sm">Structural Issues in Period Properties: What to Look For</h4>
                        <p className="text-xs text-gray-500 mt-1">April 10, 2023</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Book Your Site Visit Today</h2>
              <p className="text-xl mb-8">
                Get expert structural engineering assessments for your London property from our team of certified professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingDialog>
                  <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                    <span className="flex items-center">
                      Book a Site Visit <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </BookingDialog>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  <a href="tel:02080049060" className="flex items-center">
                    Call 020 8004 9060
                  </a>
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

export default SiteVisitsPage;

