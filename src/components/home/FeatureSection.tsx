import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeatureSection() {
    return (
        <section className="py-12 bg-navy-900 text-white">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col md:flex-row gap-8 items-center bg-navy-800 rounded-sm overflow-hidden shadow-2xl border-4 border-double border-navy-700">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <span className="font-serif text-9xl font-bold text-white leading-none">01</span>
                    </div>

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 h-64 md:h-96 relative bg-navy-950 group">
                        <img
                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
                            alt="Featured"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-0 left-0 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg">
                            Editors' Pick
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10">
                        <div className="mb-6">
                            <span className="inline-block bg-gradient-to-r from-gold-400 to-gold-600 text-white text-xs font-bold px-6 py-1.5 rounded-full tracking-widest shadow-lg shadow-gold-500/20">
                                今月の特集
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl font-bold mb-4 leading-tight">
                            「絶対に外さない」<br />
                            東京・丸の内の会食スポット決定版
                        </h2>
                        <p className="text-navy-200 mb-8 leading-relaxed">
                            遠方からのゲストも多い東京駅周辺。新幹線の時間ギリギリまで楽しめて、かつ静かで、料理も一級品。そんな都合の良い店を、足で探して見つけました。
                        </p>
                        <Link href="/articles" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/30 text-white font-serif hover:bg-white hover:text-navy-900 transition-all duration-300">
                            <span>記事を読む</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
