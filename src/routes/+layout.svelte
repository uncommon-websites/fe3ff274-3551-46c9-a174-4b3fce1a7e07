<script lang="ts">
	// Styles
	import '../app.css'

	// Components
	import Logo from '$lib/components/Logo.svelte'

	let { data, children } = $props()
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content={data.meta.description} />
	<meta name="author" content={data.meta.companyName} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={data.meta.image} />
	<meta property="og:url" content={data.meta.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={data.meta.image} />

	<title>{data.meta.title}</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family={encodeURIComponent(
			data.meta.fontFamily
		)}:ital,wght@0,400..800;1,400..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="i grid h-screen max-h-screen min-h-screen">
	<nav
		class="px sticky top-0 left-0 container mx-auto flex grid-cols-2 content-between items-center justify-between self-start bg-white/80 py-4 backdrop-blur lg:grid dark:bg-gray-950/80"
	>
		<div class="flex justify-start text-xl">
			<a href="/" class="flex items-center gap-3 text-lg font-medium"
				><Logo class="size-6" /> {data.meta.companyName}</a
			>
		</div>
		<div class="flex justify-end">
			<a
				href={data.layout['nav.cta'].url}
				class="bg-primary-700 dark:bg-primary-600 rounded-xl px-3.5 py-2 font-medium text-white"
				>{data.layout['nav.cta'].label}</a
			>
		</div>
	</nav>

	<div class="grid content-start items-start self-end">
		{@render children()}
	</div>
</div>
