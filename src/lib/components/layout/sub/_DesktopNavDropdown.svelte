<script lang="ts">
	// Components
	import { NavigationMenu } from "bits-ui";
	import IconChevronDown from "~icons/lucide/chevron-down";

	// Props
	const { item } = $props();

	// State
	let activeImageIndex = $state(0);
	let hasImages = $derived(item.children.some((child) => child.image));

	function setActiveImageIndex(index: number) {
		activeImageIndex = index;
	}
</script>

<NavigationMenu.Trigger class="group/item inline-flex h-full items-center gap-1">
	{item.label}
	<IconChevronDown
		class="relative top-[1px] size-3 opacity-80 transition duration-200 ease-out group-hover/item:opacity-100 group-data-[state=open]:rotate-180 "
		aria-hidden="true"
	/>
</NavigationMenu.Trigger>

<NavigationMenu.Content
	class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute top-0 left-0 w-full data-[state=closed]:hidden sm:w-auto"
	forceMount
>
	<div
		class={[
			"grid gap-(--gap) p-(--gap)"
			// hasImages && "aspect-[2/1] min-w-[500px] grid-cols-2 items-start"
		]}
	>
		<!-- {#if hasImages}
			<div class="grid">
				{#each item.children as child, index}
					<img
						src={child.image}
						alt=""
						class="grid-center aspect-square h-full max-w-full object-cover transition duration-300 ease-out"
						class:opacity-100={index === activeImageIndex}
						class:opacity-0={index !== activeImageIndex}
					/>
				{/each}
			</div>
		{/if} -->
		<ul class="grid w-full list-none content-start items-start">
			{#each item.children as child, index}
				<li
					class="w-full"
					onmouseover={() => setActiveImageIndex(index)}
					onfocus={() => setActiveImageIndex(index)}
				>
					<NavigationMenu.Link
						href={child.href}
						class="link hover:bg-muted  min-w-40 rounded-(--inner-radius) px-3.5 py-3 leading-none no-underline outline-hidden transition-colors select-none"
					>
						{child.label}
					</NavigationMenu.Link>
				</li>
			{/each}
		</ul>
	</div>
</NavigationMenu.Content>
