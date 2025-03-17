<script lang="ts">
	// Types
	import { navigation } from '$lib/navigation'

	// Components
	import Logo from '$lib/components/Logo.svelte'
	import { METADATA } from '$lib/content'
</script>

<footer class="relative bg-gray-50" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="px container mx-auto py-12">
		<div class="flex flex-col space-y-12">
			<div class="flex items-center">
				<Logo class="size-7" />
				<span class="ml-4 font-medium text-gray-800">{METADATA.companyName}</span>
			</div>

			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				{#snippet footerLinks(title: string, items: { href: string; name: string }[])}
					<div class="space-y-4">
						<h3 class="text-callout text-gray-700">{title}</h3>
						<ul role="list" class="space-y-2">
							{#each items as item}
								<li>
									<a
										href={item.href}
										class="text-caption text-gray-800 transition hover:text-gray-900"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/snippet}

				{#each Object.values(navigation) as item}
					{@render footerLinks(item.name, item.children)}
				{/each}
			</div>
		</div>
	</div>
	<div class="border-t border-gray-100 py-6">
		<div
			class="px text-footnote container mx-auto flex flex-wrap items-center justify-between gap-4 text-gray-600"
		>
			<p>&copy; {new Date().getFullYear()} {METADATA.companyName}</p>

			<div class="flex flex-wrap gap-6">
				<a href="/legal" class="transition hover:text-gray-900">Legal</a>
				<a href="/privacy" class="transition hover:text-gray-900">Privacy</a>
			</div>
		</div>
	</div>
</footer>
