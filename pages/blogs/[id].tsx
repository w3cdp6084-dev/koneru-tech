import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';
import { TableOfContents } from '../../components/TableOfContent';
import { renderToc } from '../../libs/render-toc';
type Props = {
    blogs: Blog;
};

export default function Blog({ blogs }: Props) {
  const toc = renderToc(blogs.content);

  return (
    <div>
      <div>
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {blogs.title}
            </div>
          </div>

          <div className="mt-2">
            <div dangerouslySetInnerHTML={{ __html: blogs.content }} />
          </div>

          {blogs.tag && (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                #{blogs.tag}
              </div>
            </div>
          )}
          <img
            className="object-cover w-full shadow-sm h-full"
            src={blogs.eye_catch.url}
          />
          {blogs.toc_visible && (
          <TableOfContents toc={toc} />
          )}
        </div>

      </div>
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