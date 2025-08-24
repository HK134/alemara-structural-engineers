import fs from 'fs';
import path from 'path';

// Helper function to create slug from title
const createProjectSlug = (title) => 
  title.toLowerCase().trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Read and parse the project data files
function parseProjectsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract project objects using regex
    const projectMatches = content.match(/{\s*id:\s*\d+[\s\S]*?}/g) || [];
    
    return projectMatches.map(match => {
      // Extract id
      const idMatch = match.match(/id:\s*(\d+)/);
      const id = idMatch ? parseInt(idMatch[1]) : null;
      
      // Extract title
      const titleMatch = match.match(/title:\s*['"`]([^'"`]+)['"`]/);
      const title = titleMatch ? titleMatch[1] : null;
      
      if (id && title) {
        return { id, title, slug: createProjectSlug(title) };
      }
      return null;
    }).filter(Boolean);
  } catch (error) {
    console.warn(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

function generateRedirects() {
  const dataDir = path.resolve(process.cwd(), 'src', 'data', 'projects');
  const files = ['residential.ts', 'commercial.ts', 'civil.ts'];
  
  let allProjects = [];
  
  // Parse all project files
  for (const file of files) {
    const filePath = path.join(dataDir, file);
    const projects = parseProjectsFromFile(filePath);
    allProjects = [...allProjects, ...projects];
  }
  
  // Generate redirect rules
  const redirects = allProjects.map(project => 
    `/portfolio/${project.id} /portfolio/${project.slug} 301!`
  );
  
  console.log('Portfolio ID to Slug Redirects:');
  console.log('# Portfolio ID redirects - add these to your _redirects file');
  redirects.forEach(redirect => console.log(redirect));
  
  console.log(`\nGenerated ${redirects.length} redirects for portfolio projects.`);
  
  return redirects;
}

// Run the script
generateRedirects(); 