<script lang="ts">
	// Types
	import type { Snippet } from "svelte";
	import type { ButtonRootProps } from "bits-ui";
	import { Button } from "bits-ui";

	type Variant = "primary" | "secondary";
	type Size = "sm" | "md" | "lg";

	type Props = ButtonRootProps & {
		variant?: Variant;
		size?: Size;
		children: Snippet;
		iconOnly?: boolean;
		rounded?: boolean;
		prefix?: Snippet;
		suffix?: Snippet;
	};

	// Props
	const {
		variant = "primary",
		size = "md",
		children,
		class: classes = "",
		prefix,
		suffix,
		iconOnly = false,
		rounded = true,
		...rest
	}: Props = $props();

	// Styles
	const variants: Record<Variant, string> = {
		primary:
			"bg-primary-800 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-900/20 dark:focus:ring-gray-100/20",
		secondary:
			"bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-900/20 dark:focus:ring-gray-100/20"
	};

	const sizes: Record<Size, string> = $derived({
		sm: iconOnly ? "p-1.5 text-sm" : "px-3 py-1.5 text-sm",
		md: iconOnly ? "p-2 text-base" : "px-4.5 py-2 text-base",
		lg: iconOnly ? "p-3 text-lg" : "px-6 py-2.5 text-lg"
	});

	const baseStyles =
		"inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-4 gap-3 [touch-action:manipulation]";

	let Prefix = $derived(prefix);
	let Suffix = $derived(suffix);
</script>

<Button.Root
	{...rest}
	class={[
		baseStyles,
		variants[variant],
		iconOnly && "aspect-square",
		sizes[size],
		rounded ? "!rounded-full" : "",
		"gap-2",
		classes
	]}
>
	{#if prefix}
		<Prefix />
	{/if}
	{@render children?.()}
	{#if suffix}
		<Suffix />
	{/if}
</Button.Root>
