import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/article/ArticleCard";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Ban } from "lucide-react";
import { articlesPromise, Article } from "@/lib/articles";
import { RankingSidebar, CategorySidebar } from "@/components/layout/Sidebar";
import { Suspense } from "react";

import { TrustSection } from "@/components/home/TrustSection";
import { FeatureSection } from "@/components/home/FeatureSection";

export default async function Home() {
  const articles = await articlesPromise();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy-950 py-24 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="animate-fade-in-up inline-block mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-navy-100 backdrop-blur-md">
            <span className="mr-2 text-main">●</span> 会食 × リスク管理の専門メディア
          </div>

          <h1 className="animate-fade-in-up delay-100 mb-8 font-serif text-4xl font-bold tracking-tight leading-tight md:text-5xl lg:text-6xl">
            もう、店選びで<br className="md:hidden" />
            <span className="relative inline-block">
              <span className="relative z-10 text-main">失敗</span>
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-white/10 md:bottom-4 md:h-4"></span>
            </span>
            しない。
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mb-12 max-w-2xl text-lg text-navy-100 md:text-xl leading-relaxed font-medium">
            アレルギー対応、個室の防音性、支払い方法まで。<br />
            幹事が<span className="text-white border-b border-main/50 pb-1">"本当に知りたい情報"</span>だけを、徹底的に。
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-bold shadow-lg shadow-main/20 hover:scale-105 transition-transform duration-300 rounded-full">
              今すぐアプリをダウンロード
            </Button>
          </div>

        </div>
      </section >

      {/* Feature Section (New) */}
      < FeatureSection />

      {/* Problem Agitation */}
      < section className="bg-navy-50 py-20 dark:bg-navy-900" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-main text-xs font-bold tracking-widest uppercase">RISK MANAGEMENT</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy-950 dark:text-white md:text-4xl">
              会食の<span className="text-main">リスク</span>、<br className="md:hidden" />甘く見ていませんか？
            </h2>
            <p className="mt-4 text-navy-600 dark:text-navy-400">
              大切な商談を台無しにする、3つの落とし穴。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "騒音トラブル", icon: AlertTriangle, desc: "個室だと思ったら、天井が繋がっていて隣の声が丸聞こえ。" },
              { title: "アレルギー事故", icon: Ban, desc: "当日に「実は蕎麦がダメで…」と言われ、店を変える羽目に。" },
              { title: "支払いのもたつき", icon: AlertTriangle, desc: "「カード使えますか？」と聞いて「現金のみ」と言われる恥ずかしさ。" }
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm dark:bg-navy-800">
                <item.icon className="mb-4 h-10 w-10 text-red-500" />
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-navy-600 dark:text-navy-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Trust Section (New) */}
      < TrustSection />

      {/* Article List (Magazine Layout) */}
      < section className="py-12 bg-white dark:bg-navy-950" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* Main Content (Articles) */}
            <main className="lg:col-span-8">
              <div className="mb-8 flex items-end justify-between pb-4">
                <div>
                  <span className="text-main text-[10px] font-bold tracking-widest uppercase">LATEST ARTICLES</span>
                  <h2 className="font-serif text-2xl font-bold text-navy-950 dark:text-white">
                    新着記事
                  </h2>
                </div>
                <Link href="/articles" className="text-sm font-bold text-navy-600 hover:text-main flex items-center gap-1 transition-colors">
                  一覧を見る <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {articles.map((article: Article) => (
                  <ArticleCard key={article.slug} {...article} />
                ))}
              </div>

              <div className="mt-16 flex justify-center">
                <Link href="/articles" className="group relative inline-flex w-full max-w-xs items-center justify-center overflow-hidden rounded-full bg-white py-4 text-navy-900 shadow-sm ring-1 ring-navy-200 transition-all duration-300 hover:bg-navy-50 hover:shadow-md hover:ring-navy-400 dark:bg-navy-900 dark:text-white dark:ring-navy-700 dark:hover:bg-navy-800">
                  <span className="font-serif text-sm font-bold tracking-widest">記事一覧を見る</span>
                  <ArrowRight className="ml-4 h-4 w-4 text-main transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <RankingSidebar />
              <Suspense fallback={<div className="mt-8 p-6 bg-white dark:bg-navy-900 rounded-lg animate-pulse h-48"></div>}>
                <CategorySidebar />
              </Suspense>
            </aside>

          </div>
        </div>
      </section >

      {/* Solution/CTA */}
      < section className="bg-navy-900 py-20 text-white" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold">
            もう、会食で<br className="md:hidden" />冷や汗をかかない。
          </h2>
          <p className="mb-8 text-lg text-navy-200">
            Kaisyokuアプリなら、<br className="md:hidden" />アレルギー事前確認も、<br className="hidden" />
            「本当に静かな個室」の予約も、<br />すべてスマホひとつで完結。
          </p>
          <ul className="mx-auto mb-10 max-w-md space-y-3 text-left">
            {[
              "ゲストへのアレルギー確認メール自動作成",
              "「完全個室・静音」保証店のみ掲載",
              "事前決済で、当日の会計は不要"
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-main flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-full max-w-sm shadow-gold-500/20">
            今すぐアプリをダウンロード
          </Button>
        </div>
      </section >
    </div >
  );
}
