import { client } from "./index";

export type IBlog = {
  _id: string;
  slug: string;
  title: string;
  image: string;
  createdAt: Date;
  summary: string;
  description: string;
}

export const fetchBlogs = async (): Promise<IBlog[]> => {
  const q = `*[_type == "Blog"]{
    _id,
    title,
    summary,
    description,
    "slug": slug.current,
    "createdAt": _createdAt,
    "image": image.asset->url
}`

  const res = await client.fetch<IBlog[]>(q);

  return res.map(blog => ({
    ...blog,
    createdAt: new Date(blog.createdAt as unknown as string)
  })) as IBlog[];
}
