import {client} from "./index";

export type IBlog = {
  _id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
}

export const fetchBlogs = async (): Promise<IBlog[]> => {
  const q = `*[_type == "Blog"]{
    _id,
    title,
    slug,
    description,
    "image": image.asset->url
  }`

  return await client.fetch<IBlog[]>(q)
}