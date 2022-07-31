import { client } from '../src/libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
import {
  Box,
} from '@chakra-ui/react';
import styles from '../styles/Home.module.scss'

type Props = {
  blogs: Array<Blog>;
  news: Array<Blog>;
  recommend: Array<Blog>;
};

export default function Home({blogs,news,recommend}: Props) {
  return(
    <Box>
      <section>
        <h2 className={styles.textH2}>人気の記事😽</h2>
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
      <section>
        <h1>新着の記事🐱</h1>
          <div>
            {news.map(news => (
            <Link href={`/news/${news.id}`} passHref>
              <div key={news.id}>
                <img
                  src={news.eye_catch.url}
                  alt="test"
                />
              </div>
            </Link>
            ))}
          </div>
      </section>
      <section>
        <h1>おすすめの記事😻</h1>
          <div>
            {recommend.map(recommend => (
            <Link href={`/recommend/${recommend.id}`} passHref>
              <div key={recommend.id}>
                <img
                  src={recommend.eye_catch.url}
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
  const blogs = await client.get({ endpoint: 'blog',queries: { limit: 4, offset: 0}});
  const news = await client.get({ endpoint: 'new',queries: { limit: 4, offset: 0} });
  const recommend = await client.get({ endpoint: 'recommend',queries: { limit: 4, offset: 0} });

  return {
    props: {
      blogs: blogs.contents,
      news: news.contents,
      recommend: recommend.contents,
    },
  };
};