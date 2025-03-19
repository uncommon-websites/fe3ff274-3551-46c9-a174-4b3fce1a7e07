export const navigation = {
	platform: {
		name: "Product",
		children: [
			{ name: "Templates", href: "/platform/templates" },
			{ name: "Features", href: "/platform/features" }
		]
	},
	industries: {
		name: "Industries",
		children: [
			{ name: "Mining", href: "/industry/mining" },
			{ name: "Construction", href: "/industry/construction" },
			{ name: "Agriculture", href: "/industry/agriculture" },
			{ name: "Defense", href: "/industry/defense" }
		]
	},
	company: {
		name: "Company",
		children: [
			{ name: "About Us", href: "/about" },
			{ name: "Careers", href: "/careers" },
			{ name: "Press", href: "/press" },
			{
				name: "Contact Us",
				target: "_blank",
				href: "https://calendly.com/maximilian-rolf-sensmore/30min"
			}
		]
	}
};
