import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '$lib/sanity';

const builder = imageUrlBuilder(client);

export const load: PageServerLoad = async ({ params }) => {
	if (params.slug) {
		const post;

		if (post) {
			return post;
		}
	}

	error(404, 'Not found');
};
