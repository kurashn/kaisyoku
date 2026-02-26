import { MetadataRoute } from 'next'
import { articlesPromise, Article } from '@/lib/articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaisyoku.com'
    const articles = await articlesPromise()

    const articleEntries: MetadataRoute.Sitemap = articles.map((article: Article) => ({
        url: `${siteUrl}/articles/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${siteUrl}/articles`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${siteUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...articleEntries,
    ]
}
