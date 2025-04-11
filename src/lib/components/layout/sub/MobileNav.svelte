<script lang="ts">
	// Types

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import IconMenu from "~icons/lucide/menu";

	// Utils
	import { cta, navigation } from "$lib/navigation";

	// Props
	const { items = [] }: { items: typeof navigation } = $props();

	// State
	let isMenuOpen = $state(false);
</script>

<div class="flex items-center justify-end gap-2">
	<Button size="sm" variant="secondary" href={cta.href}>{cta.label}</Button>

	<Button
		aria-label="Toggle nav"
		size="lg"
		variant="ghost"
		hideLabel
		suffix={IconMenu}
		iconOnly
		onclick={() => (isMenuOpen = !isMenuOpen)}>Menu</Button
	>
</div>
