import Link from "next/link";

export function SceneNavigation() {
    const scenes = [
        {
            label: "接待・会食",
            en: "BUSINESS",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
        },
        {
            label: "顔合わせ",
            en: "UPSCALE",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
        },
        {
            label: "謝罪・お詫び",
            en: "PRIVATE",
            image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=600"
        },
        {
            label: "歓送迎会",
            en: "PARTY",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="py-12 bg-navy-50/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {scenes.map((scene, i) => (
                        <Link key={i} href="#" className="group relative block h-40 overflow-hidden rounded-xl bg-navy-900 shadow-md transition-transform hover:-translate-y-1">
                            <img
                                src={scene.image}
                                alt={scene.label}
                                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent p-4">
                                <span className="block text-[10px] uppercase tracking-widest text-white/70">{scene.en}</span>
                                <span className="font-serif text-lg font-bold text-white">{scene.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
