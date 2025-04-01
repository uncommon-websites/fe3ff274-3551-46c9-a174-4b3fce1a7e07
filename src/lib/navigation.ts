/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;

	children?: (Omit<NavItem, "children" | "image"> & {
		description?: string;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};
export const navigation: NavItem[] = [
	{
		label: "Product",
		children: [
			{
				label: "Overview",
				href: "/product/overview",
				description: "View our product features and capabilities"
			},
			{
				label: "Solutions",
				href: "/product/solutions",
				description: "Solutions for your business challenges"
			},

			{
				label: "Pricing",
				href: "/pricing",
				description: "Pricing plans to fit your budget"
			}
		]
	},
	{
		label: "Use Cases",
		image:
			"https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		children: [
			{
				label: "Healthcare",
				href: "/industries/healthcare",
				description: "Innovative solutions for patient care"
			},
			{
				label: "Finance",
				href: "/industries/finance",
				description: "Streamlining operations and compliance"
			},
			{
				label: "Technology",
				href: "/industries/technology",
				description: "Cutting-edge tools for tech companies"
			},
			{
				label: "Education",
				href: "/industries/education",
				description: "Enhancing learning experiences"
			}
		]
	},
	{
		label: "Resources",

		children: [
			{
				label: "Blog",
				href: "/blog",
				description: "Insights and updates from our team"
			}
		]
	},
	{
		label: "Company",

		children: [
			{
				label: "Careers",
				href: "/company/careers",
				description: "Join our team and grow with us"
			},
			{
				label: "About us",
				href: "/company/about",
				description: "Our mission and the team behind our success"
			},
			{
				label: "News",
				href: "/company/news",
				description: "Company announcements and updates"
			},
			// { label: "Legal", href: "/legal" },
			// { label: "Security", href: "/security" },
			// { label: "Events", href: "/company/events" },
			{
				label: "Contact",
				href: "/contact",
				description: "Reach our support and sales teams"
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
