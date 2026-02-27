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
 <div className="relative border-t-2 border-gold-500 bg-navy-950/95 px-3 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-4">
 <div className="container mx-auto flex max-w-5xl items-center justify-between gap-3 md:gap-4">
 <button
 onClick={() => setIsClosed(true)}
 className="absolute -top-3 right-2 z-10 rounded-full bg-navy-800 p-1 text-gray-400 shadow-lg border border-navy-700 transition-colors hover:bg-navy-700 hover:text-white md:right-4 md:top-1/2 md:-translate-y-1/2"
 aria-label="Close banner"
 >
 <X className="h-4 w-4"/>
 </button>

 <div className="flex min-w-0 flex-1 items-center gap-3">
 <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 md:flex">
 <span className="text-2xl font-bold font-serif text-navy-900">K</span>
 </div>
 <div className="min-w-0 flex-1">
 <p className="truncate text-xs font-bold tracking-wide text-white md:text-lg">
 接待・会食の失敗を<span className="text-gold-400">ゼロ</span>にするアプリ
 </p>
 <div className="mt-0.5 flex items-center gap-2">
 <span className="flex text-[10px] text-gold-400 md:text-sm">
 ★★★★★
 </span>
 <p className="truncate text-[10px] text-navy-200 md:text-sm">
 ビジネスマンのための「最強の店選び」
 </p>
 </div>
 </div>
 </div>

 <div className="shrink-0 md:mr-12">
 <Button size="lg"className="h-10 rounded-full border-none bg-gradient-to-r from-gold-400 to-gold-600 px-4 text-sm font-bold text-navy-900 shadow-lg shadow-gold-500/20 hover:from-gold-300 hover:to-gold-500 md:h-12 md:px-6 md:text-base">
 <span className="mr-1 hidden md:inline">無料</span>ダウンロード
 </Button>
 </div>
 </div>
 </div>
 </div>
 );
}
