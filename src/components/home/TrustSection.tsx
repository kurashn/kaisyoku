import { ShieldCheck, Ear, FileCheck } from "lucide-react";

export function TrustSection() {
    const points = [
        {
            // Japanese private dining, clear atmosphere
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            icon: Ear,
            title: "騒音レベル測定済み",
            desc: "隣席の会話が聞こえない「50db以下」の個室のみを厳選掲載。"
        },
        {
            // Chef/Kitchen professionalism for allergy safety
            image: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=800",
            icon: ShieldCheck,
            title: "アレルギー対応保証",
            desc: "店舗との連携により、除去食・代替食の事前確約を徹底。"
        },
        {
            // Concierge/Service/Phone check
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
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

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {points.map((point, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={point.image}
                                    alt={point.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="relative p-6">
                                <div className="absolute -top-10 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-main text-white shadow-lg">
                                    <point.icon className="h-8 w-8" />
                                </div>
                                <div className="mt-4">
                                    <h3 className="mb-3 text-lg font-bold text-navy-900">{point.title}</h3>
                                    <p className="text-sm leading-relaxed text-navy-600">{point.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
