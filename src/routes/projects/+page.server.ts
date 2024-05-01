import { getProjects, client } from '$lib/sanity';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export async function load() {
	const data = await getProjects();

  console.log(data)
	if (data) {
    data.forEach(element => {
      element.cover.asset.
    });
		return {
			projects: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}