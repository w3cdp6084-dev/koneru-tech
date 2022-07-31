import { client } from '../src/libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
import {
  Box,
} from '@chakra-ui/react';

type Props = {
  blogs: Array<Blog>;
};

export default function Home({blogs}: Props) {
  return(
    <Box>
      <section>
        <h1>人気の記事😽</h1>
        <div>
          {blogs.map(blogs => (
          <Link href={`/blogs/${blogs.id}`} passHref>
            <div key={blogs.id}>
              <img
                src={blogs.eye_catch.url}
                alt="test"
              />
            </div>
          </Link>
          ))}
        </div>
      </section>
    </Box>
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