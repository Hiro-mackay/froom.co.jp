import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

export const NewsPostList: React.FC = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    console.log('Notion');
    notion.getPage('067dd719a912471ea9a3ac10710e7fdf').then((page) => {
      console.log(page);
    });
  }, []);

  return <div>POST</div>;
};
