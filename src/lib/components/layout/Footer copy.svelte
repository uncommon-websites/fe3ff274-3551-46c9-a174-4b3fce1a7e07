<script lang="ts">
	// Types
	import type { HTMLAttributes } from "svelte/elements";
	import { navigation } from "$lib/navigation";

	// Components
	import Logo from "$lib/components/Logo.svelte";
	import { METADATA } from "$lib/content";

	// Props
	const props: HTMLAttributes<HTMLElement> = $props();
</script>

<footer
	class="sticky inset-x-0 bottom-0 -z-10 grid min-h-[50dvh] overflow-hidden bg-white dark:bg-gray-950 dark:text-white"
	aria-labelledby="footer-heading"
	{...props}
>
	<div class="items-between relative z-10 grid h-full grid-cols-2 content-between gap-32">
		<!-- Navigation sections with editorial styling -->
		<div
			class="section-px section-py-sm container mx-auto grid grid-cols-2 content-start items-start gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4"
		>
			{#each navigation.sort((a, b) => (b?.children?.length || 0) - (a?.children?.length || 0)) as section}
				<div class="inline-block text-gray-400 transition-all duration-300 ease-out">
					<h3 class="text-caption text-xs" class:hidden={!section?.children}>
						{section.label}
					</h3>
					{#if section.children}
						<ul class="mt-6 flex flex-col gap-1.5">
							{#each section.children as item}
								<li>
									<a href={item.href} class="text-xl" target={item?.target || undefined}>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<a href={section.href} class="" target={section?.target || undefined}>
							{section.label}
						</a>
					{/if}
				</div>
			{/each}
		</div>

		<div class="grid">
			<div
				class="section-px text-display col-span-full container mx-auto mb-8 grid grid-cols-1 content-center items-center md:grid-cols-2"
			>
				<div>{METADATA.companyName}</div>
				<div class="flex justify-end">
					<Logo class="size-16" />
				</div>
			</div>

			<!-- Footer bottom section -->
			<div class="border-t border-white/10 py-6 dark:border-white/20">
				<div class="section-px container mx-auto flex flex-col items-start justify-between">
					<div
						class="text-callout flex gap-6 text-gray-500 transition-all duration-300 ease-out *:transition *:hover:text-gray-300"
					>
						<a href="/terms">Terms</a>
						<a href="/privacy" class="hover:text-white">Privacy</a>
					</div>
					<div class="flex items-center space-x-8">
						<!-- Social icons go here -->
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	@reference '../../../app.css';

	a {
		@apply inline-block text-gray-700 transition-all duration-300 ease-out hover:text-white;
	}
</style>
