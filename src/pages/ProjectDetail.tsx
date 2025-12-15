
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';
import { supabase } from '@/integrations/supabase/client';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Building, Home, HardHat, Loader2 } from 'lucide-react';
import PortfolioCard from '@/components/PortfolioCard';
import ServiceCTA from '@/components/services/ServiceCTA';
import ProjectInfo from '@/components/project/ProjectInfo';
import ProjectNavigation from '@/components/project/ProjectNavigation';
import InfrastructureProjectDetail from '@/components/project/InfrastructureProjectDetail';
import { Helmet } from 'react-helmet-async';

// Helper function to create slug from title
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const ProjectDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const slugOrId = (params as any).slug || (params as any).id as string; // support slug or id
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [prevProject, setPrevProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const [filterType, setFilterType] = useState<string>('all');
  const [allProjects, setAllProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slugOrId) return;
      
      setLoading(true);
      try {
        // Fetch all projects for navigation
        const { data: allProjectsData, error: allError } = await (supabase as any)
          .from('portfolio_projects')
          .select('*')
          .eq('published', true)
          .order('display_order', { ascending: true });
        
        if (allError) throw allError;
        setAllProjects(allProjectsData || []);
        
        // Try to find project by slug (matching title)
        let currentProject = (allProjectsData || []).find((p: any) => 
          createSlug(p.title) === slugOrId
        );
        
        // If not found by slug, try by ID
        if (!currentProject) {
          currentProject = (allProjectsData || []).find((p: any) => 
            p.id === slugOrId
          );
          
          // If found by ID, redirect to slug URL
          if (currentProject) {
            const canonical = `/portfolio/${createSlug(currentProject.title)}`;
            navigate(canonical, { replace: true });
          }
        }
        
        if (currentProject) {
          setProject(currentProject);
          
          // Find prev/next projects
          const currentIndex = (allProjectsData || []).findIndex((p: any) => p.id === currentProject.id);
          setPrevProject(currentIndex > 0 ? allProjectsData[currentIndex - 1] : null);
          setNextProject(currentIndex < (allProjectsData || []).length - 1 ? allProjectsData[currentIndex + 1] : null);
          
          // Load related projects
          await loadRelatedProjects(currentProject.type, currentProject.id, allProjectsData);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProject();
  }, [slugOrId, navigate]);

  const loadRelatedProjects = async (type: string, currentId: string, projects: any[]) => {
    let filtered = type === 'all' ? projects : projects.filter((p: any) => p.type === type);
    filtered = filtered.filter((p: any) => p.id !== currentId);
    setRelatedProjects(filtered.slice(0, 3));
  };
  
  // Update related projects when filter changes
  useEffect(() => {
    if (project && allProjects.length > 0) {
      loadRelatedProjects(filterType, project.id, allProjects);
    }
  }, [filterType, project, allProjects]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-[#ea384c]" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Project not found</div>
      </div>
    );
  }

  // Special handling for civil infrastructure projects (check by title)
  const isInfrastructureProject = project.title?.includes('HPC') || project.title?.includes('HS2');

  const pageTitle = `${project.title} | London Structural Engineering Project`;
  const pageDescription = project.description?.substring(0, 160);
  const canonicalUrl = `https://alemara.co.uk/portfolio/${createSlug(project.title)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        {isInfrastructureProject ? (
          <InfrastructureProjectDetail project={project} />
        ) : (
          <>
            {/* Compact header */}
            <div className="container mx-auto px-4 mb-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                <p className="text-gray-600">{project.location || 'London'}</p>
              </div>
            </div>
            
            {/* Project information */}
            <div className="container mx-auto px-4 mb-8">
              <ProjectInfo project={project} />
            </div>
          </>
        )}
        
        {/* Project navigation */}
        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-4xl mx-auto">
            <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
          </div>
        </div>
        
        {/* Other projects section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Check Out Our Other Projects</h2>
            
            {/* Project type filter */}
            <div className="flex justify-center mb-8">
              <ToggleGroup type="single" defaultValue="all" value={filterType} onValueChange={(value) => value && setFilterType(value)}>
                <ToggleGroupItem value="all" aria-label="All projects" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>All</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="residential" aria-label="Residential projects" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>Residential</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="commercial" aria-label="Commercial projects" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>Commercial</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="civil" aria-label="Civil projects" className="flex items-center gap-2">
                  <HardHat className="h-4 w-4" />
                  <span>Civil</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            {/* Related projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(relatedProject => (
                <PortfolioCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        </div>
        
        <ServiceCTA />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default ProjectDetail;
