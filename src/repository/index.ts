import {createClient} from 'next-sanity'

const dataset = "production"
const projectId = "bilcuri8";

export const client = createClient({
  dataset,
  projectId,
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})