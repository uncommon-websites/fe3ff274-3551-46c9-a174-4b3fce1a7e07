<script>
	// Components
	import AnimateText from "../animation/AnimateText.svelte";

	let { title = "" } = $props();
</script>

<!-- Hero Section -->
<section class="bg-gray-50">
	<div class="section-py section-px container mx-auto grid min-h-[50vh] gap-16">
		<!-- <div class="items-between grid gap-6 lg:grid-cols-2"> -->
		<h1 class="text-display text-emphasis-high">
			<AnimateText text={title} />
		</h1>
	</div>
</section>
