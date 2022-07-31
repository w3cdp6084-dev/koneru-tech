import { client } from '../src/libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
type Props = {
  blogs: Array<Blog>;
};

export default function Home({blogs}: Props) {
  return(
    <div>
    <section>
    <h1>人気の記事😽</h1>
    <div>
      {blogs.map(blogs => (
      <Link href={`/blogs/${blogs.id}`} passHref>
        <div className="dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" key={blogs.id}>
          <img
            className="w-full"
            src={blogs.eye_catch.url}
            alt="Sunset in the mountains"
          />
        </div>
      </Link>
      ))}
    </div>
  </section>
  </div>
  )
}
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blogs: data.contents,
    },
  };
};