<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import Hero from "$lib/components/layout/Hero.svelte";
	import ValueProp from "$lib/components/layout/ValueProp.svelte";
	import FeaturesOne from "$lib/components/layout/FeaturesOne.svelte";
	import Stats from "$lib/components/layout/Stats.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";

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
			image: "/images/workflow.jpg",
			link: {
				href: "/use-cases/workflows",
				label: "Learn more"
			}
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors.",
			image: "/images/chart.jpg",
			link: {
				href: "/use-cases/data-analysis",
				label: "Explore analytics"
			}
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption.",
			image: "/images/secure.jpg",
			link: {
				href: "/use-cases/collaboration",
				label: "See security features"
			}
		}
	]}
/>
