import Link from 'next/link';
import { Head } from '../../components/Head';
import { ArticleListItem } from '../../components/ArticleListItem';
import blogStyles from '../../styles/blog.module.css';
import sharedStyles from '../../styles/shared.module.css';
import { postIsPublished } from '../../lib/blog-helpers';
import getNotionUsers from '../../lib/notion/getNotionUsers';
import getBlogIndex from '../../lib/notion/getBlogIndex';
import { MainVisual } from '../../components/MainVisual';

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex();

  const authorsToGet: Set<string> = new Set();
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug];
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null;
      }
      post.Authors = post.Authors || [];
      for (const author of post.Authors) {
        authorsToGet.add(author);
      }
      return post;
    })
    .filter(Boolean);

  const { users } = await getNotionUsers([...authorsToGet]);

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name);
  });

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  };
}

export default ({ posts = [], preview }) => {
  return (
    <>
      <Head titlePre="News" />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            Viewing in preview mode
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <MainVisual title="NEWS" />
      <section className="container mx-auto py-24 px-8 md:px-44">
        <div className="grid grid-cols-1 divide-y-2 divide-gray-300">
          {posts.length === 0 && <p className={blogStyles.noPosts}>ニュースがまだありません</p>}
          {posts.map((post) => (
            <div className="px-3 py-8" key={post.Slug}>
              <ArticleListItem titleSize="large" {...post} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
