import React, { ReactNode } from 'react';

type RenderBlockType =
  | 'page'
  | 'text'
  | 'code'
  | 'image'
  | 'header'
  | 'sub_header'
  | 'sub_sub_header'
  | 'bulleted_list'
  | 'numbered_list'
  | 'numbered_list__item'
  | 'bulleted_list__item'
  | '__meta';

type MetaType = { [key: string]: string };

const _attToClassName = {
  i: 'nso-italic',
  b: 'nso-bold',
  s: 'nso-stroke',
  c: 'nso-code',
};

const notionLanguageToHljs = {
  'Plain Text': 'plaintext',
  JavaScript: 'javascript',
  Bash: 'bash',
  JSON: 'json',
};

function renderPage(children: ReactNode) {
  return <div>{children}</div>;
}

function renderBlockText(children: ReactNode) {
  return <p className="nso-para">{children}</p>;
}

function renderBlockCode(children: ReactNode, meta: MetaType) {
  //   return <pre className="nso-pre-code" dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
  return <pre className="nso-pre-code" />;
}

function renderBlockImage(meta: MetaType) {
  return (
    <div className="nso-image">
      <img src={meta.publicImageUrl} style={{ width: `${meta.width}px` }} alt="" />
    </div>
  );
}

function renderBlockHeader(children: ReactNode, level: number) {
  switch (level) {
    case 1:
      return <p className="nso-header-1 has-text-primary has-background-white-bis subtitle is-2">{children}</p>;
    case 2:
      return <p className="nso-header-2 has-text-primary has-background-white-bis subtitle is-3">{children}</p>;
    case 3:
    default:
      return <p className="nso-header-3 has-text-primary has-background-white-bis subtitle is-5">{children}</p>;
  }
}

function renderBulletedList(children: ReactNode) {
  return (
    <div className="content">
      <ul>{children}</ul>
    </div>
  );
}

function renderNumberedList(children: ReactNode) {
  return (
    <div className="content">
      <ol>{children}</ol>
    </div>
  );
}

function renderListItem(children: ReactNode) {
  return <li>{children}</li>;
}

function renderBlock(type: RenderBlockType, meta: MetaType, children: ReactNode) {
  switch (type) {
    case 'page':
      return renderPage(children);

    case 'text':
      return renderBlockText(children);

    case 'code':
      return renderBlockCode(children, meta);

    case 'image':
      return renderBlockImage(meta);

    case 'header':
      return renderBlockHeader(children, 1);

    case 'sub_header':
      return renderBlockHeader(children, 2);

    case 'sub_sub_header':
      return renderBlockHeader(children, 3);

    case 'bulleted_list':
      return renderBulletedList(children);

    case 'numbered_list':
      return renderNumberedList(children);

    case 'numbered_list__item':
      return renderListItem(children);

    case 'bulleted_list__item':
      return renderListItem(children);

    case '__meta':
      // we don't parse this block - it contains the pahe meta information such as the slug
      return null;

    default:
      console.log('@@@ unknow type to render>renderBlock>', type);
      return null;
  }
}

function mkRenderFuncs(__notionPageNews: any) {
  return {
    wrapText: (text: string) => {
      return <React.Fragment>{text}</React.Fragment>;
    },
    renderTextAtt: (children: ReactNode, att: 'i' | 'b' | 's' | 'c') => {
      const className = _attToClassName[att];
      if (!className) {
        console.log(`@@@ no text attribute for: ${att}`);
      }
      return <span className={className || ''}>{children}</span>;
    },
    renderLink: (children: ReactNode, ref: string) => {
      return <a href={ref}>{children}</a>;
    },
    renderBlock: (type: RenderBlockType, meta: MetaType, children: ReactNode) => {
      return renderBlock(type, meta, children);
    },
  };
}

export const NotionBlockRenderer: React.FC<any> = ({ data, renderer, debug }) => {
  const { _notionPageNews } = data;
  const renderFuncs = mkRenderFuncs(_notionPageNews);
  const child = renderer.render(renderFuncs);
  return (
    <div>
      <h2>{_notionPageNews.title}</h2>
      <div>{child}</div>
      {debug && (
        <div>
          <h2>_notionPageNews:</h2>
          <pre>{JSON.stringify(_notionPageNews, null, '  ')}</pre>
        </div>
      )}
    </div>
  );
};
