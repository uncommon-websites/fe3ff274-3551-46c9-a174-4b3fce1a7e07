<script lang="ts">
	// Types
	import type { NavItem } from "$lib/navigation";

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import Logo from "../Logo.svelte";
	import ChevronDown from "~icons/lucide/chevron-down";
	import ChevronRight from "~icons/lucide/chevron-right";
	import IconMenu from "~icons/lucide/menu";
	import Menu from "~icons/lucide/menu";
	import X from "~icons/lucide/x";

	import { slide } from "svelte/transition";
	import { scrollY } from "svelte/reactivity/window";

	// Constants
	import { navigation } from "$lib/navigation";

	// State
	let isMenuOpen: boolean = $state(true);
</script>

<div class="group">
	<!-- Overlay -->
	<div
		class="pointer-events-none fixed inset-0 z-40 bg-gray-950/20 opacity-50 backdrop-blur-xs transition group-has-[[data-item]:hover]:opacity-100"
	></div>

	<div
		class="debug sticky top-0 left-0 z-50 h-16 w-full overflow-visible bg-white backdrop-blur transition-all duration-150 ease-out [clip-path:inset(0_0_0_0)] hover:[clip-path:inset(0_0_calc(100vh-var(--spacing-16))_0)] dark:bg-gray-950/80"
	>
		<div
			class="px group debug isolate container mx-auto flex h-auto items-start justify-between py-2"
		>
			<a href="/" class="flex h-12 items-center space-x-3">
				<Logo class="size-6" />
				<span class="font-medium dark:text-white">Brand</span>
			</a>
		</div>

		<nav class="flex h-12 gap-8">
			<div class="grid grid-flow-col gap-12">
				{#each navigation as navItem}
					<ul class="text-emphasis-low" data-item>
						<li>
							<a data-item-label={navItem.label} href={navItem.href} class="flex items-center">
								{navItem.label}
								{#if navItem.children?.length}
									<ChevronDown class="ml-1 size-4" />
								{/if}
							</a>

							{#if navItem.children?.length}
								<ul
									class="absolute top-full left-0 mt-2 min-w-48 rounded-md bg-white p-4 opacity-0 shadow-lg transition-opacity group-has-[[data-item]:hover]:opacity-100 dark:bg-gray-900"
								>
									{#each navItem.children as child}
										<li class="py-2">
											<a href={child.href} class="hover:text-primary flex items-center">
												{child.label}
												<ChevronRight class="ml-auto size-4" />
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					</ul>
				{/each}
			</div>
			<Button onclick={() => (isMenuOpen = !isMenuOpen)} variant="secondary">Contact Sales</Button>
		</nav>
	</div>
</div>

<!-- <Button
				onclick={() => (isMenuOpen = !isMenuOpen)}
				prefix={IconMenu}
				rounded
				iconOnly
				variant="secondary"
			/> -->
