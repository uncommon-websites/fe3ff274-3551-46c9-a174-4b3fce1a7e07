<!--
@component
    Use this component to showcase the main #1 benefit of a product or service in a clear and concise manner.

    Usage:
    ```html
    <Summary
      title="A clear value proposition"
      text="This component showcases your most important benefit with a smooth animation effect as users scroll"
    />
    ```

    Props:
    - `title`: A summary hint about the benefit (sentence case)
    - `text`: Main benefit statement, concise and impactful
-->

<script lang="ts">
	// Utils
	import { scroll, animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Props
	const {
		title,
		text
	}: {
		title: string;
		text: string;
	} = $props();

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
					at: "0",
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
	class="section-py section-px items-startgap-8 relative container mx-auto flex flex-col text-pretty lg:grid lg:grid-cols-[1fr_2fr] xl:flex-row"
	bind:this={containerElement}
>
	<p class="text-emphasis-dim word">{title}</p>
	<p class="text-title1 container-sm relative mx-auto">
		{#each words as word}
			<span>
				<span class="word relative inline-block transition duration-150 ease-out">{word}</span>{" "}
			</span>
		{/each}
	</p>
</div>
