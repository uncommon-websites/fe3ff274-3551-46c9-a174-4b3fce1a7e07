<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Hero from "$lib/components/layout/Hero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import FeaturesTwo from "$lib/components/layout/FeaturesTwo.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Hero />
<Summary
	title="Our guiding principles"
	text="We believe in creating technology that empowers people to achieve more while respecting their privacy and security. Our platform is built on principles of transparency, accessibility, and continuous innovation to meet evolving needs. We're committed to sustainable development practices that benefit both our users and the environment."
/>
<UseCases
	title="Unique Advantages"
	subtitle="Discover how our platform delivers unmatched value"
	useCases={[
		{
			title: "Streamlined Workflows",
			description:
				"Automate repetitive tasks and connect systems to improve productivity with our industry-leading 87% time savings.",
			image:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
			link: {
				href: "/use-cases/workflows",
				label: "Learn more"
			}
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors.",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2488&q=80",
			link: {
				href: "/use-cases/data-analysis",
				label: "Explore analytics"
			}
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption.",
			image:
				"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
			link: {
				href: "/use-cases/collaboration",
				label: "See security features"
			}
		}
	]}
/>
<FeaturesTwo
	title="Our Values"
	subtitle="V7's culture and key to our success"
	features={[
		{
			title: "Move the needle",
			description:
				"Do the kind of work that grows your function and builds a bigger ship as you row. Compound your impact by focusing on actions that make life easier next time."
		},
		{
			title: "Relentless improvements",
			description:
				"We search for problems and put energy into polishing them. We're obsessed with improvements and understand change happens in steps, not milestones."
		},
		{
			title: "Write the new playbook",
			description:
				"Know the gold standard of your function and reshape it for a new generation. Be the one writing the playbook others will copy."
		},
		{
			title: "Customer obsession",
			description:
				"We listen intently to our customers and build solutions that address their real needs. Every decision starts with the customer experience."
		},
		{
			title: "Embrace innovation",
			description:
				"We foster a culture that encourages experimentation and creative thinking. We're not afraid to challenge conventions to find better solutions."
		},
		{
			title: "Lead with integrity",
			description:
				"We maintain the highest standards of ethics in all our interactions. Trust is our foundation for building lasting relationships."
		}
	]}
/>

<Testimonials
	testimonials={[
		{
			name: "Jane Smith",
			position: "CTO",
			company: "Tech Innovations",
			quote:
				"This solution transformed our workflow and increased productivity by 35% in just two months.",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "John Doe",
			position: "Director of Operations",
			company: "Global Solutions",
			quote:
				"The implementation was seamless and the support team was exceptional throughout the process.",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Sarah Johnson",
			position: "Product Manager",
			company: "Future Systems",
			quote:
				"We've tried multiple solutions, but this is the only one that perfectly addressed all our requirements.",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&estimonial-3.jpg"
		}
	]}
/>
