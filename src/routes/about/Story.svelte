<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";

	let {
		paragraphs = [],
		...rest
	}: {
		paragraphs: string[];
		[key: string]: any;
	} = $props();
</script>

<div class="" {...rest}>
	<article class="section-py container mx-auto grid max-w-full">
		<Summary text={paragraphs.join("\n\n")} />
	</article>
</div>
