import React from 'react';
import Link from 'next/link';
import { getBlogLink, getDateStr, postIsPublished } from '../../lib/blog-helpers';
import blogStyles from '../../styles/blog.module.css';

export interface ArticleItem {
  Slug: string;
  Published: boolean;
  Page: string;
  Date: Date;
  preview: any[];
}

export interface ArticleProps {
  titleSize: 'small' | 'medium' | 'large';
}

const ArticleTitleSize = {
  small: 'text-lg',
  medium: 'text-xl',
  large: 'text-2xl',
};

const ArticleTimeSize = {
  small: 'text-base',
  medium: 'text-lg',
  large: 'text-xl',
};

export const ArticleListItem: React.FC<ArticleItem & ArticleProps> = ({ Page, Published, Slug, Date, titleSize = 'small' }) => {
  return (
    <article className="font-bold">
      <p className={`pb-2 text-gray-500 ${ArticleTimeSize[titleSize]}`}>{getDateStr(Date)}</p>
      <h3 className="text-gray-700">
        <Link href={getBlogLink(Slug)}>
          {/* {!Published && <span className={blogStyles.draftBadge}>Draft</span>} */}
          <a className={`text-gray-700 cursor-pointer leading-10 ${ArticleTitleSize[titleSize]} transition duration-150 hover:text-orange`}>{Page}</a>
        </Link>
      </h3>
    </article>
  );
};
