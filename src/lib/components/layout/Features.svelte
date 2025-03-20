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

		<div class="grid gap-(--gap) rounded-(--radius) md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<article
					class="hover:bg-primary-50 hover:text-primary-900 grid content-between gap-16 rounded-(--radius) bg-gray-50 p-4 px-5 text-pretty transition duration-300 ease-out lg:p-5 lg:px-6 dark:bg-gray-900"
				>
					<h3 class="text-headline hover:text-primary-900 mb-2">
						{feature.title}
					</h3>
					<p class="text-body opacity-60">{feature.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
