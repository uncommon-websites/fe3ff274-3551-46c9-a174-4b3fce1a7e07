<script lang="ts">
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

<section
	class="[--gap:--spacing(2)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-xl)]"
>
	<div class="section-px section-py container mx-auto grid">
		<SectionHeader {title} {subtitle} />

		<div class="grid grid-cols-3 gap-(--gap) rounded-(--radius)">
			<!-- <div
				class="items-between row-start-2 grid content-between gap-8 rounded-(--radius) bg-gray-50 p-(--gap) lg:row-start-auto"
			>
				<div> -->
			{#each features as feature}
				<article
					class="grid content-between gap-16 rounded-(--radius) bg-gray-50 p-5 px-6 text-pretty dark:bg-gray-900"
				>
					<h3 class="text-headline mb-2">
						{feature.title}
					</h3>
					<p class="text-body text-emphasis-low">{feature.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
