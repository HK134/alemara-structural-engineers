-- Create blogs table for the CMS system
CREATE TABLE public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  image_url TEXT,
  author TEXT DEFAULT 'Alemara Team',
  date_published TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  published BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  category TEXT DEFAULT 'General',
  meta_description TEXT,
  read_time INTEGER DEFAULT 5
);

-- Enable RLS on the blogs table
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (since this is a public blog)
CREATE POLICY "Anyone can read published blogs" 
ON public.blogs 
FOR SELECT 
USING (published = true);

-- Create policy for authenticated users to manage blogs (admin functionality)
CREATE POLICY "Authenticated users can manage blogs" 
ON public.blogs 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_blogs_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_blogs_updated_at();

-- Create index for better performance on common queries
CREATE INDEX idx_blogs_published ON public.blogs(published, date_published DESC);
CREATE INDEX idx_blogs_category ON public.blogs(category);
CREATE INDEX idx_blogs_tags ON public.blogs USING GIN(tags);
CREATE INDEX idx_blogs_slug ON public.blogs(slug);

-- Insert some sample blog posts to replace the hardcoded data
INSERT INTO public.blogs (title, slug, excerpt, content, category, tags, image_url, author, featured, meta_description, read_time) VALUES
(
  '5 Things to Consider Before Starting a Loft Conversion',
  'loft-conversion-considerations',
  'Planning a loft conversion? Our structural engineers share the key considerations to ensure success.',
  'Planning a loft conversion is an exciting prospect that can significantly increase your home''s value and living space. However, before you begin this transformative project, there are several crucial factors our structural engineers recommend considering.

## 1. Planning Permission and Building Regulations

The first step in any loft conversion is understanding the legal requirements. While many loft conversions fall under Permitted Development Rights, certain circumstances require full planning permission. Our team can help you navigate these requirements and ensure compliance with all Building Regulations.

## 2. Structural Assessment

Not all lofts are suitable for conversion without significant structural work. We conduct thorough structural assessments to determine if your existing roof structure can support the additional load or if reinforcement is required.

## 3. Headroom and Space Planning

Adequate headroom is essential for a successful loft conversion. Building Regulations typically require a minimum ceiling height of 2.3 meters over at least 50% of the floor area. Our engineers will assess your space and suggest optimal layouts.

## 4. Access and Staircase Design

Safe and Building Regulation-compliant access to your new loft space is crucial. This often involves installing a new staircase, which requires careful planning to ensure it meets all safety requirements while not compromising the floor below.

## 5. Services and Insulation

Proper electrical work, heating, and insulation are essential for creating a comfortable living space. Our structural engineers work closely with MEP specialists to ensure all services are properly integrated into the design.

At Alemara, we provide comprehensive structural engineering services for loft conversions throughout London, ensuring your project is both safe and compliant.',
  'Residential',
  '{"loft conversion", "residential", "building regulations", "structural engineering"}',
  'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemarablogimages/bb746e6a-6105-42d2-81e9-1c0805d61938.png',
  'Sarah Johnson, MEng CEng',
  true,
  'Planning a loft conversion? Our structural engineers share 5 key considerations including planning permission, structural assessment, headroom requirements, access design, and essential services for your London loft conversion project.',
  8
),
(
  'Understanding Building Regulations for House Extensions',
  'building-regulations-for-extensions',
  'Navigate the complexities of building regulations with our expert guide for homeowners.',
  'House extensions are a popular way to add space and value to your property, but navigating building regulations can seem daunting. Our structural engineers break down everything you need to know.

## What Are Building Regulations?

Building Regulations are legal requirements that ensure all building work meets minimum standards for health, safety, accessibility, and energy efficiency. They apply to most extension projects, regardless of whether planning permission is required.

## When Do You Need Building Regulation Approval?

Most house extensions require Building Regulation approval, including:
- Single and double-story extensions
- Basement extensions
- Conservatories over 30m²
- Any structural alterations

## The Application Process

There are two main routes for Building Regulation compliance:

### 1. Full Plans Application
Submit detailed drawings and calculations before work begins. This provides certainty but takes longer to approve.

### 2. Building Notice
Start work with basic details, with inspections during construction. Faster to start but less certainty.

## Key Areas Covered

Building Regulations cover numerous aspects:
- **Structure**: Foundation design, load-bearing capacity
- **Fire Safety**: Escape routes, fire resistance
- **Insulation**: Thermal performance requirements
- **Ventilation**: Air quality and moisture control
- **Accessibility**: Disabled access provisions

## Working with Structural Engineers

At Alemara, we handle all structural aspects of Building Regulation compliance, including calculations, drawings, and liaison with Building Control officers throughout your project.

Contact us early in your planning process to ensure a smooth application and approval process.',
  'Regulations',
  '{"building regulations", "house extensions", "planning permission", "compliance"}',
  'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemarablogimages/551ecc30-f655-4a5d-8c6a-775bbc45da9e.png',
  'Michael Patel, BSc CEng MIStructE',
  false,
  'Expert guide to building regulations for house extensions in London. Learn about application processes, key requirements, and how structural engineers ensure compliance with Building Control.',
  6
),
(
  'Why We Conduct Structural Engineering Site Visits',
  'structural-engineering-site-visits',
  'Understand the crucial importance of professional site visits before starting any structural project in London.',
  'Site visits are an integral part of our structural engineering process at Alemara. Many clients wonder why we insist on visiting their property before providing detailed proposals. Here''s why these visits are essential for successful structural projects.

## Understanding the Existing Structure

Every building is unique, and no two properties are exactly alike, even if they appear similar from the outside. During our site visits, we:

- Assess the current structural condition
- Identify existing materials and construction methods
- Evaluate load paths and structural elements
- Document any existing issues or defects

## Accurate Project Scoping

Desktop studies and photographs can only tell us so much. A thorough site visit allows us to:

- Provide accurate cost estimates
- Identify potential challenges early
- Suggest the most appropriate solutions
- Avoid costly surprises during construction

## Health and Safety Assessment

Safety is our top priority. Site visits help us:

- Identify potential hazards
- Assess access for construction work
- Evaluate temporary support requirements
- Plan safe working procedures

## Building Relationship and Trust

Meeting our clients in person and seeing their vision firsthand helps us:

- Understand their specific requirements
- Build rapport and trust
- Communicate effectively throughout the project
- Deliver solutions that exceed expectations

## Compliance and Due Diligence

Our site visits ensure we:

- Meet professional standards and obligations
- Gather information required for Building Control applications
- Document existing conditions for insurance purposes
- Provide comprehensive professional services

## The Alemara Approach

Our experienced structural engineers conduct thorough site visits for every project, no matter the size. We believe this investment in understanding your property and requirements is essential for delivering exceptional results.

Book your consultation today to experience the Alemara difference in structural engineering services across London.',
  'Professional Practice',
  '{"site visits", "structural engineering", "building assessment", "professional practice"}',
  'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemarablogimages/57084614-f16d-4202-afe0-c331511bca8c.png',
  'James Thompson, MEng CEng MIStructE',
  true,
  'Learn why structural engineering site visits are crucial for building projects. Discover how Alemara''s professional site assessments ensure accurate scoping, safety, and successful project outcomes in London.',
  7
);