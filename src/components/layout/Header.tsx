"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X, UtensilsCrossed, ChevronRight } from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navItems = [
        { label: '記事一覧', href: '/articles', sub: 'Articles' },
        { label: '会食マナー', href: '/category/manners', sub: 'Manners' },
        { label: '掲載基準・アレルギー', href: '/about', sub: 'Standard & Allergy' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl shadow-sm transition-all dark:bg-navy-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-3 group relative z-50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-main text-white transition-transform group-hover:scale-110">
                        <UtensilsCrossed className="h-5 w-5" />
                    </div>
                    <span className="font-serif text-xl font-bold tracking-wider text-navy-950 transition-colors group-hover:text-main dark:text-white">
                        Kaisyoku
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative flex flex-col items-center justify-center py-1"
                        >
                            <span className="text-sm font-bold text-navy-700 transition-colors group-hover:text-main dark:text-navy-200 dark:group-hover:text-gold-400">
                                {item.label}
                            </span>
                            <span className="text-[10px] font-medium text-navy-400 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-gold-500 absolute -bottom-3">
                                {item.sub}
                            </span>
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4 relative z-50">
                    <Button variant="primary" size="sm" className="hidden md:inline-flex shadow-lg shadow-main/20">
                        アプリをダウンロード
                    </Button>
                    <button
                        className="md:hidden p-2 text-navy-900 focus:outline-none dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {mounted && isMenuOpen && createPortal(
                    <div
                        className="fixed inset-0 bg-navy-950/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 animate-in slide-in-from-top-10 fade-in duration-300 md:hidden"
                        style={{ top: '0', left: '0', right: '0', bottom: '0' }}
                    >
                        <nav className="flex flex-col space-y-6">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-serif font-bold text-white flex items-center justify-between group border-b border-white/10 pb-4 animate-in slide-in-from-left-4 fade-in fill-mode-forwards"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <span className="group-hover:text-gold-400 transition-colors">{item.label}</span>
                                    <ChevronRight className="h-5 w-5 text-navy-700 group-hover:text-gold-400 transition-colors" />
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-10 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300 fill-mode-forwards">
                            <Button className="w-full bg-main text-white py-6 text-lg shadow-xl shadow-main/30 font-bold hover:bg-gold-600">
                                アプリを無料ダウンロード
                            </Button>
                            <p className="mt-6 text-center text-xs text-white/60">
                                © 2024 Kaisyoku. All rights reserved.
                            </p>
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </header>
    );
}
