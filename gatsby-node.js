exports.creatPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newsPost = await graphql(`
    query {
      allNotionPageNews {
        edges {
          node {
            pageId
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    result.data.allPosts.nodes.forEach(({ node }) => {
      const path = `posts/news/${node.slug}`;
      createPage({
        path: path,
        component: require.resolve('./src/template/NewsPost/index.tsx'),
        context: {
          slug: path,
          ID: node.pageId,
        },
      });
    });
  });

  return Promise.all([newsPost]);
};
