import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	// Only allow access on localhost
	if (url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
		error(404, 'Not Found');
	}

	return {};
};