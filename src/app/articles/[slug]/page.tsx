import { fetchArticleBySlug, articlesPromise, Article } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { draftMode } from 'next/headers';
import { Button } from '@/components/ui/Button';
import { MapPin, Calendar, ArrowLeft, Clock, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { RankingSidebar, CategorySidebar } from '@/components/layout/Sidebar';
import { Suspense } from 'react';

// Correct type definition for Next.js 15
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    const articles = await articlesPromise();
    return articles.map((article: Article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Params }) {
    const { slug } = await params;
    const draft = await draftMode();
    const isPreview = draft.isEnabled;

    const article = await fetchArticleBySlug(slug, isPreview);

    if (!article) {
        notFound();
    }

    return (
        <div className="bg-gray-50 dark:bg-navy-950 min-h-screen font-sans">
            {/* Preview Banner */}
            {isPreview && (
                <div className="fixed bottom-4 right-4 bg-navy-900 border border-gold-500 text-white p-4 rounded-xl z-50 shadow-2xl animate-fade-in-up">
                    <p className="font-bold text-sm mb-1 text-gold-400">プレビューモード表示中</p>
                    <p className="text-xs text-navy-300 mb-3">WordPressの未公開・下書き状態を確認しています。</p>
                    <a href="/api/disable-draft" className="inline-block bg-white text-navy-900 text-xs font-bold px-4 py-2 rounded-full hover:bg-gold-50 transition-colors shadow-sm">プレビューを解除</a>
                </div>
            )}

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100 py-3 dark:bg-navy-900 dark:border-navy-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-xs text-navy-500 dark:text-navy-300">
                        <Link href="/" className="hover:text-main transition-colors">TOP</Link>
                        <span className="mx-2 text-gray-300">/</span>
                        <Link href="#" className="hover:text-main transition-colors">記事一覧</Link>
                        <span className="mx-2 text-gray-300">/</span>
                        <span className="text-navy-800 dark:text-white truncate max-w-[200px] sm:max-w-none">{article.title}</span>
                    </div>
                </div>
            </div>

            <article>
                {/* Hero Section */}
                <div className="relative h-[50vh] min-h-[400px] w-full bg-navy-900">
                    <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
                        <div className="container mx-auto max-w-6xl">
                            <div className="mb-6 flex flex-wrap gap-3 animate-fade-in-up">
                                <span className="inline-flex items-center rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-gold-500/20">
                                    {article.category}
                                </span>
                                {article.features.map((feature) => (
                                    <span key={feature} className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-md border border-white/20">
                                        <CheckCircle className="w-3 h-3 mr-1.5 text-main-light" />
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <h1 className="animate-fade-in-up delay-100 mb-6 text-3xl font-serif font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-sm">
                                {article.title}
                            </h1>

                            <div className="animate-fade-in-up delay-200 flex flex-wrap items-center gap-6 text-sm text-white">
                                <div className="flex items-center bg-black/60 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm border border-white/10">
                                    <Clock className="mr-2 h-4 w-4 text-gold-400" />
                                    <time className="font-medium tracking-wide">{article.publishedAt}</time>
                                </div>
                                <div className="flex items-center bg-black/60 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm border border-white/10">
                                    <MapPin className="mr-2 h-4 w-4 text-main font-bold" />
                                    <span className="font-bold">{article.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12 dark:bg-navy-900 border border-gray-100 dark:border-navy-800">
                                {/* Article Body */}
                                <div
                                    className="article-content prose prose-lg prose-navy max-w-none
                                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-navy-950 dark:prose-headings:text-white
                                    prose-p:text-navy-800 prose-p:leading-[2.3] prose-p:tracking-wide prose-p:mb-10 prose-p:text-[16px] dark:prose-p:text-navy-200 
                                    prose-li:text-navy-800 prose-li:leading-relaxed prose-li:my-4 dark:prose-li:text-navy-200
                                    prose-strong:text-navy-900 prose-strong:font-bold prose-strong:bg-gold-100 prose-strong:px-1 dark:prose-strong:text-white dark:prose-strong:bg-navy-700
                                    prose-img:rounded-xl prose-img:shadow-md hover:prose-img:shadow-xl prose-img:transition-shadow
                                    prose-a:text-main prose-a:no-underline hover:prose-a:underline
                                    "
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />
                            </div>

                            <div className="mt-12 flex justify-center">
                                <Link href="/" className="group inline-flex items-center justify-center px-8 py-4 bg-white border border-navy-200 rounded-full text-navy-900 font-bold shadow-sm transition-all hover:shadow-md hover:border-navy-400 dark:bg-navy-900 dark:text-white dark:border-navy-700">
                                    <ArrowLeft className="mr-3 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                    記事一覧に戻る
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Author/Supervisor Mock (New) */}
                            {article.author && (
                                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100 dark:bg-navy-900 dark:border-navy-800">
                                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-navy-400">この記事の執筆者</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-navy-100 overflow-hidden relative">
                                            {article.author.avatarUrl ? (
                                                <Image src={article.author.avatarUrl} alt={article.author.name} fill className="object-cover" />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-navy-200 text-navy-500 font-bold dark:bg-navy-800 dark:text-navy-400">
                                                    {article.author.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy-900 dark:text-white text-sm">{article.author.name}</p>
                                            {article.author.description && (
                                                <p className="text-xs text-navy-500 line-clamp-2 mt-1">{article.author.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* CTA Card */}
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-xl">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
                                <Sparkles className="mb-4 h-8 w-8 text-gold-400" />
                                <h3 className="mb-3 font-serif text-xl font-bold leading-tight">
                                    会食の準備、<br />完璧ですか？
                                </h3>
                                <p className="mb-6 text-sm text-navy-200 leading-relaxed font-medium">
                                    この記事のお店を予約する前に、一番大切な**「アレルギー確認」**を忘れていませんか？
                                </p>
                                <Button className="w-full bg-white text-navy-900 hover:bg-gold-50 shadow-lg border-0 font-bold">
                                    アプリでリスクを回避する
                                </Button>
                            </div>

                            <RankingSidebar />
                            <Suspense fallback={<div className="mt-8 p-6 bg-white dark:bg-navy-900 rounded-lg animate-pulse h-48"></div>}>
                                <CategorySidebar />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
