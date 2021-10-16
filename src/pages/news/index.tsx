import { Head } from '../../components/Head';
import { ArticleListItem } from '../../components/ArticleListItem';
import { MainVisual } from '../../components/MainVisual';
import { Corporate } from '../../layouts/corporate';
import { databaseId, NewsProperties, NewsResults } from '../../lib/notion/types';
import { GetStaticPropsResult } from 'next';
import { getDatabase } from '../../lib/notion';

type PageProps = { posts: NewsResults };

export const getStaticProps = async (): Promise<GetStaticPropsResult<PageProps>> => {
  const posts = await getDatabase<NewsProperties>(databaseId);

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60,
  };
};

const Page = ({ posts }: PageProps) => {
  return (
    <Corporate>
      <Head titlePre="News" />
      <MainVisual title="NEWS" />
      <section className="container mx-auto py-24 px-8 md:px-44">
        <div className="grid grid-cols-1 divide-y-2 divide-gray-300">
          {posts.length === 0 && <p className="py-8">ニュースがまだありません</p>}
          {posts.map((post) => {
            return (
              post && (
                <div className="px-3 py-8 border-b border-gray-300" key={post.id}>
                  <ArticleListItem {...post}></ArticleListItem>
                </div>
              )
            );
          })}
        </div>
      </section>
    </Corporate>
  );
};
export default Page;
