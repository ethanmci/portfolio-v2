//import { SECRET_SANITY_KEY } from '$env/static/private';
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = createClient({
  projectId: "xwfm5t8y",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string): ImageUrlBuilder {
  return builder.image(source);
}

export async function getProjects() {
  const posts = await client.fetch('*[_type == "project"] | order(date desc)');
  return posts;
}

export async function getBio() {
  const bio = await client.fetch(
    '*[_type == "textBlock" && title == "Main Page Bio"]',
  );
  return bio;
}

export async function getProject(slug: string) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"]`,
  );
  return project;
}
