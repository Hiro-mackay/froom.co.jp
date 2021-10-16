import React from 'react';
import Link from 'next/link';
import { getBlogLink, getDateStr } from '../../lib/blog-helpers';
import { DatabaseResponseResult } from '../../lib/notion/types/DatabaseResult';
import { NewsProperties } from '../../lib/notion/types';

type ArticleListItemProps = DatabaseResponseResult<NewsProperties> & {
  titleSize?: 'small' | 'medium' | 'large';
};

const ArticleTitleSize = {
  small: 'text-lg',
  medium: 'text-xl',
  large: 'text-2xl',
};

const ArticleTimeSize = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

export const ArticleListItem = ({ id, properties, created_time, titleSize = 'medium' }: ArticleListItemProps) => {
  return (
    <article className="font-bold ">
      <p className={`text-gray-500 ${ArticleTimeSize[titleSize]}`}>{getDateStr(properties.Date.date.start)}</p>
      <h3 className="text-gray-700">
        <Link href={getBlogLink(id)}>
          <a className={`text-gray-700 cursor-pointer leading-10 ${ArticleTitleSize[titleSize]} transition duration-150 hover:text-orange`}>{properties.Title.title[0].plain_text}</a>
        </Link>
      </h3>
    </article>
  );
};
