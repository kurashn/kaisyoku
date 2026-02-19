import { Button } from "@/components/ui/Button";
import { ArrowRight, Trophy, Search, Tag, MapPin, Utensils, Wallet, BookOpen, Sparkles, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";

export function SearchSidebar() {
    return (
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-navy-900">
            <div className="mb-5 flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-navy-950 dark:text-white border-l-4 border-main pl-3">
                    お店を探す
                </h3>
                <span className="text-[10px] font-bold tracking-widest text-navy-400 opacity-50">SEARCH</span>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="mb-1.5 block text-xs font-bold text-navy-600 dark:text-navy-300">エリア</label>
                    <div className="relative">
                        <select className="w-full appearance-none rounded-md border border-navy-200 bg-navy-50 px-4 py-2.5 text-sm font-medium text-navy-700 focus:border-main focus:outline-none focus:ring-1 focus:ring-main dark:border-navy-700 dark:bg-navy-800 dark:text-white">
                            <option>エリアを選択...</option>
                            <option>新宿</option>
                            <option>丸の内</option>
                            <option>六本木</option>
                            <option>銀座</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-navy-500">
                            <ArrowRight className="h-4 w-4 rotate-90" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="mb-1.5 block text-xs font-bold text-navy-600 dark:text-navy-300">シーン</label>
                    <div className="relative">
                        <select className="w-full appearance-none rounded-md border border-navy-200 bg-navy-50 px-4 py-2.5 text-sm font-medium text-navy-700 focus:border-main focus:outline-none focus:ring-1 focus:ring-main dark:border-navy-700 dark:bg-navy-800 dark:text-white">
                            <option>シーンを選択...</option>
                            <option>接待・会食</option>
                            <option>顔合わせ</option>
                            <option>謝罪</option>
                            <option>お祝い</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-navy-500">
                            <ArrowRight className="h-4 w-4 rotate-90" />
                        </div>
                    </div>
                </div>
                <Button className="mt-2 w-full py-6 font-bold tracking-widest shadow-lg shadow-main/10">
                    <Search className="mr-2 h-4 w-4" />
                    検索する
                </Button>
            </div>
        </div>
    );
}

export function RankingSidebar() {
    const ranks = [
        {
            title: "【新宿】個室確約！接待・会食に使える「絶対に静かな」和食店5選",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=200"
        },
        {
            title: "「アレルギー確認」のメール文面テンプレート【コピペOK】",
            image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=200"
        },
        {
            title: "東京駅周辺・ランチ会食（3000円〜）おすすめリスト",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=200"
        },
    ];

    return (
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-navy-900">
            <div className="mb-5 flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-navy-950 dark:text-white border-l-4 border-gold-500 pl-3">
                    人気ランキング
                </h3>
                <span className="text-[10px] font-bold tracking-widest text-navy-400 opacity-50">RANKING</span>
            </div>

            <ul className="space-y-4">
                {ranks.map((item, i) => (
                    <li key={i} className="group relative flex items-start gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                            <span className={`absolute left-0 top-0 z-10 flex h-5 w-5 items-center justify-center rounded-br-md text-[10px] font-bold text-white shadow-sm`}
                                style={{ backgroundColor: i === 0 ? '#c5a059' : i === 1 ? '#64748b' : i === 2 ? '#9a3412' : '#0f172a' }}>
                                {i + 1}
                            </span>
                            {/* Note: Using standard img tag for simplicity in sidebar, or next/image if configured */}
                            <img
                                src={item.image}
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <Link href="#" className="line-clamp-3 text-sm font-medium leading-relaxed text-navy-900 transition-colors group-hover:text-main dark:text-white">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function CategorySidebar() {
    const searchCategories = [
        { name: "エリアから探す", slug: "area", count: 12, icon: MapPin },
        { name: "シーンから探す", slug: "scene", count: 8, icon: Utensils },
        { name: "特集記事", slug: "special", count: 3, icon: Sparkles }
    ];

    const knowledgeCategories = [
        { name: "マナー・振る舞い", slug: "manners", count: 10, icon: BookOpen },
        { name: "トラブル回避", slug: "trouble", count: 5, icon: ShieldCheck },
        { name: "準備・ツール", slug: "tools", count: 4, icon: Wrench } // Wrench or PenTool
    ];

    return (
        <div className="mt-8 space-y-8">
            {/* Search Categories */}
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-navy-900">
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-navy-950 dark:text-white border-l-4 border-navy-300 pl-3">
                        お店を探す
                    </h3>
                    <span className="text-[10px] font-bold tracking-widest text-navy-400 opacity-50">SEARCH</span>
                </div>

                <div className="flex flex-col">
                    {searchCategories.map((cat, i) => (
                        <Link key={i} href={`/category/${cat.slug}`} className="group flex items-center justify-between border-b border-dashed border-navy-50 py-3 text-sm font-medium text-navy-700 transition-all hover:border-main hover:text-main dark:border-navy-800 dark:text-navy-300">
                            <span className="flex items-center">
                                <cat.icon className="mr-3 h-4 w-4 text-navy-300 transition-colors group-hover:text-main" />
                                {cat.name}
                            </span>
                            <span className="text-xs text-navy-400 group-hover:text-main">
                                {cat.count}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Knowledge Categories */}
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-navy-900">
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-navy-950 dark:text-white border-l-4 border-gold-500 pl-3">
                        知識で武装する
                    </h3>
                    <span className="text-[10px] font-bold tracking-widest text-navy-400 opacity-50">KNOWLEDGE</span>
                </div>

                <div className="flex flex-col">
                    {knowledgeCategories.map((cat, i) => (
                        <Link key={i} href={`/category/${cat.slug}`} className="group flex items-center justify-between border-b border-dashed border-navy-50 py-3 text-sm font-medium text-navy-700 transition-all hover:border-gold-500 hover:text-gold-600 dark:border-navy-800 dark:text-navy-300">
                            <span className="flex items-center">
                                <cat.icon className="mr-3 h-4 w-4 text-navy-300 transition-colors group-hover:text-gold-500" />
                                {cat.name}
                            </span>
                            <span className="text-xs text-navy-400 group-hover:text-gold-500">
                                {cat.count}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

