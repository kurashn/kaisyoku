import { CheckCircle, ShieldCheck, AlertTriangle, Scale, Leaf, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-navy-950">

            {/* Hero Section */}
            <section className="bg-navy-950 py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e7421?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                        失敗できない幹事様へ。<br />
                        私たちが約束する「3つの安心」
                    </h1>
                    <p className="text-navy-200 max-w-2xl mx-auto text-lg leading-relaxed">
                        Kaisyokuは、単なるグルメサイトではありません。<br />
                        ビジネスの成功を裏で支える「リスク管理ツール」です。<br />
                        私たちが厳守する掲載基準と、アレルギー対策についてご説明します。
                    </p>
                </div>
            </section>

            {/* Philosophy / Message */}
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-main font-bold tracking-widest text-sm uppercase">PHILOSOPHY</span>
                    <h2 className="text-3xl font-serif font-bold mt-2 text-navy-950 dark:text-white">なぜ「会食」に特化するのか</h2>
                </div>
                <div className="prose prose-lg mx-auto text-navy-700 dark:text-navy-200">
                    <p>
                        重要な商談、謝罪、顔合わせ。人生やビジネスを左右する場面で、店選びの失敗は許されません。
                        しかし、既存のグルメサイトは「味」や「映え」ばかりを強調し、幹事が本当に知りたい情報──
                        「隣の席の声は聞こえないか？」「個室は本当に密室か？」「アレルギー対応は完璧か？」
                        ──は、実際に行ってみるまで分かりませんでした。
                    </p>
                    <p>
                        Kaisyokuは、そんな「不確実性」を排除するために生まれました。
                        私たちは味だけでなく、「環境」と「リスク管理」を徹底的に審査し、
                        幹事様が枕を高くして眠れるような、絶対的な安心を提供します。
                    </p>
                </div>
            </section>

            {/* Standard Section (掲載基準) */}
            <section id="standard" className="bg-slate-50 py-20 dark:bg-navy-900 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4 dark:bg-navy-800">
                            <Scale className="h-8 w-8 text-gold-500" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-navy-950 dark:text-white">
                            Kaisyokuの掲載基準
                        </h2>
                        <p className="text-navy-600 mt-4 dark:text-navy-300">
                            以下の条件を満たさないお店は、一切掲載いたしません。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "完全個室の保証",
                                icon: ShieldCheck,
                                desc: "天井まで壁があり、出入り口に扉がある「完全個室」のみ。カーテン仕切りや、半個室は除外します。"
                            },
                            {
                                title: "静音性の審査",
                                icon: MicOffIcon,
                                desc: "隣室の会話内容が聞き取れないレベルの防音性を確認。BGMの音量もビジネス会話を妨げない基準で行います。"
                            },
                            {
                                title: "接客のプロ意識",
                                icon: HeartHandshake,
                                desc: "会話の間を読んだ配膳、上座・下座の理解、領収書のスマートな受け渡しなど、接待マナーを熟知しているか。"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-main dark:bg-navy-800">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="bg-main/10 text-main p-1 rounded">0{i + 1}</span>
                                    {item.title}
                                </h3>
                                <p className="text-navy-700 leading-relaxed dark:text-navy-300">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Allergy Section (アレルギー) */}
            <section id="allergy" className="py-20 container mx-auto px-4 scroll-mt-20">
                <div className="max-w-5xl mx-auto bg-navy-50 rounded-2xl p-8 md:p-12 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700">
                    <div className="md:flex items-start gap-12">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="inline-flex items-center gap-2 text-main font-bold mb-4">
                                <AlertTriangle className="h-5 w-5" />
                                <span>命に関わる最重要事項</span>
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-navy-950 dark:text-white mb-6">
                                アレルギー事故を<br />100%防ぐ仕組み
                            </h2>
                            <p className="text-navy-700 dark:text-navy-300 mb-6 leading-relaxed">
                                「苦手な食材はありますか？」と当日聞くのは、接待では三流です。<br />
                                Kaisyokuアプリには、招待状を送るだけでゲスト自身にアレルギーや苦手な食材を入力してもらえる「事前確認システム」を搭載しています。<br />
                                情報は自動でお店に共有され、当日の事故や気まずい確認作業を完全に防ぎます。
                            </p>
                            <div className="space-y-3">
                                {["28品目のアレルゲンに対応", "苦手食材（ネギ、パクチー等）も共有不可欠", "クロスコンタミネーションへの配慮"].map((txt, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="font-bold text-navy-800 dark:text-navy-200">{txt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gold-500/10 rounded-full blur-2xl"></div>
                            <div className="relative bg-white p-6 rounded-xl shadow-lg dark:bg-navy-900 border border-navy-100 dark:border-navy-700">
                                {/* Mock UI of App's Allergy Check */}
                                <div className="border-b border-gray-100 pb-4 mb-4">
                                    <p className="text-xs text-gray-400">事前確認フォーム</p>
                                    <p className="font-bold text-navy-900 dark:text-white">田中 誠司 様へのご質問</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                        <p className="text-xs font-bold text-red-600 mb-1">アレルギー品目</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-white text-red-600 px-2 py-1 text-xs font-bold rounded shadow-sm border border-red-100">エビ</span>
                                            <span className="bg-white text-red-600 px-2 py-1 text-xs font-bold rounded shadow-sm border border-red-100">カニ</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <p className="text-xs font-bold text-gray-600 mb-1">苦手な食材</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-white text-gray-700 px-2 py-1 text-xs rounded border border-gray-200">パクチー</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-[10px] text-green-600 font-bold flex items-center justify-center gap-1">
                                        <CheckCircle className="h-3 w-3" />
                                        お店に共有済み
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-main py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">リスクのない会食を、今すぐ手に入れる</h2>
                    <Button size="lg" className="bg-white text-main hover:bg-navy-50 font-bold px-8 shadow-xl">
                        アプリを無料ダウンロード
                    </Button>
                </div>
            </section>

        </div>
    );
}

function MicOffIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
            <path d="M12 17v5" />
            <path d="M8 23h8" />
        </svg>
    )
}
