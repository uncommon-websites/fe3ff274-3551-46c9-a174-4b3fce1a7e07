<script lang="ts">
	// Types
	import type { PageProps } from './$types'

	// Components
	import Testimonials from '$lib/components/Testimonials.svelte'

	// Props
	const { data }: PageProps = $props()
</script>

<header class="px container mx-auto mt-40 mb-20 grid items-end gap-x-24 text-pretty lg:grid-cols-2">
	<h1 class="title-1 lg:!mb-0">
		{data.content['hero.title']}
	</h1>

	<p class="text-emphasis-medium body-lg">
		{data.content['hero.subtitle']}
	</p>
</header>

<!-- Large image -->
<Testimonials testimonials={data.content['hero.testimonials']} />
