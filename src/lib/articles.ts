import { getPosts, getPostBySlug, getPostsByCategorySlug } from './wordpress';
import { WPPost } from '../types/wordpress';

export interface Article {
 slug: string;
 title: string;
 excerpt: string;
 content: string; // HTML or Markdown content
 category: string;
 categorySlug: string;
 imageUrl: string;
 location: string;
 features: string[];
 publishedAt: string;
 author?: {
 name: string;
 avatarUrl?: string;
 description?: string;
 };
}

// Convert WP Post to our Article format for the UI
function mapWPPostToArticle(post: WPPost): Article {
 let categoryName ="未分類";
 let categorySlug ="uncategorized";

 if (post.categories?.nodes && post.categories.nodes.length > 0) {
 categoryName = post.categories.nodes[0].name;
 categorySlug = post.categories.nodes[0].slug;
 }

 const tags = post.tags?.nodes?.map(tag => tag.name) || [];

 return {
 slug: post.slug,
 title: post.title,
 excerpt: post.excerpt?.replace(/<[^>]*>?/gm, ''), // Strip HTML tags for excerpt if needed, or leave if UI handles it
 content: post.content,
 category: categoryName,
 categorySlug: categorySlug,
 imageUrl: post.featuredImage?.node?.sourceUrl ||"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", // Fallback image
 location: tags.length > 0 ? tags[0] :"おすすめ", // Mock location mapping using the first tag
 features: tags.slice(1, 4), // Mock features mapping using the rest of tags
 publishedAt: new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-'),
 author: post.author ? {
 name: post.author.node.name,
 avatarUrl: post.author.node.avatar?.url,
 description: post.author.node.description
 } : undefined
 };
}

// Ensure backward compatibility or initial fallback during setup if API fails
export const fallbackArticles: Article[] = [
 {
 title:"【新宿】個室確約！接待・会食に使える「絶対に静かな」和食店5選",
 excerpt:"新宿の喧騒を忘れる完全個室だけを厳選。隣の席の声が聞こえない防音レベルを独自調査しました。",
 slug:"shinjuku-private-room-washoku",
 category:"エリアガイド",
 categorySlug:"area",
 imageUrl:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
 location:"新宿エリア",
 features: ["個室","静音","和食"],
 publishedAt:"2024-02-10",
 content:"<h2>新宿での会食、最大の敵は「騒音」である</h2>..."
 }
];

// Re-export the raw articles array as a promise for components that might still use it directly
export const articlesPromise = async () => {
 try {
 const wpPosts = await getPosts(10);
 return wpPosts.map(mapWPPostToArticle);
 } catch (e) {
 console.error("Failed fetching articles", e);
 return fallbackArticles; // Return fallback on error to prevent breaking the build if WP is down
 }
}

export async function fetchArticleBySlug(slug: string, preview: boolean = false): Promise<Article | undefined> {
 try {
 const wpPost = await getPostBySlug(slug, preview);
 if (wpPost) {
 return mapWPPostToArticle(wpPost);
 }
 } catch (e) {
 console.error(`Failed fetching article ${slug}`, e);
 }
 return fallbackArticles.find((article) => article.slug === slug);
}

export async function fetchArticlesByCategorySlug(categorySlug: string): Promise<Article[]> {
 try {
 const wpPosts = await getPostsByCategorySlug(categorySlug, 20);
 return wpPosts.map(mapWPPostToArticle);
 } catch (e) {
 console.error(`Failed fetching articles by category ${categorySlug}`, e);
 return [];
 }
}

export function getAllCategorySlugs() {
 // This ideally should be fetched from WP as well, but for now we can infer from fallbacks or manual list
 return ["area","kaishoku-manner","special","tools","scene","trouble","uncategorized"];
}
