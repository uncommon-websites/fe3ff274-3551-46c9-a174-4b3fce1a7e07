<script lang="ts">
	// Types
	import type { PageProps } from './$types'

	// Props
	const { data }: PageProps = $props()
</script>

<header class="px container mx-auto py-20">
	<h1 class="title-1">
		{data.content['hero.title']}
	</h1>

	<p class="text-emphasis-medium body-lg">
		{data.content['hero.subtitle']}
	</p>
</header>

<!-- Large image -->
<div class="px mx-auto aspect-video max-w-screen-2xl rounded-md bg-gray-100 dark:bg-gray-900">
	<img src={data.content['hero.image'].src} alt="" />
</div>
