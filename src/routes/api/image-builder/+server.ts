import { error } from "@sveltejs/kit";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "$lib/sanity";
import type { RequestHandler } from "./$types";

const builder = imageUrlBuilder(client);

export const GET: RequestHandler = ({ url }) => {
  const imgUrl: string = url.searchParams.get("imgUrl")?.toString();
  return builder.image(imgUrl);
};
