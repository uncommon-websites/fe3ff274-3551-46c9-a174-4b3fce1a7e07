<script>
	let { title = "", description = "" } = $props();
</script>

<article
	class="hover:bg-primary-50 hover:text-primary-900 grid content-between gap-16 rounded-(--radius) bg-gray-50 p-4 px-5 text-pretty transition duration-300 ease-out lg:p-5 lg:px-6 dark:bg-gray-900"
>
	<h3 class="text-title3 hover:text-primary-900 mb-2">
		{title}
	</h3>
	<p class="text-body opacity-60">{description}</p>
</article>
