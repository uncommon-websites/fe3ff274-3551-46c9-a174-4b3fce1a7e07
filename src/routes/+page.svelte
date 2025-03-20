<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Hero from "$lib/components/layout/Hero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import FeaturesTwo from "$lib/components/layout/FeaturesTwo.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Hero />
<Summary
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
				"Do the kind of work that grows your function, and build a bigger ship as you row. Compound your impact by focusing on actions that will make your, or a colleague's life easier next time. By doing this all together, our impact and work life drastically improves."
		},
		{
			title: "Relentless improvements, tiny steps",
			description:
				"We search for the problem and put energy into polishing it. We're obsessed with improvements and know where to look for them. We understand change happens in steps, not milestones, and know when an undertaking is too big to make sense."
		},
		{
			title: "Write the new playbook",
			description:
				"Know the gold standard of your function, and reshape it for a new generation. Whether it's sales, engineering, or talent, what mattered 5 years ago is due to change. Be the one writing the playbook others will copy."
		}
	]}
/>
