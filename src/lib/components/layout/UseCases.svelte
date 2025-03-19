<script lang="ts">
	// Types
	type UseCase = {
		title: string
		description: string
		image: string
		link?: {
			href: string
			label: string
		}
	}
	// Components
	import Button from '$lib/components/ui/Button.svelte'

	// Utils

	// Props
	const { title, subtitle, useCases }: { title: string; subtitle: string; useCases: UseCase[] } =
		$props()
</script>

<section class="">
	<div class="section-px section-py container mx-auto grid gap-16">
		<div class="mx-auto grid gap-3 text-center">
			<h2 class="text-title1">{title}</h2>
			<p class="text-headline text-emphasis-medium">{subtitle}</p>
		</div>

		<div class="grid grid-cols-2 gap-16">
			<!-- Left column: Use cases list -->
			<div class="grid gap-16">
				{#each useCases as useCase}
					<article>
						<h3 class="text-headline mb-2">{useCase.title}</h3>
						<p class="text-body text-emphasis-medium">{useCase.description}</p>
						{#if useCase.link}
							<Button size="sm" href={useCase.link.href} variant="secondary" class="mt-4">
								{useCase.link.label}
							</Button>
						{/if}
					</article>
				{/each}
			</div>

			<!-- Right column: Featured image -->
			<div class="rounded-2xl bg-gray-50">
				{#if useCases[0]?.image}
					<div>
						<img src={useCases[0].image} alt="Featured use case" loading="lazy" />
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
