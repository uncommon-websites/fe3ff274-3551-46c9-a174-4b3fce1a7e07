<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Conversion obsessed",
			description: "Every design decision is driven by conversion data and user behavior analysis."
		},
		{
			title: "Data-driven approach",
			description: "We combine proven frameworks with real performance metrics to scale revenue."
		},
		{
			title: "Results guaranteed",
			description: "Your satisfaction and revenue growth are guaranteed, backed by our 50+ client portfolio."
		}
	];
</script>

<SecondaryHero
	title="Websites that scale revenue"
	subtitle="Built to convert. Proven to perform."
	imageSrc="/generated/image-photorealistic-candid-wide-shot-of-a-div.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"We started in 2018 with a simple goal: make helpful tech that people actually need. While many chase profits, we chose to do things differently.",
		"Beyond making good products, we care about doing the right thing, being kind to our planet, and making sure everyone can use what we build. That's our compass.",
		"From day one, we've asked ourselves: 'Does this actually help people?' This question gets us through tough calls and shapes who we are. We're playing the long game here.",
		"We think about how our work affects real people's lives. We build tech that brings people together, keeps your information safe, and treats everyone fairly. When we stick to these basics, good things happen."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and investors sections removed - no real team members or investors provided -->

<!-- CTA Section -->
<CallToAction
	title="Ready to scale revenue?"
	subtitle="Transform your website into a conversion machine"
	description="Join 50+ founders who've transformed their high-traffic websites into revenue-generating assets. Satisfaction guaranteed."
	imageSrc="/generated/image-photorealistic-editorial-portrait-of-a-p.webp"
/>
