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
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Use Cases",
		image:
			"https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Healthcare",
				href: "/industries/healthcare",
				description: "Innovative solutions for patient care",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Finance",
				href: "/industries/finance",
				description: "Streamlining operations and compliance",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Technology",
				href: "/industries/technology",
				description: "Cutting-edge tools for tech companies",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Education",
				href: "/industries/education",
				description: "Enhancing learning experiences",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Product",
				showInNav: true,
				showInFooter: false
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/company/careers",
				description: "Join our team and grow with us",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "About us",
				href: "/company/about",
				description: "Our mission and the team behind our success",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
