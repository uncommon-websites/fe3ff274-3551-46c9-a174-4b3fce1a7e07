<script lang="ts">
	// Types
	import type { HTMLAttributes } from "svelte/elements";
	import { navigation } from "$lib/navigation";

	// Components
	import Logo from "$lib/components/Logo.svelte";

	// Props
	const props: HTMLAttributes<HTMLElement> = $props();
</script>

<footer class="relative bg-gray-600 text-white" aria-labelledby="footer-heading" {...props}>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="container mx-auto px-4 pt-16 pb-12 lg:px-8">
		<div class="grid grid-cols-1 gap-y-10 lg:grid-cols-5">
			<Logo class="size-7 text-gray-100" />
			<!-- Navigation sections -->
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-4">
				{#each navigation as section}
					<div class="text-caption">
						<h3 class="text-callout">{section.label}</h3>
						{#if section.children}
							<ul class="mt-4 space-y-3">
								{#each section.children as item}
									<li>
										<a
											href={item.href}
											class="opacity-80 transition duration-300 ease-out hover:opacity-100"
											target={item?.target || undefined}
										>
											{item.label}
										</a>
									</li>
								{/each}
							</ul>
						{:else}
							<a
								href={section.href}
								class="opacity-80 transition duration-300 ease-out hover:opacity-100"
								target={section?.target || undefined}
							>
								{section.label}
							</a>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Footer bottom section -->
		<div class="text-caption mt-16 border-t border-gray-500 pt-8 dark:border-gray-800">
			<div class="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
				<div class="flex space-x-6">
					<a href="/" class="opacity-80 transition duration-300 ease-out hover:opacity-100">Terms</a
					>
					<a href="/" class="opacity-80 transition duration-300 ease-out hover:opacity-100"
						>Privacy Policy</a
					>
				</div>
				<!-- <div class="flex items-center space-x-4">
					<a href="/" class="opacity-80 hover:opacity-100 transition ease-out duration-300" aria-label="LinkedIn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
					<a href="/" class="opacity-80 hover:opacity-100 transition ease-out duration-300" aria-label="YouTube">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
							/>
						</svg>
					</a>
				</div> -->
			</div>
		</div>
	</div>
</footer>
