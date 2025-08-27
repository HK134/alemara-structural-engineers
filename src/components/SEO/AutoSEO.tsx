import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    
    // Format the label
    let label = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Special cases
    if (path === 'faq') label = 'FAQ';
    if (path === 'blog') label = 'Blog';
    if (paths[0] === 'portfolio' && index === 1) {
      // For portfolio items, we could fetch the actual title
      label = 'Project';
    }
    
    breadcrumbs.push({ label, path: currentPath });
  });

  return breadcrumbs;
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4">
      <ol className="flex items-center space-x-2 text-sm container mx-auto max-w-6xl">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-600">{item.label}</span>
            ) : (
              <Link 
                to={item.path} 
                className="text-[#ea384c] hover:underline flex items-center"
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Internal linking suggestions for content
export const internalLinks = {
  services: [
    { text: 'structural surveys', url: '/services/structural-surveys' },
    { text: 'loft conversions', url: '/services/residential/loft-conversions' },
    { text: 'extensions', url: '/services/residential/extensions' },
    { text: 'basement extensions', url: '/services/basement-extensions' },
    { text: 'subsidence surveys', url: '/services/subsidence-crack-surveys' },
    { text: 'commercial projects', url: '/services/commercial' },
    { text: 'civil engineering', url: '/services/civil-engineering' },
    { text: 'new builds', url: '/services/new-builds' },
  ],
  areas: [
    { text: 'Islington', url: '/areas/islington-highbury' },
    { text: 'Camden', url: '/areas/camden-kentish-town' },
    { text: 'Hackney', url: '/areas/hackney-shoreditch' },
    { text: 'Kensington', url: '/areas/kensington-chelsea' },
    { text: 'Westminster', url: '/areas/westminster-mayfair' },
    { text: 'London boroughs', url: '/areas/london-boroughs' },
  ],
  main: [
    { text: 'portfolio', url: '/portfolio' },
    { text: 'about us', url: '/about-us' },
    { text: 'contact us', url: '/contact' },
    { text: 'FAQ', url: '/faq' },
    { text: 'blog', url: '/blog' },
  ]
};

// Auto-link content helper
export const autoLinkContent = (content: string): string => {
  let linkedContent = content;
  
  [...internalLinks.services, ...internalLinks.areas, ...internalLinks.main].forEach(link => {
    const regex = new RegExp(`\\b(${link.text})\\b`, 'gi');
    linkedContent = linkedContent.replace(regex, (match) => {
      return `<a href="${link.url}" class="text-[#ea384c] hover:underline">${match}</a>`;
    });
  });
  
  return linkedContent;
};

// Related content suggestions
export const RelatedContent: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const relatedLinks = [
    ...internalLinks.services,
    ...internalLinks.areas
  ].filter(link => link.url !== currentPath).slice(0, 5);

  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-8">
      <h3 className="text-xl font-bold mb-4">Related Pages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {relatedLinks.map(link => (
          <Link
            key={link.url}
            to={link.url}
            className="text-[#ea384c] hover:underline capitalize"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default { Breadcrumbs, RelatedContent, autoLinkContent, internalLinks }; 