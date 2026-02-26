import { fetchArticlesByCategorySlug, getAllCategorySlugs, Article } from '@/lib/articles';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article/ArticleCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    const categories = getAllCategorySlugs();
    return categories.map((slug) => ({
        slug: slug,
    }));
}

export default async function CategoryPage({ params }: { params: Params }) {
    const { slug } = await params;
    const articles = await fetchArticlesByCategorySlug(slug);

    if (!articles || articles.length === 0) {
        notFound();
    }

    const categoryName = articles[0].category;

    return (
        <div className="min-h-screen bg-navy-50 py-12 dark:bg-navy-900">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm text-navy-600 hover:text-navy-900 dark:text-navy-400 dark:hover:text-white mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        トップに戻る
                    </Link>
                    <h1 className="text-3xl font-bold text-navy-950 dark:text-white">
                        {categoryName}
                        <span className="ml-4 text-sm font-normal text-navy-600 dark:text-navy-400">の記事一覧</span>
                    </h1>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {articles.map((article: Article) => (
                        <ArticleCard key={article.slug} {...article} />
                    ))}
                </div>
            </div>
        </div>
    );
}
