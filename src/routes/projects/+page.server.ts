import { getProjects, client } from '$lib/sanity';

export async function load() {
	const data = await getProjects();

  	//console.log(data)
	if (data) {
		return {
			projects: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}

export const actions = {
	createImage: async () => {

	}
}