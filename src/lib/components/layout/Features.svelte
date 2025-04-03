<script lang="ts">
	import Card from "../ui/Card.svelte";

	// Types
	type Feature = {
		title: string;
		description: string;
		link?: {
			href: string;
			label: string;
		};
	};

	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Props
	const {
		title,
		subtitle,
		features = []
	}: { title: string; subtitle: string; features: Feature[] } = $props();
</script>

<!--
@component
A feature grid section that displays a list of features with titles and descriptions.
Never use title case, always sentence case.

Make the feature descriptions one short sentence that clearly articulates the feature.

Usage:
```html
<FeatureSection
  title="Section Title"
  subtitle="Section Subtitle"
  features={[
    {
      title: "Feature Title",
      description: "Feature description text",
      link: { href: "/optional-link", label: "Learn more" } // optional
    }
    // more features...
  ]}
/>
```
-->

<section
	class="[--gap:--spacing(2)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-xl)]"
>
	<div class="section-px section-py container mx-auto grid">
		<SectionHeader {title} {subtitle} />

		<div class="grid gap-(--gap) rounded-(--radius) md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<Card {...feature} />
			{/each}
		</div>
	</div>
</section>
