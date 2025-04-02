<script lang="ts">
	// Types
	import type { Component } from "svelte";

	// Components
	import Marquee from "./sub/Marquee.svelte";
	import MarqueeItem from "./sub/MarqueeItem.svelte";

	// Logos — these are all we have
	import LacosteLogo from "$lib/components/logos/LacosteLogo.svelte";
	import PolestarLogo from "$lib/components/logos/PolestarLogo.svelte";
	import ByredoLogo from "$lib/components/logos/ByredoLogo.svelte";
	import VerizonLogo from "$lib/components/logos/VerizonLogo.svelte";
	import SaltStrawLogo from "$lib/components/logos/SaltStrawLogo.svelte";
	import DrMartensLogo from "$lib/components/logos/DrMartensLogo.svelte";
	import ExpressLogo from "$lib/components/logos/ExpressLogo.svelte";
	import CrateBarrelLogo from "$lib/components/logos/CrateBarrelLogo.svelte";

	// Props
	const {
		paused,
		label = "Scaling companies like yours",
		layout = "vertical",
		mode = "light",
		logos = [
			LacosteLogo,
			PolestarLogo,
			ByredoLogo,
			VerizonLogo,
			SaltStrawLogo,
			DrMartensLogo,
			ExpressLogo,
			CrateBarrelLogo
		]
	}: {
		paused?: boolean;
		label?: string;
		layout?: "horizontal" | "vertical";
		mode?: "light" | "dark";
		logos?: Component[];
	} = $props();
</script>

<div
	data-scroller
	class="grid place-items-center gap-4 self-end py-4 sm:py-12"
	class:!flex={layout === "horizontal"}
	class:dark={mode === "dark"}
>
	{#if label}
		<p
			class="body-sm text-emphasis-low whitespace-nowrap"
			class:mr-2={layout === "horizontal"}
			class:sm:mr-4={layout === "horizontal"}
		>
			{label}
		</p>
	{/if}
	<div class="m-auto w-full max-w-prose overflow-hidden">
		<Marquee
			class="mask-image h-full items-center text-gray-400 [--gap:theme(spacing.6)] sm:[--gap:theme(spacing.12)]"
			speed={paused ? 0 : 0.1}
		>
			{#each logos as Logo}
				<MarqueeItem>
					<Logo class="h-6 max-h-6 sm:h-8 sm:max-h-8" />
				</MarqueeItem>
			{/each}
		</Marquee>
	</div>
</div>

<style lang="postcss">
	:global(.mask-image) {
		mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
	}
</style>
