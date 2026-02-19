import { ShieldCheck, Ear, FileCheck } from "lucide-react";

export function TrustSection() {
    const points = [
        {
            icon: Ear,
            title: "騒音レベル測定済み",
            desc: "隣席の会話が聞こえない「50db以下」の個室のみを厳選掲載。"
        },
        {
            icon: ShieldCheck,
            title: "アレルギー対応保証",
            desc: "店舗との連携により、除去食・代替食の事前確約を徹底。"
        },
        {
            icon: FileCheck,
            title: "電話での事前確認",
            desc: "個室のタイプや設備について、店舗へ直接電話でヒアリングを実施。"
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-main text-[10px] font-bold tracking-widest uppercase">OUR PROMISE</span>
                    <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950">
                        Kaisyokuが「失敗しない」理由
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                    {points.map((point, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg bg-navy-50/50">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md text-main">
                                <point.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 font-bold text-navy-900">{point.title}</h3>
                            <p className="text-sm text-navy-600 leading-relaxed">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
