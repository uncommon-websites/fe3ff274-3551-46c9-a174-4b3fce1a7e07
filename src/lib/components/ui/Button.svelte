<script lang="ts">
	// Types
	import type { Snippet } from 'svelte'
	import type { ButtonRootProps } from 'bits-ui'

	type Variant = 'primary' | 'secondary'
	type Size = 'sm' | 'md' | 'lg'

	type Props = ButtonRootProps & {
		variant?: Variant
		size?: Size
		children: Snippet
	}

	// Props
	const {
		variant = 'primary',
		size = 'md',
		children,
		class: className = '',
		...rest
	}: Props = $props()

	// Styles
	const variants: Record<Variant, string> = {
		primary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900/20',
		secondary:
			'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-900/20'
	}

	const sizes: Record<Size, string> = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	}

	const baseStyles =
		'inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-4'
</script>

<button class="{baseStyles} {variants[variant]} {sizes[size]} {className}" {...rest}>
	{@render children?.()}
</button>

<style lang="postcss">
</style>
