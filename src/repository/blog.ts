import {client} from "./index";

export type IBlog = {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const fetchBlogs = async (): Promise<Blog[]> => {
  const q = `*[_type == "Blog"]{
    _id,
    title,
    slug,
    description,
    "image": image.asset->url
  }`

  return await client.fetch<Blog[]>(q)
}