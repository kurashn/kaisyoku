import { BookOpen, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";

export function RankingSidebar() {
    const ranks = [
        {
            title: "【新宿】個室確約！接待・会食に使える「絶対に静かな」和食店5選",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=200"
        },
        {
            title: "絶対に失敗しない！会食での「上座・下座」完全マニュアル",
            image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=200"
        }
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
    const knowledgeCategories = [
        { name: "マナー・振る舞い", slug: "manners", count: 10, icon: BookOpen },
        { name: "トラブル回避", slug: "trouble", count: 5, icon: ShieldCheck },
        { name: "準備・ツール", slug: "tools", count: 4, icon: Wrench }
    ];

    return (
        <div className="mt-8">
            {/* Knowledge Categories */}
            <div className="rounded-lg bg-navy-900 p-6 shadow-sm md:bg-white dark:bg-navy-900">
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-white md:text-navy-950 dark:text-white border-l-4 border-gold-500 pl-3">
                        知識で武装する
                    </h3>
                    <span className="text-[10px] font-bold tracking-widest text-navy-400 opacity-50">KNOWLEDGE</span>
                </div>

                <div className="flex flex-col">
                    {knowledgeCategories.map((cat, i) => (
                        <Link key={i} href={`/category/${cat.slug}`} className="group flex items-center justify-between border-b border-dashed border-navy-800 py-3 text-sm font-medium text-navy-300 transition-all hover:border-gold-500 hover:text-gold-600 md:border-navy-50 md:text-navy-700 dark:border-navy-800 dark:text-navy-300">
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

