<!--
@component Nav

Do not modify this component as it is finely crafted.
-->

<script lang="ts">
	// Components
	import Button from "../ui/Button.svelte";
	import IconMenu from "~icons/lucide/menu";
	import IconArrowDown from "~icons/lucide/arrow-down";
	import Logo from "../Logo.svelte";

	// Constants
	import { METADATA } from "$lib/content";
	import { cta, navigation } from "$lib/navigation";

	// Utils
	import { untrack } from "svelte";
	import { beforeNavigate } from "$app/navigation";
	import { computePosition, autoUpdate, size, shift } from "@floating-ui/dom";
	import { blur, fade, slide } from "svelte/transition";
	import { cubicOut } from "svelte/easing";

	// State
	const DURATION = 500;

	let isMenuOpen: boolean = $state(false);
	let scrollBarWidth: number = $state(0);
	let themeColor: string = $state("");
	let originalThemeColor: string | null = $state(null);
	let isDesktopNavOpen = $state(false);
	let activeDesktopNavItem: number = $state(null)!;
	let itemRects: DOMRectReadOnly[] = $state([]);
	let itemElements: HTMLElement[] = $state([]);
	let tooltip: HTMLElement | null = $state(null);

	$effect(() => {
		scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
	});

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

		if (isDesktopNavOpen) {
			isDesktopNavOpen = false;
		}
	});

	$effect(() => {
		if (activeDesktopNavItem === null) return;

		// untrack(() => {
		const reference = itemElements[activeDesktopNavItem];
		const referenceRect = itemRects[activeDesktopNavItem];
		if (!reference || !tooltip || !referenceRect) return;

		const cleanup = autoUpdate(reference, tooltip, () => {
			computePosition(reference, tooltip, {
				middleware: [
					shift(),
					size({
						apply({ availableWidth, elements, x, y }) {
							// Apply position
							Object.assign(elements.floating.style, {
								// left: `${x}px`,
								// top: `${y}px`,
								transform: `translate3d(${x}px, ${y + 8}px, 0)`,
								// Set appropriate width and max height to prevent overflow
								// width: `${Math.max(0, referenceRect.width ?? 0)}px`,
								// width: `${availableHeight}px`,
								// width: `${referenceRect.width}px`,
								height: `${referenceRect.height}px`,
								// height: `${Math.max(0, referenceRect.height ?? 0)}px`,
								// maxHeight: `${Math.max(100, availableHeight)}px`,
								maxWidth: `${Math.max(200, availableWidth)}px`,
								overflow: "auto"
							});
						}
					})
				]
			});
		});

		return () => {
			cleanup();
		};
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

<div
	class="sticky top-0 left-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-lg"
	style:--tw-duration="{DURATION}ms"
>
	<!-- Mobile Nav -->
	<div
		id="nav"
		class={[
			"items-between group/nav-list fixed inset-0 -z-10 m-0 grid h-[100dvh] content-between overflow-y-auto bg-white pt-32 transition duration-500 ease-out lg:hidden ",

			// State
			"pointer-events-none  data-[show]:pointer-events-auto "
			// "pointer-events-none [clip-path:inset(0_0_100%_0)] data-[show]:pointer-events-auto data-[show]:[clip-path:inset(0)]"
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
		class="px gap- sticky top-0 left-0 z-50 container mx-auto grid grid-cols-[auto_auto] content-center items-center justify-between border-gray-100 py-2"
	>
		<!-- Mobile Nav -->

		<a href="/" class="flex items-center gap-3.5">
			<Logo class="z-50 size-7" />
			<span class="hidden font-medium lg:inline">{METADATA.companyName}</span>
		</a>

		<!-- Desktop nav -->
		<div
			class="grid grid-flow-col items-center gap-2 [--gap:--spacing(1)]
		[--inner-radius:calc(var(--radius)-var(--gap))]
		[--radius:var(--radius-xl)]"
		>
			<div class="group mr-4 hidden grid-flow-col gap-4 lg:grid">
				<!-- Transforming element -->

				<div
					class="fixed top-0 left-0 grid h-0 items-start overflow-hidden rounded-(--radius) border border-gray-100 bg-white text-gray-500 shadow-lg transition-all duration-300 ease-in-out"
					bind:this={tooltip}
					style:height={itemRects[activeDesktopNavItem]?.height || 20}
					style:width={itemRects[activeDesktopNavItem]?.height || 20}
				>
					{#if activeDesktopNavItem !== null}
						{#key activeDesktopNavItem}
							{@render dropdownContent(navigation[activeDesktopNavItem], activeDesktopNavItem)}
						{/key}
					{/if}
				</div>

				<!-- main buttons -->
				{#each navigation as item, index}
					<svelte:element
						this={item.children ? "div" : "a"}
						href={item.children ? undefined : item.href}
						bind:this={itemElements[index]}
						class="group group/item relative flex cursor-default items-center gap-1 text-sm"
						data-item
						onmouseover={() => {
							activeDesktopNavItem = index;
							isDesktopNavOpen = true;
						}}
						onmouseleave={() => {
							isDesktopNavOpen = false;
						}}
					>
						<span class="text-gray-500">{item.label}</span>
						<!-- You might want an indicator here if item.children exists -->
						{#if item.children}
							<IconArrowDown
								class="size-4 text-gray-400 opacity-0 transition group-hover/item:opacity-100 {activeDesktopNavItem ===
									index && isDesktopNavOpen
									? 'opacity-100'
									: ''}"
							/>
						{/if}
					</svelte:element>
				{/each}
			</div>
			<Button size="md" variant="secondary" href={cta.href}>{cta.label}</Button>

			<Button
				aria-label="Toggle nav"
				size="lg"
				variant="ghost"
				hideLabel
				suffix={IconMenu}
				iconOnly
				class="z-50 max-h-full lg:hidden"
				onclick={() => (isMenuOpen = !isMenuOpen)}>Menu</Button
			>
		</div>
	</div>
</div>

{#snippet dropdownContent(item: { children: any[]; image?: string }, index: number)}
	<div
		bind:contentRect={itemRects[index]}
		class="grid-center"
		in:blur={{ easing: cubicOut, duration: 200, amount: 2, delay: 200 }}
		out:blur={{ easing: cubicOut, duration: 200, amount: 2 }}
	>
		<div
			class="grid gap-(--gap) rounded-(--radius) p-(--gap)"
			class:grid-cols-[auto_1fr]={"image" in item}
		>
			{#if item.image}
				<img
					class="row-span-full aspect-[4/5] h-full max-h-80 rounded-(--inner-radius) bg-gray-200 object-cover"
					src={item.image}
					alt=""
				/>
			{/if}

			<ul class="grid max-w-[16em] gap-(--gap)">
				{#each item.children as child}
					<li class=" min-w-[10em]">
						<a
							href={child.href}
							class="group/link-item grid gap-1 rounded-(--inner-radius) p-3 text-sm text-gray-700 hover:bg-gray-100"
						>
							<span class="text-body font-medium">
								{child.label}
							</span>

							<span class=" text-gray-400">{child.description}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/snippet}

{#snippet linkOrGroup(item: (typeof navigation)[number], index: number)}
	<!-- [clip-path:inset(-100%_0_0_0)] group-[data-show]/nav-list:[clip-path:inset(0)] group-[data-show='true']/nav-list:[clip-path:polygon(0_0_0_0)] -->
	<svelte:element
		this={item?.children ? "div" : "a"}
		class={[
			"group flex flex-col gap-4 transition-all duration-300 ease-out [--offset:1] group-[[data-show]]/nav-list:![--offset:0]"
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
					class="inline-block translate-y-[calc(200%*var(--offset))] opacity-[calc(1-var(--offset))] transition duration-300 ease-out"
					>{item.label}</span
				>
			</span>
		{/if}
	</svelte:element>
{/snippet}
