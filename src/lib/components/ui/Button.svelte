<script lang="ts">
	// Types
	import type { Snippet } from "svelte";
	import type { ButtonRootProps } from "bits-ui";

	type Variant = "primary" | "secondary";
	type Size = "sm" | "md" | "lg";

	type Props = ButtonRootProps & {
		variant?: Variant;
		size?: Size;
		children: Snippet;
	};

	// Props
	const {
		variant = "primary",
		size = "md",
		children,
		class: classes = "",
		...rest
	}: Props = $props();

	// Styles
	const variants: Record<Variant, string> = {
		primary:
			"bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-900/20 dark:focus:ring-gray-100/20",
		secondary:
			"bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-900/20 dark:focus:ring-gray-100/20"
	};

	const sizes: Record<Size, string> = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4 py-2 text-base",
		lg: "px-6 py-3 text-lg"
	};

	const baseStyles =
		"inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-4";
</script>

<button {...rest} class={[baseStyles, variants[variant], sizes[size], classes]}>
	{@render children?.()}
</button>

<style lang="postcss">
</style>
