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
	description?: string;
	children?: Omit<NavItem[], "children" | "image">;
};

export const cta = {
	label: "Book demo",
	href: "/"
};
// Types
import type { Component } from "svelte";

export const navigation: NavItem[] = [
	{
		label: "Product",
		image: "https://source.unsplash.com/random/100x100?sig=1",
		children: [
			{
				label: "Overview",
				href: "/product/overview",
				description: "Get a comprehensive view of our product features and capabilities"
			},
			{
				label: "Solutions",
				href: "/product/solutions",
				description: "Discover tailored solutions to address your business challenges"
			},

			{
				label: "Pricing",
				href: "/pricing",
				description: "Transparent pricing plans to fit your budget"
			}
		]
	},
	{
		label: "Use Cases",
		image: "https://source.unsplash.com/random/100x100?sig=2",
		description: "Explore how our product serves different industries",
		children: [
			{
				label: "Healthcare",
				href: "/industries/healthcare",
				description: "Transforming patient care with innovative solutions"
			},
			{
				label: "Finance",
				href: "/industries/finance",
				description: "Streamlining financial operations and compliance"
			},
			{
				label: "Technology",
				href: "/industries/technology",
				description: "Empowering tech companies with cutting-edge tools"
			},
			{
				label: "Education",
				href: "/industries/education",
				description: "Enhancing learning experiences and educational outcomes"
			}
		]
	},
	{
		label: "Resources",
		image: "https://source.unsplash.com/random/100x100?sig=3",
		children: [
			{
				label: "Blog",
				href: "/blog",
				description: "Insights, updates, and thought leadership from our team"
			}
		]
	},
	{
		label: "Company",
		image: "https://source.unsplash.com/random/100x100?sig=4",
		children: [
			{
				label: "Careers",
				href: "/company/careers",
				description: "Join our team and grow your career with us"
			},
			{
				label: "About us",
				href: "/company/about",
				description: "Learn about our mission, vision, and the team behind our success"
			},
			{
				label: "News",
				href: "/company/news",
				description: "Latest announcements and company updates"
			},
			// { label: "Legal", href: "/legal" },
			// { label: "Security", href: "/security" },
			// { label: "Events", href: "/company/events" },
			{
				label: "Contact",
				href: "/contact",
				description: "Get in touch with our support and sales teams"
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
