// Types
export type NavItem = {
	label: string;
	href?: string;
	children?: NavItem[];
};

export const navigation: NavItem[] = [
	{
		label: "Industries",
		children: [
			{ label: "Healthcare", href: "/industries/healthcare" },
			{ label: "Finance", href: "/industries/finance" },
			{ label: "Technology", href: "/industries/technology" },
			{ label: "Education", href: "/industries/education" }
		]
	},
	{ label: "About", href: "/company/about" },
	{ label: "Contact", href: "/company/contact" }
];
