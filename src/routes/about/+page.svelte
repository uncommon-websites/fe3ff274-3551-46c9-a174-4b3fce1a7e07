<script lang="ts">
	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Icons
	import IconPlus from "~icons/lucide/plus";
	import Card from "$lib/components/ui/Card.svelte";
	import Team from "./Team.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/SecondaryHero.svelte";

	// Constants

	const values = [
		{
			title: "Innovation",
			description: "Constantly challenging the status quo to create better solutions."
		},
		{
			title: "Integrity",
			description: "Building trust through transparent actions and honest communication."
		},
		{
			title: "Impact",
			description: "Measuring our success by the positive change we create for our clients."
		}
	];
</script>

<SecondaryHero title="About Us" />

<!-- Story Section -->
<Story />

<!-- Team Section -->
<Team />
<Team
	title="Backed by the best."
	subtitle="Point Nine, TSIC and others"
	teamMembers={[
		{
			name: "Sarah Johnson",
			position: "Lead Investor",
			bio: "Seasoned venture capitalist with a focus on tech startups and a portfolio of successful exits.",
			image:
				"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Michael Zhang",
			position: "Angel Investor",
			bio: "Early-stage investor with expertise in scaling B2B SaaS companies from inception to market leadership.",
			image:
				"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
		},
		{
			name: "Elena Rodriguez",
			position: "Strategic Partner",
			bio: "Former CFO with a keen eye for sustainable business models and long-term growth potential.",
			image:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Ready to collaborate?"
	subtitle="Let's create something amazing"
	description="Join the companies already leveraging our expertise to transform their digital presence and achieve their business goals."
/>
