import type { PageServerLoad } from './$types';
import { getBio } from '$lib/sanity';

export const load: PageServerLoad = async () => {
    const data = await getBio()

    if(data) return { content: data }
    else return {
		status: 500,
		body: new Error('Internal Server Error')
	};

};