import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
import Moment from 'react-moment'
import {
  Box,
} from '@chakra-ui/react';
import styles from '../styles/components/Slide.module.scss'

type Props = {
  blogs: Array<Blog>;
  news: Array<Blog>;
  recommend: Array<Blog>;
};

export default function Home({blogs,news,recommend}: Props) {
  return(
    <Box className={styles.wrap}>
      <div className={styles.slideWrap}>
        <section>
          <h2 className={styles.textH2}>人気の記事😽</h2>
          <div className={styles.cardWrap}>
            {blogs.map(blogs => (
            <Link href={`/blogs/${blogs.id}`} passHref>
              <div key={blogs.id} >
                <img
                  src={blogs.eye_catch.url}
                  alt="test"
                  className={styles.slide}
                />
                <div>
                  <p className={styles.Title}>{blogs.title}</p>
                </div>
                <Moment format="YYYY/MM/DD" className={styles.date}>
                  {blogs.publishedAt}
                </Moment>
              </div>
            </Link>
            ))}
          </div>
        </section>
      </div>
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