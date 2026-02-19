"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible || isClosed) return null;

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full animate-in slide-in-from-bottom-full print:hidden">
            <div className="relative border-t-2 border-gold-500 bg-navy-950/95 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
                <div className="container mx-auto flex max-w-5xl items-center justify-between gap-4">
                    <button
                        onClick={() => setIsClosed(true)}
                        className="absolute -top-3 right-2 rounded-full bg-navy-800 p-1 text-gray-400 shadow-lg border border-navy-700 hover:bg-navy-700 hover:text-white transition-colors md:top-1/2 md:-translate-y-1/2 md:right-4"
                        aria-label="Close banner"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="flex flex-1 items-center gap-4">
                        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 md:flex">
                            <span className="text-navy-900 font-serif font-bold text-2xl">K</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white md:text-lg tracking-wide">
                                接待・会食の失敗を<span className="text-gold-400">ゼロ</span>にするアプリ
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="flex text-gold-400">
                                    ★★★★★
                                </span>
                                <p className="text-xs text-navy-200 md:text-sm">
                                    ビジネスマンのための「最強の店選び」
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mr-8 md:mr-12 shrink-0">
                        <Button size="lg" className="bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 hover:from-gold-300 hover:to-gold-500 shadow-lg shadow-gold-500/20 px-6 font-bold rounded-full border-none h-12">
                            <span className="mr-1 hidden md:inline">無料</span>ダウンロード
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
