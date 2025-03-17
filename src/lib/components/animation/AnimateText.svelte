<script lang="ts">
	// Props
	const {
		text,
		oncomplete = () => {},
		show = true
	}: { text: string; show?: boolean; oncomplete?: () => void } = $props()

	// State
	let words = $derived(text.split(' '))

	function handleWordIntroEnd(index: number) {
		if (words.length === index + 1) {
			oncomplete()
		}
	}
</script>

<span class:show>
	{#each text.split(' ') as word, i}
		<span
			class="animated-word inline-block origin-left"
			style:--delay="{i * 100}ms"
			onanimationend={() => handleWordIntroEnd(i)}
		>
			{word}
		</span>{' '}
	{/each}
</span>

<style lang="postcss">
	.animated-word {
		opacity: 0;
	}

	.show .animated-word {
		animation: appearAnimation 1000ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
		animation-delay: var(--delay);
		opacity: 0;
		transform: translateY(12px) scale(1);
		filter: blur(4px);
	}

	@keyframes appearAnimation {
		from {
			opacity: 0;
			transform: translateY(12px) scale(1);
			filter: blur(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
			filter: blur(0);
		}
	}
</style>
