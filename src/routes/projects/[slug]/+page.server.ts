import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getProject } from '$lib/sanity';
import { urlFor } from '$lib/sanity';

export const load: PageServerLoad = async ({ params }) => {
	const project = await getProject(params.slug)
	
	if (project && project.length === 1) {
		return {
			project: {
				title: project[0].title,
				tags: project[0].tags,
				date: project[0].date,
				content: project[0].content,
				cover: urlFor(project[0].cover.asset).url(),
				links: project[0]
			}
		};
	} else if (project.length > 1) { return error(400, 'Invalid request') }

	error(404, 'Not found');
};
