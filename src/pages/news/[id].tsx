import { getDateStr } from '../../lib/blog-helpers';
import { Head } from '../../components/Head';
import { MainVisual } from '../../components/MainVisual';
import { Corporate } from '../../layouts/corporate';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { getBlocks, getDatabase, getPage } from '../../lib/notion';
import { BaseBlock, databaseId, NewsResult } from '../../lib/notion/types';
import { Fragment } from 'react';
import { renderer } from '../../lib/notion/Render';
import { useRouter } from 'next/router';

type PostPath = {
  id: string;
};

type PageProps = {
  page: NewsResult;
  blocks: Array<BaseBlock>;
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult<PostPath>> => {
  const database = await getDatabase(databaseId);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext<PostPath>) => {
  const { id } = context.params;

  try {
    const page = await getPage(id);
    const blocks = await getBlocks(id);

    const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await getBlocks(block.id),
          };
        })
    );

    const blocksWithChildren = blocks.map((block) => {
      if (block.has_children && !block[block.type].children) {
        block[block.type]['children'] = childBlocks.find((x) => x.id === block.id)?.children;
      }
      return block;
    });

    return {
      props: {
        page,
        blocks: blocksWithChildren,
      },
      revalidate: 60 * 60,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const Page = ({ page, blocks }: PageProps) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  
  const pageTittle = page.properties.Title.title[0].plain_text;

  return (
    <Corporate>
      <Head titlePre={pageTittle} />

      <MainVisual title="NEWS" />
      <article className="container mx-auto py-24 px-8 lg:px-44">
        {page.properties.Date && <div className="text-xl font-bold pb-4">{getDateStr(page.properties.Date.date.start)}</div>}
        <h1 className="text-4xl tracking-wide pb-6 font-bold" style={{ lineHeight: 1.7 }}>
          {pageTittle}
        </h1>
        <hr />

        <section className="py-10 font-bold tracking-wide leading-7 text-gray-700">
          <Fragment>{renderer(blocks)}</Fragment>
        </section>
      </article>
    </Corporate>
  );
};

export default Page;
