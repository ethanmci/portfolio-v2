import { getProjects } from "$lib/sanity";

export async function load() {
  const data = await getProjects();

  if (data) {
    return {
      projects: data,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}

export const actions = {
  createImage: async () => {},
};
