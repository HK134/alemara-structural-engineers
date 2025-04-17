
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

// Export individual project type arrays
export { residentialProjects, commercialProjects, civilProjects, featuredProjects };

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return featuredProjects.map(id => {
    const project = portfolioItems.find(project => project.id === id);
    // Ensure all required fields are present
    if (project && !project.completion) {
      return {
        ...project,
        completion: "2023" // Default completion date if missing
      };
    }
    return project;
  }).filter(Boolean);
};

// Helper function to get project by ID
export const getProjectById = (id: number) => {
  const project = portfolioItems.find(project => project.id === id);
  // Ensure the completion field exists
  if (project && !project.completion) {
    return {
      ...project,
      completion: "2023" // Default completion date if missing
    };
  }
  return project;
};

// Helper function to get projects by type
export const getProjectsByType = (type: string) => {
  return portfolioItems
    .filter(project => project.type === type)
    .map(project => {
      // Ensure the completion field exists
      if (!project.completion) {
        return {
          ...project,
          completion: "2023" // Default completion date if missing
        };
      }
      return project;
    });
};
