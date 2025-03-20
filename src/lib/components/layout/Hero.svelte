<script lang="ts">
	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import AnimateText from "../animation/AnimateText.svelte";

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Dashboard+Preview";
	}

	// Types
	type Props = {
		title: string;
		subtitle: string;
		imageSrc: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let { title, subtitle, imageSrc, callsToAction = [] }: Props = $props();
</script>

<header class="px container mx-auto grid gap-16 py-12 pt-24 text-balance" data-enter-container>
	<h1 class="text-display" data-enter>
		<span class="block"><AnimateText text={title} /></span>
		<span class="text-emphasis-dim block"><AnimateText text={subtitle} /></span>
	</h1>
	{#if callsToAction.length > 0}
		<div class="flex gap-4" data-enter>
			{#each callsToAction as cta, index}
				<Button href={cta.href} size="lg" variant={index % 2 === 0 ? "primary" : "secondary"}
					>{cta.label}</Button
				>
			{/each}
		</div>
	{/if}
</header>

<div class="col-span-full aspect-video" data-enter>
	<img src={imageSrc} alt="Customer" class="size-full object-cover" onerror={handleImageError} />
</div>
