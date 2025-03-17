<script lang="ts">
	// Types
	type NavItem = {
		label: string
		href: string
		children?: NavItem[]
	}

	import { slide } from 'svelte/transition'

	// Components
	import Button from '$lib/components/ui/Button.svelte'
	import Logo from '../Logo.svelte'
	import ChevronDown from '~icons/lucide/chevron-down'
	import ChevronRight from '~icons/lucide/chevron-right'
	import Menu from '~icons/lucide/menu'
	import X from '~icons/lucide/x'

	// State
	let isMenuOpen: boolean = $state(false)

	// Constants
	const navItems: NavItem[] = $state([
		{
			label: 'Services',
			href: '/services',
			children: [
				{ label: 'Consulting', href: '/services/consulting' },
				{ label: 'Development', href: '/services/development' },
				{ label: 'Support', href: '/services/support' }
			]
		},
		{
			label: 'Industries',
			href: '/industries',
			children: [
				{ label: 'Healthcare', href: '/industries/healthcare' },
				{ label: 'Finance', href: '/industries/finance' },
				{ label: 'Technology', href: '/industries/technology' },
				{ label: 'Education', href: '/industries/education' }
			]
		},
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	])
</script>

<nav class="w-full">
	<div class="px container mx-auto flex items-center justify-between py-4">
		<a href="/" class="flex items-center space-x-3">
			<Logo class="size-6" />
			<span class="font-medium">Brand</span>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden items-center space-x-8 md:flex">
			{#each navItems as item}
				{#if item.children}
					<div class="group relative" role="navigation">
						<div
							class="flex cursor-pointer items-center space-x-1 text-lg font-medium transition-colors duration-200 group-hover:text-purple-400"
						>
							<span>{item.label}</span>
							<ChevronDown class="size-4" />
						</div>
						<div
							class="invisible absolute z-10 mt-2 w-56 rounded-lg bg-white p-2 text-gray-800 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100"
						>
							{#each item.children as child}
								<div class="cursor-pointer rounded px-4 py-2.5 transition-colors hover:bg-gray-100">
									<a href={child.href} class="block w-full">
										{child.label}
									</a>
								</div>
							{/each}
						</div>
					</div>
				{:else}
					<a
						href={item.href}
						class="text-lg font-medium transition-colors duration-200 hover:text-purple-400"
					>
						{item.label}
					</a>
				{/if}
			{/each}

			<Button variant="secondary">Get Started</Button>
		</div>

		<!-- Mobile Navigation Toggle -->
		<div class="md:hidden">
			<button
				class="p-2 text-white"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-label="Toggle mobile menu"
			>
				{#if isMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>

		<!-- Full Screen Mobile Menu -->
		{#if isMenuOpen}
			<div
				class="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
				transition:slide={{ duration: 300 }}
			>
				<div class="container mx-auto flex items-center justify-between py-4">
					<div class="flex items-center space-x-3">
						<Logo class="size-6" />
						<span class="font-medium text-gray-800">Brand</span>
					</div>
					<button
						class="p-2 text-gray-800"
						onclick={() => (isMenuOpen = false)}
						aria-label="Close menu"
					>
						<X class="h-6 w-6" />
					</button>
				</div>

				<div class="container mx-auto flex-1 overflow-y-auto py-8">
					<nav class="flex flex-col space-y-4">
						{#each navItems as item, i}
							{#if item.children}
								<div class="relative">
									<details class="group">
										<summary
											class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-lg font-medium text-gray-800"
										>
											<span>{item.label}</span>
											<ChevronDown class="size-5 transition-transform group-open:rotate-180" />
										</summary>
										<div class="mt-2 ml-4 space-y-1 border-l border-gray-200 pl-2">
											{#each item.children as child}
												<a
													href={child.href}
													class="block w-full rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
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
									class="block w-full rounded-lg bg-gray-100 px-4 py-3 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-200"
									onclick={() => (isMenuOpen = false)}
								>
									{item.label}
								</a>
							{/if}
						{/each}
					</nav>
				</div>

				<div class="container mx-auto py-6">
					<Button variant="secondary" class="w-full" onclick={() => (isMenuOpen = false)}>
						Get Started
					</Button>
				</div>
			</div>
		{/if}
	</div>
</nav>
