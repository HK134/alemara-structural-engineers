
// Projects index file - combines all project data
import { residentialProjects } from './residential';
import { commercialProjects } from './commercial';
import { civilProjects } from './civil';
import { featuredProjects } from './featured';

// Combine all projects into a single array
export const portfolioItems = [
  ...residentialProjects,
  ...commercialProjects,
  ...civilProjects
];

// Slug helpers
export const createProjectSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const getProjectSlug = (project: { title: string }): string => {
  return createProjectSlug(project.title);
};

export const getProjectBySlug = (slug: string) => {
  return portfolioItems.find(p => createProjectSlug(p.title) === slug);
};

// Export individual project type arrays
export { residentialProjects, commercialProjects, civilProjects, featuredProjects };

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return featuredProjects.map(id => 
    portfolioItems.find(project => project.id === id)
  ).filter(Boolean);
};

// Helper function to get project by ID
export const getProjectById = (id: number) => {
  return portfolioItems.find(project => project.id === id);
};

// Helper function to get projects by type
export const getProjectsByType = (type: string) => {
  return portfolioItems.filter(project => project.type === type);
};
