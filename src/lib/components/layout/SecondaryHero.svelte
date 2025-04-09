<script lang="ts">
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";

	let {
		title,
		subtitle
	}: {
		title: string;
		subtitle: string;
	} = $props();
</script>

<header class="border-b border-gray-100 dark:border-gray-900">
	<div class="text-title3 section-px section-py container mx-auto grid gap-16 gap-y-0">
		<SectionHeader {title} {subtitle} size="lg" />
		<div class="aspect-video overflow-clip rounded-xl bg-gray-100">
			<img
				class="h-full w-full"
				src="https://source.unsplash.com/random/?people"
				alt="Diverse group of people collaborating"
			/>
		</div>
	</div>
</header>
