// Types
export type NavItem = {
	label: string;
	href?: string;
	children?: NavItem[];
};

export const navigation: NavItem[] = [
	{
		label: "Use Cases",
		children: [
			{ label: "Healthcare", href: "/industries/healthcare" },
			{ label: "Finance", href: "/industries/finance" },
			{ label: "Technology", href: "/industries/technology" },
			{ label: "Education", href: "/industries/education" }
		]
	},
	{ label: "Pricing", href: "/pricing" },
	{
		label: "More",
		children: [
			{
				label: "About",
				href: "/company/about"
			},
			{
				label: "Blog",
				href: "/company/blog"
			}
		]
	}
];
