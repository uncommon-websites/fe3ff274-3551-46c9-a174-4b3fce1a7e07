<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";

	let {
		paragraphs = []
	}: {
		paragraphs: string[];
	} = $props();
</script>

<div class="">
	<article class="section-py container mx-auto grid max-w-full">
		<Summary text={paragraphs.join("\n\n")} />
	</article>
</div>
