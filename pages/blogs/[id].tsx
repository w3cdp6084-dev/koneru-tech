import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';
import { TableOfContents } from '../../components/TableOfContent';
import { renderToc } from '../../libs/render-toc';
import Moment from 'react-moment'
import Link from 'next/link';
import {
  Flex,
} from '@chakra-ui/react';
import styles from '../../styles/components/Layout.module.scss'
type Props = {
    blogs: Blog;
};

export default function Blog({ blogs }: Props) {
  const toc = renderToc(blogs.content);

  return (
    <div className={styles.wrap}>
      <Flex className={styles.inner}>
        <div className={styles.contentLeft}>
            <div className={styles.blogTitle}>
              {blogs.title}
            </div>
            <Moment format="YYYY/MM/DD" className={styles.date}>
              {blogs.publishedAt}
            </Moment>
            <Link href="https://github.com/w3cdp6084-dev">
              <a className={styles.tagLink}>
                <div className={styles.tagWrap}>
                  <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                    <img
                    className={styles.icon}
                    src={blogs.tag_icon.url}
                    />
                  </div>
                  {blogs.tag && (
                    <div className="flex items-center justify-start mt-4 mb-4">
                      <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                        {blogs.tag}
                      </div>
                    </div>
                  )}
                </div>
              </a>
            </Link>
          <div className="mt-2">
            <div dangerouslySetInnerHTML={{ __html: blogs.content }} />
          </div>

          <img
            className="object-cover w-full shadow-sm h-full"
            src={blogs.eye_catch.url}
          />
        </div>
        <div className={styles.toc}>
        {blogs.toc_visible && (
          <TableOfContents toc={toc} />
          )}
        </div>
      </Flex>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blog',
    contentId: idExceptArray,
  });

  return {
    props: {
        blogs: data,
    },
  };
};