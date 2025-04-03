const legal = {
	privacy: {
		meta: {
			title: "Privacy Policy",
			description:
				"Our privacy policy explains how we collect, use, and protect your personal information."
		},
		content: {
			lastUpdated: new Date().toISOString(),
			sections: [
				{
					title: "Introduction",
					body: "We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
				},
				{
					title: "Information We Collect",
					body: "We may collect, use, store and transfer different kinds of personal data about you including: Identity Data (name, username), Contact Data (email, phone), Technical Data (IP address, browser info), and Usage Data (how you use our website)."
				},
				{
					title: "How We Use Your Information",
					body: "We will only use your personal data when legally permitted. Most commonly to perform contracts with you, for our legitimate interests, or to comply with legal obligations."
				},
				{
					title: "Data Security",
					body: "We have implemented appropriate security measures to prevent unauthorized access, alteration, disclosure, or destruction of your personal data."
				},
				{
					title: "Your Legal Rights",
					body: "You have rights to access, correct, erase, object to processing, restrict processing, and transfer your personal data. Contact us to exercise these rights."
				},
				{
					title: "Contact Us",
					body: "If you have questions about this privacy policy, please contact us at privacy@example.com."
				}
			]
		}
	},
	terms: {
		meta: {
			title: "Terms of Service",
			description: "Our terms of service outline the rules and regulations for using our website."
		},
		content: {
			lastUpdated: new Date().toISOString(),
			sections: [
				{
					title: "Acceptance of Terms",
					body: "By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site."
				},
				{
					title: "Use License",
					body: "Permission is granted to temporarily download one copy of materials for personal, non-commercial viewing only. This license shall automatically terminate if you violate any of these restrictions."
				},
				{
					title: "Disclaimer",
					body: "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including implied warranties of merchantability or fitness for a particular purpose."
				},
				{
					title: "Limitations",
					body: "In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website."
				},
				{
					title: "Revisions",
					body: "We may revise these terms at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service."
				},
				{
					title: "Governing Law",
					body: "These terms shall be governed by and construed in accordance with the laws, and you submit to the exclusive jurisdiction of the courts in that location."
				}
			]
		}
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const { type } = params as { type: keyof typeof legal };
	const content = legal[type];

	return content;
};
