//import { SECRET_SANITY_KEY } from '$env/static/private';
import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "xwfm5t8y",
  	dataset: "production",
  	apiVersion: "2021-10-21",
  	useCdn: false,
})

export async function getProjects() {
	const posts = await client.fetch('*[_type == "project"] | order(date desc)')
	return posts
}

export async function getBio() {
	const bio = await client.fetch('*[_type == "textBlock" && title == "Main Page Bio"]')
	return bio
}