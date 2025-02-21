<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<nav class="px container mx-auto grid-cols-2 content-between justify-between py-4 lg:grid">
	<div class="flex justify-start text-xl">
		<a href="/">Home</a>
	</div>
	<div class="flex justify-end">
		<a
			href="/"
			class="bg-primary-600 dark:bg-primary-600 rounded-xl px-4 py-2.5 font-medium text-white"
			>Get started</a
		>
	</div>
</nav>

<div class="px container mx-auto mt-20">
	{@render children()}
</div>
