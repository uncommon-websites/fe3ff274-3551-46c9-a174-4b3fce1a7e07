<script lang="ts">
	// Types
	type NavItem = {
		label: string;
		href: string;
		children?: NavItem[];
	};

	import { slide } from "svelte/transition";

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import Logo from "../Logo.svelte";
	import ChevronDown from "~icons/lucide/chevron-down";
	import ChevronRight from "~icons/lucide/chevron-right";
	import Menu from "~icons/lucide/menu";
	import X from "~icons/lucide/x";
	import { scrollY } from "svelte/reactivity/window";
	import { navigation } from "$lib/navigation";

	// State
	let isMenuOpen: boolean = $state(false);

	// Constants
</script>

<nav
	class="sticky top-0 left-0 z-40 w-full bg-white/80 backdrop-blur transition duration-150 ease-out dark:bg-gray-950/80"
>
	<!-- class:translate-y-4={!scrollY.current || scrollY.current === 0} -->
	<div class="px container mx-auto flex items-center justify-between py-2.5">
		<a href="/" class="flex items-center space-x-3">
			<Logo class="size-6" />
			<span class="font-medium dark:text-white">Brand</span>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden items-center space-x-8 md:flex">
			{#each navigation as item}
				<svelte:element
					this={item.children ? "div" : "a"}
					class="group text-emphasis-dim hover:text-emphasis-medium select relative transition-colors duration-300 ease-out dark:text-gray-300 dark:hover:text-white"
					role="navigation"
					href={item.href}
				>
					{#if item.children}
						<div class="flex items-center gap-1.5">
							<span>{item.label}</span>
							<ChevronDown class="size-4" />
						</div>
						<div
							class="invisible absolute z-10 mt-1.5 w-56 rounded-(--radius) bg-white p-(--gap) text-gray-800 opacity-0 shadow-lg transition-all [--gap:--spacing(1)] [--radius:var(--radius-xl)]

							group-hover:visible
							group-hover:opacity-100

										dark:bg-gray-800 dark:text-gray-200"
						>
							{#each item.children as child}
								<div
									class="cursor-pointer rounded-(--inner-radius) px-4 py-2.5 transition-colors [--inner-radius:calc(var(--radius)-var(--gap))] hover:bg-gray-100/50 active:bg-gray-100 dark:hover:bg-gray-700/50 dark:active:bg-gray-700"
								>
									<a href={child.href} class="block w-full">
										{child.label}
									</a>
								</div>
							{/each}
						</div>
					{:else}
						<span>{item.label}</span>
					{/if}
				</svelte:element>
			{/each}

			<Button variant="secondary">Get Started</Button>
		</div>

		<!-- Mobile Navigation Toggle -->
		<div class="md:hidden">
			<Button
				variant="secondary"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-label="Toggle mobile menu"
			>
				{#if isMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</Button>
		</div>

		<!-- Full Screen Mobile Menu -->
		<!-- {#if isMenuOpen} -->
		<div
			class="absolute inset-0 right-0 -bottom-full left-0 z-30 flex h-[100dvh] max-h-[100dvh] flex-col overflow-y-auto bg-white transition duration-300 ease-out md:hidden dark:bg-gray-900"
			style:transform={isMenuOpen ? "translateX(0)" : "translateY(-100%)"}
		>
			<div class="px container mx-auto flex items-center justify-between py-4">
				<div class="flex items-center space-x-3">
					<Logo class="size-6" />
					<span class="font-medium text-gray-800 dark:text-white">Brand</span>
				</div>
				<button
					class="p-2 text-gray-800 dark:text-gray-200"
					onclick={() => (isMenuOpen = false)}
					aria-label="Close menu"
				>
					<X class="h-6 w-6" />
				</button>
			</div>

			<div class="px container mx-auto max-h-full flex-1 overflow-y-auto py-8">
				<nav class="flex flex-col space-y-4">
					{#each navigation as item}
						{#if item.children}
							<div class="relative">
								<details class="group">
									<summary
										class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-lg font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
									>
										<span>{item.label}</span>
										<ChevronDown class="size-5 transition-transform group-open:rotate-180" />
									</summary>
									<div
										class="mt-2 ml-4 space-y-1 border-l border-gray-200 pl-2 dark:border-gray-700"
									>
										{#each item.children as child}
											<a
												href={child.href}
												class="block w-full rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
												onclick={() => (isMenuOpen = false)}
											>
												{child.label}
											</a>
										{/each}
									</div>
								</details>
							</div>
						{:else}
							<a
								href={item.href}
								class="block w-full rounded-lg bg-gray-100 px-4 py-3 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
								onclick={() => (isMenuOpen = false)}
							>
								{item.label}
							</a>
						{/if}
					{/each}
				</nav>
			</div>

			<div class="px container mx-auto py-6">
				<Button variant="primary" class="w-full" onclick={() => (isMenuOpen = false)}>
					Get Started
				</Button>
			</div>
		</div>
		<!-- {/if} -->
	</div>
</nav>
