<script lang="ts">
	// Types
	import type { NavItem } from "$lib/navigation";

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import IconMenu from "~icons/lucide/menu";
	import IconChevronRight from "~icons/lucide/chevron-right";

	// Utils
	import { cta, navigation } from "$lib/navigation";
	import { beforeNavigate } from "$app/navigation";

	// Props
	const { items = [] }: { items: typeof navigation } = $props();

	// State
	let isMenuOpen = $state(false);
	let scrollBarWidth: number = $state(0);
	let themeColor: string = $state("");
	let originalThemeColor: string | null = $state(null);

	$effect(() => {
		scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
	});

	$effect(() => {
		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		originalThemeColor = metaThemeColor?.getAttribute("content");
	});

	$effect(() => {
		try {
			// Handle body scroll locking when menu is open
			if (isMenuOpen) {
				// Get accurate scrollbar width - recalculate to handle viewport changes
				scrollBarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);

				// Lock body scroll with padding to prevent layout shift
				if (document.body) {
					document.body.style.overflow = "hidden";
					document.body.style.paddingRight = `${scrollBarWidth}px`;
				}

				// Get computed background style for theme-color meta tag
				const navElement = document.getElementById("nav") || document.querySelector("#nav");

				if (navElement) {
					// Use computed style for accurate color
					const computedStyle = window.getComputedStyle(navElement);
					themeColor = computedStyle.backgroundColor || computedStyle.background;
				} else {
					// Fallback with theme-aware default
					themeColor = document.documentElement.classList.contains("dark")
						? "hsl(var(--background))" // dark mode fallback using CSS variable
						: "hsl(var(--background))"; // light mode fallback using CSS variable
				}
			} else {
				// Restore normal scrolling
				if (document.body) {
					document.body.style.overflow = "";
					document.body.style.paddingRight = "";
				}

				// Restore original theme color
				themeColor = originalThemeColor || "";
			}
		} catch (_) {
			// Ensure body scroll is restored in case of error
			if (document.body) {
				document.body.style.overflow = "";
				document.body.style.paddingRight = "";
			}
		}
	});

	beforeNavigate(() => {
		if (isMenuOpen) {
			isMenuOpen = false;
		}
	});
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
<!-- Mobile Nav Menu -->
<div
	id="nav"
	class={[
		"items-between group/nav-list bg-background fixed inset-0 -z-10 m-0 grid h-[100dvh] content-between overflow-y-auto pt-32 transition duration-500 ease-out lg:hidden",
		"pointer-events-none translate-y-[-100%] data-[show]:pointer-events-auto data-[show]:translate-y-0"
	]}
	data-show={isMenuOpen || null}
>
	<ul class="nav-list divide-y-gray-100 container mx-auto divide-y">
		{#each items as item, index}
			{@render linkOrGroup(item, index)}
		{/each}
	</ul>

	<div class="section-px container mx-auto w-full">
		<Button size="lg" variant="primary" class="z-0 w-full md:w-auto" href={cta.href}
			>{cta.label}</Button
		>
	</div>
</div>

<div class="flex items-center justify-end gap-2">
	<Button size="sm" variant="secondary" href={cta.href}>{cta.label}</Button>

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

{#snippet linkOrGroup(item: NavItem, index: number)}
	{#if item.children}
		<details
			class="section-px group nav-item transition-all duration-300 ease-out [--offset:1] group-[[data-show]]/nav-list:![--offset:0]"
		>
			<summary
				class="text-muted-foreground flex cursor-pointer list-none items-center justify-between"
				>{item.label} <IconChevronRight /></summary
			>
			<ul class="mt-2 flex flex-col gap-2.5 pl-4">
				{#each item.children as child, childIndex}
					{@render linkOrGroup(child, childIndex)}
				{/each}
			</ul>
		</details>
	{:else}
		<a
			href={item?.href}
			class="section-px group nav-item flex flex-col transition-all duration-300 ease-out [--offset:1] group-[[data-show]]/nav-list:![--offset:0]"
			aria-label={item.label}
		>
			<span
				style:transition-delay="{index * 150}ms"
				class="text-foreground font-medium transition-all duration-500 ease-out [clip-path:inset(0)]"
			>
				<span
					style:transition-delay="{index * 50}ms"
					class="inline-block translate-y-[calc(200%*var(--offset))] opacity-[calc(1-var(--offset))] transition duration-300 ease-out"
					>{item.label}</span
				>
			</span>
		</a>
	{/if}
{/snippet}

<style lang="postcss">
	@reference '../../../../app.css';
	.nav-item {
		@apply py-2.5;
	}
</style>
