export async function fetchAPI(query: string, { variables, preview }: { variables?: any, preview?: boolean } = {}) {
  const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!WP_API_URL) {
    throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL environment variable is not set');
  }

  let authHeader = '';
  if (preview && process.env.WORDPRESS_AUTH_USER && process.env.WORDPRESS_AUTH_APP_PASSWORD) {
    const auth = Buffer.from(`${process.env.WORDPRESS_AUTH_USER}:${process.env.WORDPRESS_AUTH_APP_PASSWORD}`).toString('base64');
    authHeader = `Basic ${auth}`;
  }

  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (authHeader) {
    headers['Authorization'] = authHeader;
  }

  const res = await fetch(WP_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: authHeader ? { revalidate: 0 } : { revalidate: 60 }, // Disable cache if preview
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getPosts(first = 10) {
  const data = await fetchAPI(`
    query AllPosts($first: Int!) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          slug
          title
          excerpt
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories(first: 1) {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
              description
            }
          }
        }
      }
    }
  `, {
    variables: { first }
  });

  return data?.posts?.nodes || [];
}

export async function getPostBySlug(slug: string, preview: boolean = false) {
  const data = await fetchAPI(`
    query GetPostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        content
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories(first: 1) {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
            description
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
      idType: /^\d+$/.test(slug) ? 'DATABASE_ID' : 'SLUG'
    },
    preview
  });

  return data?.post;
}

export async function getPostsByCategorySlug(categorySlug: string, first = 10) {
  const data = await fetchAPI(`
    query PostsByCategory($categoryName: String!, $first: Int!) {
      posts(first: $first, where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories(first: 1) {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
              description
            }
          }
        }
      }
    }
  `, {
    variables: { categoryName: categorySlug, first }
  });

  return data?.posts?.nodes || [];
}

export async function getCategories() {
  const data = await fetchAPI(`
    query AllCategories {
      categories(where: { hideEmpty: true }) {
        nodes {
          name
          slug
          count
        }
      }
    }
  `);

  return data?.categories?.nodes || [];
}

export async function getTags() {
  const data = await fetchAPI(`
    query AllTags {
      tags(where: { hideEmpty: true }) {
        nodes {
          name
          slug
          count
        }
      }
    }
  `);

  return data?.tags?.nodes || [];
}
