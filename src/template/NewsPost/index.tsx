import React from 'react';
import { graphql } from 'gatsby';
import notionRendererFactory from 'gatsby-source-notionso/lib/renderer';
import { NotionLayout } from '../../components/Notion/Layout';
import { NotionBlockRenderer } from '../../components/Notion/NotionBlockRender';

const NotionNewsTemplate = ({ data, pageContext }: any) => {
  const notionRenderer = notionRendererFactory({
    notionPage: data.notionPageNews,
  });
  return (
    <NotionLayout meta>
      <NotionBlockRenderer data={data} renderer={notionRenderer} debug={false} />
    </NotionLayout>
  );
};

export const query = graphql`
  query($pageId: String!) {
    notionPageNews(pageId: { eq: $pageId }) {
      blocks {
        blockId
        blockIds
        type
        attributes {
          att
          value
        }
        properties {
          propName
          value {
            text
            atts {
              att
              value
            }
          }
        }
      }
      pageId
      slug
      title
      isDraft
      id
      indexPage
    }
  }
`;

export default NotionNewsTemplate;

// imageNodes {
//     imageUrl
//     localFile {
//       publicURL
//     }
//   }
