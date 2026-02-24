import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/article/ArticleCard";
import { RankingSidebar, CategorySidebar } from "@/components/layout/Sidebar";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function ArticlesPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20 dark:bg-navy-950">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-navy-100 dark:bg-navy-900 dark:border-navy-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center text-xs text-navy-400">
                        <Link href="/" className="hover:text-main flex items-center gap-1">
                            <Home className="h-3 w-3" />
                            TOP
                        </Link>
                        <ChevronRight className="h-3 w-3 mx-2" />
                        <span className="text-navy-700 font-medium dark:text-navy-200">記事一覧</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                    {/* Main Content */}
                    <main className="lg:col-span-8">
                        <div className="mb-8">
                            <span className="text-main text-[10px] font-bold tracking-widest uppercase">ALL ARTICLES</span>
                            <h1 className="font-serif text-3xl font-bold text-navy-950 dark:text-white mt-2">
                                すべての記事
                            </h1>
                            <p className="text-navy-500 mt-2 text-sm">
                                失敗しないための「知識」と「厳選リスト」
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {articles.map((article) => (
                                <ArticleCard key={article.slug} {...article} />
                            ))}
                        </div>

                        {/* Pagination (Mock) */}
                        <div className="mt-16 flex justify-center gap-2">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-main text-white font-bold shadow-md">1</span>
                            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-navy-600 hover:bg-navy-50 font-medium transition-colors dark:bg-navy-800 dark:text-navy-300">2</button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-navy-600 hover:bg-navy-50 font-medium transition-colors dark:bg-navy-800 dark:text-navy-300">3</button>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        <RankingSidebar />
                        <CategorySidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
}
