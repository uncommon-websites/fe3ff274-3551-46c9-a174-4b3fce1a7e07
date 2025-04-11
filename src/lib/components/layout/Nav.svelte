<script lang="ts">
	// Components
	import MobileNav from "./sub/MobileNav.svelte";
	import DesktopNav from "./sub/DesktopNav.svelte";
	import Logo from "../Logo.svelte";

	// Utils
	import { MediaQuery } from "svelte/reactivity";
	import { navHeight } from "$lib/state/nav.svelte";
	import { scrollY } from "svelte/reactivity/window";
	import { CONFIG } from "$lib/content";
	import { navigation } from "$lib/navigation";

	// State
	const touch = new MediaQuery("(hover: none) and (pointer: coarse)");
	const mobile = new MediaQuery("(max-width: 768px)");

	const DURATION = 500;

	const navItems = $derived(
		navigation
			.filter((item) => item.showInNav)
			.map((item) => {
				if (!item.children) return item;

				return {
					...item,
					children: item.children.filter((child) => child.showInNav !== false)
				};
			})
	);
</script>

<div
	bind:clientHeight={navHeight.current}
	class={[
		"sticky top-0 left-0 z-50 border-b backdrop-blur-lg transition",
		scrollY.current !== 0 ? "border-border bg-background/95" : "bg-background border-transparent"
	]}
	style:--tw-duration="{DURATION}ms"
>
	<div class="section-px container mx-auto grid grid-cols-2 py-3">
		<a href="/" class="flex items-center gap-3.5">
			<Logo class="z-50 size-7" />

			<span class="hidden font-medium lg:inline">{CONFIG.companyName}</span>
		</a>

		<!-- items + cta -->
		<div class="debug">
			{#if mobile.current}
				<MobileNav items={navItems} isTouchDevice={touch.current} />
			{:else}
				<DesktopNav items={navItems} />
			{/if}
		</div>
	</div>
</div>
