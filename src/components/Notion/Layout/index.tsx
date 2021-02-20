import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface NotionQuery {
  site: {
    buildTime: string;
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

export const NotionLayout: React.FC<{ meta: any }> = ({ meta, children }) => {
  const NotionData: NotionQuery = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD HH:mm")
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = NotionData.site.siteMetadata;
  const { buildTime } = NotionData.site;
  return (
    <>
      <section className="hero is-light is-size-6">
        <a className="hero-body" href="/">
          <div className="container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{description}</h2>
          </div>
        </a>
      </section>
      <section className="section  is-size-6">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">{children}</div>
            <div className="column"></div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-right has-text-weight-light has-text-grey-light">
          <p>Build: {buildTime}</p>
        </div>
      </footer>
    </>
  );
};
