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

<!-- Hero Section -->
<section class=" bg-gray-50 dark:bg-gray-900">
	<div class="section-py section-px container mx-auto grid gap-16 md:grid-cols-2 md:items-baseline">
		<!-- <div class="items-between grid gap-6 lg:grid-cols-2"> -->
		<h1 class="text-display text-emphasis-high">
			<AnimateText text="We're building the future of digital experiences" />
		</h1>
		<p class="text-headline text-emphasis-low max-w-xl">
			Founded on the principle that technology should empower rather than complicate, we've been
			crafting innovative solutions since 2018.
		</p>
		<!-- </div> -->
		<!-- <div class="h-full w-full overflow-hidden rounded-(--radius-2xl)">
			<img
				src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
				alt="Our team in action"
				class="h-full w-full object-cover"
			/>
		</div> -->
	</div>
</section>

<!-- Story Section -->
<Story />

<!-- Team Section -->
<Team />

<!-- CTA Section -->
<CallToAction
	title="Ready to collaborate?"
	subtitle="Let's create something amazing"
	description="Join the companies already leveraging our expertise to transform their digital presence and achieve their business goals."
/>
