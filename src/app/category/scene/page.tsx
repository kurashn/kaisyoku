import { Briefcase, Users, Ticket, HeartHandshake, MicOff, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const scenes = [
    {
        name: "接待・会食",
        en: "Business Dinner",
        description: "絶対に失敗できない重要な商談に。静寂と最高級のサービスを保証。",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
        slug: "business",
        icon: Briefcase
    },
    {
        name: "顔合わせ",
        en: "First Meeting",
        description: "両家の絆を深める、落ち着いた個室と縁起の良いお料理。",
        image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80&w=1000",
        slug: "meeting",
        icon: HeartHandshake
    },
    {
        name: "謝罪・お詫び",
        en: "Apology",
        description: "誠意を伝えるための、他者の視線が気にならない完全密閉個室。",
        image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=1000",
        slug: "apology",
        icon: MicOff
    },
    {
        name: "歓迎会・送別会",
        en: "Welcome/Farewell",
        description: "部署の節目に。そこそこの人数でも「うるさくない」上質な空間。",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
        slug: "party",
        icon: Users
    },
    {
        name: "役員・VIP対応",
        en: "VIP & Executive",
        description: "舌の肥えたVIPも唸る、隠れた名店と専用入り口のある個室。",
        image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000",
        slug: "vip",
        icon: Star
    },
    {
        name: "ランチミーティング",
        en: "Lunch Meeting",
        description: "限られた時間で成果を出す。提供スピードと静かさを両立。",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000",
        slug: "lunch",
        icon: Ticket
    }
];

export default function ScenePage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20 dark:bg-navy-950">
            <div className="bg-navy-900 py-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10">
                    <span className="text-gold-400 font-bold tracking-widest text-sm uppercase">SCENE</span>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mt-2">目的・シーンから探す</h1>
                    <p className="text-navy-200 mt-4 max-w-lg mx-auto text-sm md:text-base">
                        その会食の「ゴール」は何ですか？<br />
                        成功させたい目的に合わせて、最適な環境を選び抜きました。
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scenes.map((scene) => (
                        <Link
                            key={scene.slug}
                            href={`/articles?scene=${scene.slug}`}
                            className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-navy-900"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={scene.image}
                                    alt={scene.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-navy-900/60 transition-opacity" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full mb-3 group-hover:bg-main group-hover:text-white transition-colors">
                                        <scene.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-white mb-1">
                                        {scene.name}
                                    </h2>
                                    <span className="text-xs font-medium tracking-wider text-gold-400 uppercase opacity-80">{scene.en}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-navy-600 dark:text-navy-300 font-medium text-sm leading-relaxed">{scene.description}</p>
                                <div className="mt-4 flex items-center justify-end text-main text-sm font-bold group-hover:translate-x-2 transition-transform">
                                    シーンの詳細を見る
                                    <span className="ml-1">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
