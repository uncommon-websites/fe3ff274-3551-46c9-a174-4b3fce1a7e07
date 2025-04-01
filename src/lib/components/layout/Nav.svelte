<script lang="ts">
	import { beforeNavigate, onNavigate } from "$app/navigation";

	// Constants
	import { cta, navigation } from "$lib/navigation";
	import Logo from "../Logo.svelte";

	// Components
	import Button from "../ui/Button.svelte";
	import IconMenu from "~icons/lucide/menu";

	let isMenuOpen: boolean = $state(false);

	// Save original theme color on first render
	let scrollBarWidth: number = $state(0);

	$effect(() => {
		scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
	});
	let themeColor: string = $state("");
	let originalThemeColor: string | null = $state(null);
	$effect(() => {
		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		originalThemeColor = metaThemeColor?.getAttribute("content");
	});

	$effect(() => {
		// Get computed background style for nav element when menu is open
		if (isMenuOpen) {
			scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
			// Get scrollbar width
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollBarWidth}px`;

			// Get computed background style for nav element
			const navElement = document.querySelector("#nav");
			themeColor = navElement
				? window.getComputedStyle(navElement).backgroundColor
				: "rgb(249, 250, 251)"; // fallback to bg-gray-50
		} else {
			document.body.style.overflow = "";
			document.body.style.paddingRight = "";
			themeColor = originalThemeColor || "";
		}
	});

	beforeNavigate(() => {
		if (isMenuOpen) {
			isMenuOpen = false;
		}
	});

	const DURATION = 500;
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === "Escape" && isMenuOpen) {
			isMenuOpen = false;
		}
	}}
/>

<svelte:head>
	{#if themeColor}
		<meta name="theme-color" content={themeColor} />
	{/if}
</svelte:head>

<div
	class="sticky top-0 left-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-lg"
	style:--tw-duration="{DURATION}ms"
>
	<div
		id="nav"
		class={[
			"items-between group/nav-list fixed inset-0 z-50 m-0 grid h-[100dvh] content-between overflow-y-auto bg-white  pt-32 ring transition-all duration-500 ease-in-out ",

			// State
			"pointer-events-none [clip-path:inset(0_0_100%_0)] data-[show]:pointer-events-auto data-[show]:[clip-path:inset(0)]"
		]}
		data-show={isMenuOpen || null}
	>
		<!-- style:margin-right="{scrollBarWidth}px" -->
		<ul class="nav-list px container mx-auto grid grid-cols-2 gap-12">
			{#each navigation as item, index}
				{@render linkOrGroup(item, index)}
			{/each}
		</ul>

		<div class="p container mx-auto w-full">
			<Button size="lg" variant="primary" class="z-0 w-full md:w-auto" href={cta.href}
				>{cta.label}</Button
			>
		</div>
	</div>

	<div
		class="px sticky top-0 left-0 z-50 container mx-auto grid grid-cols-[auto_auto] content-center items-center justify-between border-gray-100 py-2"
	>
		<!-- Mobile Nav -->

		<a href="/">
			<Logo class="z-50 size-7" />
		</a>

		<div class="flex items-center gap-2">
			<Button size="md" variant="secondary" href={cta.href}>{cta.label}</Button>

			<Button
				aria-label="Toggle nav"
				size="lg"
				variant="ghost"
				hideLabel
				suffix={IconMenu}
				iconOnly
				class="z-50 max-h-full"
				onclick={() => (isMenuOpen = !isMenuOpen)}>Menu</Button
			>
		</div>
	</div>
</div>

{#snippet linkOrGroup(item: (typeof navigation)[number], index: number)}
	<!-- [clip-path:inset(-100%_0_0_0)] group-[data-show]/nav-list:[clip-path:inset(0)] group-[data-show='true']/nav-list:[clip-path:polygon(0_0_0_0)] -->
	<svelte:element
		this={item?.children ? "div" : "a"}
		class={[
			"group flex flex-col gap-4 transition-all duration-300 ease-out [--offset:100%] group-[[data-show]]/nav-list:![--offset:0%]"
		]}
		data-show={isMenuOpen}
		aria-label={item.label}
		href={item?.href}
	>
		{#if item.children}
			<span class="text-body text-emphasis-dim">{item.label}</span>
			<ul class="grid gap-2.5">
				{#each item.children as child, index}
					{@render linkOrGroup(child, index)}
				{/each}
			</ul>
		{:else}
			<span
				style:transition-delay="{index * 150}ms"
				class="text-title2 font-medium transition-all duration-500 ease-out [clip-path:inset(0)]"
			>
				<!-- [clip-path:inset(0_0_var(--offset)_0)] -->
				<span
					style:transition-delay="{index * 50}ms"
					class="inline-block translate-y-[var(--offset)] transition duration-300 ease-out"
					>{item.label}</span
				>
			</span>
		{/if}
	</svelte:element>
{/snippet}
