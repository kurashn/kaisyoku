import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const areas = [
    {
        name: "新宿",
        en: "Shinjuku",
        description: "高層ビル街の隠れ家個室",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000",
        slug: "shinjuku"
    },
    {
        name: "丸の内・大手町",
        en: "Marunouchi",
        description: "エグゼクティブが集う洗練空間",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1000",
        slug: "marunouchi"
    },
    {
        name: "銀座",
        en: "Ginza",
        description: "最高級の格式とホスピタリティ",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000",
        slug: "ginza"
    },
    {
        name: "六本木",
        en: "Roppongi",
        description: "グローバルなゲストも満足する名店",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000",
        slug: "roppongi"
    },
    {
        name: "赤坂",
        en: "Akasaka",
        description: "政財界御用達の老舗料亭",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
        slug: "akasaka"
    },
    {
        name: "恵比寿",
        en: "Ebisu",
        description: "大人の隠れ家と美食の街",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
        slug: "ebisu"
    }
];

export default function AreaPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20 dark:bg-navy-950">
            <div className="bg-navy-900 py-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10">
                    <span className="text-gold-400 font-bold tracking-widest text-sm uppercase">AREA</span>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mt-2">エリアから探す</h1>
                    <p className="text-navy-200 mt-4 max-w-lg mx-auto text-sm md:text-base">
                        ビジネスの主要エリアを網羅。<br />
                        アクセスと「土地の格」を考慮した最適なエリア選択を。
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area) => (
                        <Link
                            key={area.slug}
                            href={`/articles?area=${area.slug}`}
                            className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-navy-900"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={area.image}
                                    alt={area.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="text-xs font-medium tracking-wider text-gold-400 uppercase">{area.en}</span>
                                    <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-gold-400" />
                                        {area.name}
                                    </h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-navy-600 dark:text-navy-300 font-medium">{area.description}</p>
                                <div className="mt-4 flex items-center text-main text-sm font-bold group-hover:translate-x-2 transition-transform">
                                    このエリアのお店を見る
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
