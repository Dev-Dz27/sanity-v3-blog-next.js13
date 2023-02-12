import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';

interface Props {
    params: {
       slug: string;
    };
 }
export async function generateStaticParams() {
    const query = groq`*[_type == 'post']
    {
       slug
    }
    `;
 
    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);
 
    return slugRoutes.map((slug) => ({
       slug,
    }));
 }

export default async function  Head({ params: { slug } }: Props) {
    const query = groq`
   *[_type=='post' && slug.current == $slug][0]
   {
    title
   }
   `;
      const post: Post = await client.fetch(query, { slug });

             const title = post.title;

    return (
      <>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  }
  