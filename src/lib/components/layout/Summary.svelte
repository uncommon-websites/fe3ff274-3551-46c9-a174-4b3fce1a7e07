<!--
    Use this component to display a summary, or a couple of sentences about a company of their product.
-->
<script lang="ts">
	// Utils
	import { scroll, animate, stagger, spring } from "motion";
	import { onMount } from "svelte";

	// Props
	const { text }: { text: string } = $props();

	// State
	let words = $derived(text.split(" "));
	let containerElement: HTMLDivElement;

	onMount(() => {
		if (!containerElement) return;

		// Get all word elements as an array
		const wordElements = Array.from(containerElement.querySelectorAll(".word"));

		const sequence = [
			[
				wordElements,
				{
					opacity: [0, 0, 1],
					y: ["1em", 0],
					filter: ["blur(12px)", "blur(8px) brightness(250%)", "blur(0px)"]
				},
				{
					at: "+2",
					delay: stagger(0.015),
					ease: "easeInOut"
				}
			]
		];

		scroll(animate(sequence), {
			target: containerElement,
			offset: ["start end", "center center"]
		});
	});
</script>

<div
	class="section-py section-px relative container mx-auto flex flex-col items-start gap-4 gap-8 text-pretty lg:grid lg:grid-cols-[1fr_2fr] xl:flex-row"
	bind:this={containerElement}
>
	<p class="text-emphasis-dim word">Our guiding principles</p>
	<p class="text-title1 container-sm relative mx-auto">
		{#each words as word}
			<span>
				<span class="word relative inline-block transition duration-150 ease-out">{word}</span>{" "}
			</span>
		{/each}
	</p>
</div>

<!-- style:clip-path="polygon(0 0, 100% 0, 100% 100%, 0 100%)" -->
