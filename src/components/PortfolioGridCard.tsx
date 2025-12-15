
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

// Helper function to create slug from title
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

interface ProjectProps {
	project: {
		id: string | number;
		title: string;
		type: string;
		cover_image?: string;
		image: string;
		description: string;
		completion?: string;
		location?: string;
	};
}

const PortfolioGridCard = ({ project }: ProjectProps) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageError, setImageError] = useState(false);

	const typeColor = {
		residential: 'text-[#ea384c]',
		commercial: 'text-[#ea384c]',
		civil: 'text-[#ea384c]'
	}[project.type] || 'text-[#ea384c]';

	// Extract custom title for special projects
	let displayTitle = "";
	if (project.id === 11) {
		displayTitle = "HPC";
	} else if (project.id === 12) {
		displayTitle = "HS2";
	} else {
		// For other projects, use the location or a placeholder
		displayTitle = project.location?.split(',')[0] || 'London';
	}
	
	// Create a subtitle for the card based on location
	const locationSubtitle = project.location || 'London, UK';

	// Handle image errors with improved fallbacks
	const handleImageError = () => {
		console.error(`Failed to load image for project ${project.id}:`, imageUrl);
		setImageError(true);
		
		// Special handling for specific projects
		const target = document.getElementById(`project-img-${project.id}`) as HTMLImageElement;
		if (!target) return;
		
		// Use a placeholder for projects with failed images
		target.src = '/placeholder.svg';
		toast.error(`Could not load image for ${project.title}`);
	};

	const slug = createSlug(project.title);
	const imageUrl = project.cover_image || project.image;

	return (
		<Link 
			to={`/portfolio/${slug}`}
			className="block group relative overflow-hidden aspect-square rounded-md transition-all hover:shadow-xl"
		>
			{/* Background Image with gradient overlay */}
			<div className="absolute inset-0 bg-gray-900">
				{/* Show placeholder while image is loading or if there's an error */}
				{(!imageLoaded || imageError) && (
					<div className="absolute inset-0 flex items-center justify-center bg-gray-800">
						<div className="w-8 h-8 border-4 border-gray-700 border-t-gray-400 rounded-full animate-spin"></div>
					</div>
				)}
				<img 
					id={`project-img-${project.id}`}
					src={imageUrl} 
					alt={`${project.title} - ${project.type} structural engineering project`}
					className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}`}
					loading="lazy"
					width="600"
					height="600"
					onLoad={() => setImageLoaded(true)}
					onError={handleImageError}
				/>
				{/* Dark gradient overlay for better text visibility */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
			</div>

			{/* Project details positioned on top of the image */}
			<div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
				<h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-1">
					{displayTitle}
				</h2>
				<p className="text-sm text-gray-300 mb-2">
					{locationSubtitle}
				</p>
				<p className={`uppercase font-semibold ${typeColor}`}>
					{project.type}
				</p>
			</div>
		</Link>
	);
};

export default PortfolioGridCard;
