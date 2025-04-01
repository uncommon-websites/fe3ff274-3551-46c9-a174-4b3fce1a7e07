// Types
import type { PageLoad } from "./$types";

// Constants
const industries = {
	healthcare: {
		meta: {
			title: "Healthcare",
			description: "Healthcare solutions for providers and organizations"
		},
		hero: {
			title: "Healthcare Innovation Platform",
			subtitle: "Empowering providers to deliver better patient care",
			imageSrc: "/images/industries/healthcare-hero.jpg",
			callsToAction: [
				{ href: "/demo", label: "Get Started" },
				{ href: "#features", label: "Learn More" }
			]
		},
		summary: {
			title: "Transforming Healthcare Delivery",
			text: "Our platform helps healthcare providers improve patient outcomes, streamline operations, and ensure compliance while reducing administrative burden on clinical staff."
		},
		testimonials: [
			{
				quote: "This solution has revolutionized how we manage patient data and care coordination.",
				author: "Dr. Sarah Williams",
				role: "Chief Medical Officer, Metro Health",
				imageSrc: "/images/testimonials/sarah-williams.jpg"
			},
			{
				quote: "We've seen a 30% reduction in administrative tasks since implementation.",
				author: "Robert Chen",
				role: "Healthcare Administrator, Community Care",
				imageSrc: "/images/testimonials/robert-chen.jpg"
			}
		],
		features: {
			title: "Healthcare Solutions That Make a Difference",
			subtitle: "Purpose-built for modern healthcare challenges",
			items: [
				{
					title: "Patient Engagement",
					description: "Connect with patients through secure messaging and telehealth integration",
					icon: "users"
				},
				{
					title: "Clinical Workflows",
					description: "Streamline documentation and clinical processes for improved efficiency",
					icon: "clipboard-list"
				},
				{
					title: "Data Analytics",
					description: "Gain insights from healthcare data to improve quality measures",
					icon: "chart-bar"
				},
				{
					title: "Compliance Management",
					description: "Stay compliant with HIPAA, HITECH and other healthcare regulations",
					icon: "shield-check"
				}
			]
		},
		useCases: {
			title: "Healthcare Applications",
			subtitle: "How healthcare organizations leverage our platform",
			items: [
				{
					title: "Care Coordination",
					description: "Coordinate care across providers and settings for better patient outcomes",
					imageSrc: "/images/use-cases/care-coordination.jpg"
				},
				{
					title: "Revenue Cycle Management",
					description: "Optimize billing processes and reduce claim denials",
					imageSrc: "/images/use-cases/revenue-cycle.jpg"
				},
				{
					title: "Population Health",
					description: "Identify at-risk patients and manage care for specific populations",
					imageSrc: "/images/use-cases/population-health.jpg"
				}
			]
		},
		cta: {
			title: "Elevate Your Healthcare Practice",
			subtitle: "Join leading healthcare organizations using our platform",
			description:
				"Schedule a consultation to see how we can help you improve patient care and operational efficiency.",
			callsToAction: [
				{ href: "/get-started", label: "Get Started", variant: "primary" },
				{ href: "/contact", label: "Talk to Sales", variant: "secondary" }
			]
		}
	},
	finance: {
		meta: {
			title: "Finance",
			description: "Financial solutions for institutions and businesses"
		},
		hero: {
			title: "Financial Intelligence Platform",
			subtitle: "Empowering financial decisions with data-driven insights",
			imageSrc: "/images/industries/finance-hero.jpg",
			callsToAction: [
				{ href: "/demo", label: "Get Started" },
				{ href: "#features", label: "Learn More" }
			]
		},
		summary: {
			title: "Revolutionizing Financial Services",
			text: "Our platform enables financial institutions to enhance customer experiences, automate compliance processes, and leverage AI for better risk assessment and investment strategies."
		},
		testimonials: [
			{
				quote:
					"This platform has transformed our risk management approach and increased our efficiency by 50%.",
				author: "James Wilson",
				role: "CTO, Global Investments",
				imageSrc: "/images/testimonials/james-wilson.jpg"
			},
			{
				quote: "The predictive analytics have given us a competitive edge in market analysis.",
				author: "Linda Chang",
				role: "Head of Trading, Apex Capital",
				imageSrc: "/images/testimonials/linda-chang.jpg"
			}
		],
		features: {
			title: "Powerful Financial Tools",
			subtitle: "Comprehensive solutions for modern financial challenges",
			items: [
				{
					title: "Risk Assessment",
					description: "Advanced analytics to identify and mitigate potential risks",
					icon: "chart-line"
				},
				{
					title: "Fraud Detection",
					description: "AI-powered systems to detect unusual patterns and prevent fraud",
					icon: "shield-alert"
				},
				{
					title: "Investment Analysis",
					description: "Data-driven insights for portfolio management and optimization",
					icon: "presentation-chart"
				},
				{
					title: "Regulatory Compliance",
					description: "Automated tools to ensure adherence to financial regulations",
					icon: "document-check"
				}
			]
		},
		useCases: {
			title: "Financial Success Stories",
			subtitle: "How financial institutions leverage our platform",
			items: [
				{
					title: "Wealth Management",
					description:
						"Personalized investment strategies based on client goals and risk tolerance",
					imageSrc: "/images/use-cases/wealth-management.jpg"
				},
				{
					title: "Banking Operations",
					description: "Streamlined processes for improved customer service and reduced costs",
					imageSrc: "/images/use-cases/banking-operations.jpg"
				},
				{
					title: "Financial Planning",
					description:
						"Comprehensive tools for individuals and businesses to achieve financial goals",
					imageSrc: "/images/use-cases/financial-planning.jpg"
				}
			]
		},
		cta: {
			title: "Transform Your Financial Services",
			subtitle: "Join leading financial institutions already using our platform",
			description:
				"Schedule a demo to see how we can help you improve efficiency and customer satisfaction.",
			callsToAction: [
				{ href: "/demo", label: "Request Demo", variant: "primary" },
				{ href: "/pricing", label: "View Solutions", variant: "secondary" }
			]
		}
	},
	technology: {
		meta: {
			title: "Technology",
			description: "Tech solutions for companies of all sizes"
		},
		hero: {
			title: "Technology Innovation Hub",
			subtitle: "Accelerate your digital transformation journey",
			imageSrc: "/images/industries/technology-hero.jpg",
			callsToAction: [
				{ href: "/demo", label: "Get Started" },
				{ href: "#features", label: "Explore Features" }
			]
		},
		summary: {
			title: "Powering Tech Innovation",
			text: "Our platform helps technology companies streamline development workflows, improve collaboration, and deliver products faster with integrated DevOps tools and AI-powered insights."
		},
		testimonials: [
			{
				quote:
					"This solution has cut our development cycle by 35% and improved code quality significantly.",
				author: "Alex Rivera",
				role: "CTO, FutureTech",
				imageSrc: "/images/testimonials/alex-rivera.jpg"
			},
			{
				quote:
					"The automated testing and deployment features have revolutionized our release process.",
				author: "Priya Sharma",
				role: "VP of Engineering, CodeInnovate",
				imageSrc: "/images/testimonials/priya-sharma.jpg"
			}
		],
		features: {
			title: "Technology Solutions for Modern Teams",
			subtitle: "Tools designed for today's development challenges",
			items: [
				{
					title: "DevOps Integration",
					description: "Seamlessly connect your development and operations workflows",
					icon: "code-bracket"
				},
				{
					title: "AI-Assisted Development",
					description: "Leverage machine learning for code suggestions and bug detection",
					icon: "cpu-chip"
				},
				{
					title: "Collaboration Tools",
					description: "Foster teamwork with real-time communication and sharing features",
					icon: "user-group"
				},
				{
					title: "Performance Monitoring",
					description: "Track application performance and identify optimization opportunities",
					icon: "chart-bar-square"
				}
			]
		},
		useCases: {
			title: "Tech Success Stories",
			subtitle: "How technology companies leverage our platform",
			items: [
				{
					title: "Continuous Integration",
					description: "Automate testing and deployment for faster release cycles",
					imageSrc: "/images/use-cases/continuous-integration.jpg"
				},
				{
					title: "Product Development",
					description: "Streamline the entire product lifecycle from ideation to launch",
					imageSrc: "/images/use-cases/product-development.jpg"
				},
				{
					title: "Technical Support",
					description: "Improve customer satisfaction with integrated support tools",
					imageSrc: "/images/use-cases/technical-support.jpg"
				}
			]
		},
		cta: {
			title: "Elevate Your Tech Company",
			subtitle: "Join innovative technology companies using our platform",
			description: "See how our solutions can help you build better products faster.",
			callsToAction: [
				{ href: "/demo", label: "Schedule Demo", variant: "primary" },
				{ href: "/resources", label: "View Resources", variant: "secondary" }
			]
		}
	},
	education: {
		meta: {
			title: "Education",
			description: "Educational solutions for institutions of all levels"
		},
		hero: {
			title: "Education Transformation Platform",
			subtitle: "Empowering educators and students in the digital age",
			imageSrc: "/images/industries/education-hero.jpg",
			callsToAction: [
				{ href: "/demo", label: "Get Started" },
				{ href: "#features", label: "Learn More" }
			]
		},
		summary: {
			title: "Reimagining Education",
			text: "Our platform helps educational institutions create engaging learning experiences, streamline administrative tasks, and leverage data analytics to improve student outcomes and educator effectiveness."
		},
		testimonials: [
			{
				quote:
					"This platform has transformed how we deliver curriculum and engage with our students.",
				author: "Dr. Emily Rodriguez",
				role: "Superintendent, Westview School District",
				imageSrc: "/images/testimonials/emily-rodriguez.jpg"
			},
			{
				quote:
					"The analytics capabilities have helped us identify at-risk students and intervene earlier.",
				author: "Professor Thomas Lee",
				role: "Dean of Students, Horizon University",
				imageSrc: "/images/testimonials/thomas-lee.jpg"
			}
		],
		features: {
			title: "Educational Tools for Modern Learning",
			subtitle: "Comprehensive solutions for today's educational challenges",
			items: [
				{
					title: "Interactive Learning",
					description: "Create engaging content that adapts to individual student needs",
					icon: "academic-cap"
				},
				{
					title: "Assessment Tools",
					description: "Measure learning outcomes with diverse evaluation methods",
					icon: "clipboard-document-check"
				},
				{
					title: "Student Analytics",
					description: "Track progress and identify opportunities for intervention",
					icon: "chart-pie"
				},
				{
					title: "Administrative Automation",
					description: "Streamline operations from enrollment to grade management",
					icon: "cog"
				}
			]
		},
		useCases: {
			title: "Education Success Stories",
			subtitle: "How educational institutions leverage our platform",
			items: [
				{
					title: "Personalized Learning",
					description: "Adapt educational content to individual student needs and learning styles",
					imageSrc: "/images/use-cases/personalized-learning.jpg"
				},
				{
					title: "Remote Education",
					description: "Deliver quality instruction regardless of physical location",
					imageSrc: "/images/use-cases/remote-education.jpg"
				},
				{
					title: "Professional Development",
					description: "Support educator growth with targeted training opportunities",
					imageSrc: "/images/use-cases/professional-development.jpg"
				}
			]
		},
		cta: {
			title: "Transform Your Educational Institution",
			subtitle: "Join leading schools and universities using our platform",
			description:
				"Schedule a demo to see how we can help improve learning outcomes and institutional efficiency.",
			callsToAction: [
				{ href: "/demo", label: "Request Demo", variant: "primary" },
				{ href: "/case-studies", label: "View Case Studies", variant: "secondary" }
			]
		}
	}
};

export const load: PageLoad = async ({ params }) => {
	const { industry } = params;

	if (!industry || !(industry in industries)) {
		return {};
	}

	return industries[industry as keyof typeof industries];
};
