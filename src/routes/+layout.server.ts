// Types
import type { PageServerLoad } from './$types'

// Content
import { CONTENT, METADATA } from '$lib/content'

export const load: PageServerLoad = async () => {
	return {
		content: CONTENT['/'],
		meta: {
			...METADATA
		}
	}
}
