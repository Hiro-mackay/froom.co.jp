export const getArticleLink = (slug: string, parent = 'news') => {
  return `/${parent}/${slug}`;
};

export const getDateStr = (date) => {
  return new Date(date).toLocaleDateString('ja-JP');
};

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes';
};

export const normalizeSlug = (slug) => {
  if (typeof slug !== 'string') return slug;

  let startingSlash = slug.startsWith('/');
  let endingSlash = slug.endsWith('/');

  if (startingSlash) {
    slug = slug.substr(1);
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1);
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug;
};
