import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getProject } from '$lib/sanity';
import { urlFor } from '$lib/sanity';

function carouselConverter(arr: [{ asset: string }]) {
	if(arr == null) return []
	return arr.map((e) => urlFor(e.asset).url())
}

export const load: PageServerLoad = async ({ params }) => {
	const project = await getProject(params.slug)
	console.log(project[0])
	if (project && project.length === 1) {
		return {
			project: {
				title: project[0].title,
				tags: project[0].tags,
				date: project[0].date,
				content: project[0].content,
				cover: urlFor(project[0].cover.asset).url(),
				// getting urls for each carousel image
				carousel: carouselConverter(project[0].carousel),
				links: project[0].links
			}
		};
	} else if (project.length > 1) { return error(400, 'Invalid request') }

	error(404, 'Not found');
};
