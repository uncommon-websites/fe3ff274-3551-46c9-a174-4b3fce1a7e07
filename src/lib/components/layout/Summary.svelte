<!--
    Use this component to display a summary, or a couple of sentences about a company of their product.
-->
<script lang="ts">
	// Utils
	import { scroll, animate, stagger } from 'motion'
	import { onMount } from 'svelte'

	// Props
	const { text }: { text: string } = $props()

	// State
	let words = $derived(text.split(' '))
	let containerElement: HTMLDivElement

	onMount(() => {
		if (!containerElement) return

		// Get all word elements as an array
		const wordElements = Array.from(containerElement.querySelectorAll('.word'))

		const sequence = [
			[
				wordElements,
				{
					opacity: [0, 0, 1],
					y: ['1em', 0],
					filter: ['blur(16px)', 'blur(0px)']
				},
				{
					at: '+2',
					delay: stagger(0.025)
				}
			]
		]

		scroll(animate(sequence), {
			target: containerElement,
			offset: ['start end', 'center center']
		})
	})
</script>

<div
	class="section-py section-px relative container mx-auto text-pretty"
	bind:this={containerElement}
>
	<p class="text-title1 relative mx-auto max-w-[50ch]">
		{#each words as word}
			<span>
				<span class="word relative inline-block">{word}</span>{' '}
			</span>
		{/each}
	</p>
</div>

<!-- style:clip-path="polygon(0 0, 100% 0, 100% 100%, 0 100%)" -->
