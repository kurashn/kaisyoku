"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const isTopPage = pathname === '/';
    // isTranslucentHeader is true ONLY on the top page before scrolling
    const isTranslucentHeader = isTopPage && !isScrolled;

    // Always use solid background on lower pages, or on top page when scrolled
    const useSolidBackground = !isTopPage || isScrolled;

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
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
        { label: '会食マナー', href: '/category/kaishoku-manner', sub: 'Manners' },
        { label: '掲載基準・アレルギー', href: '/about', sub: 'Standard & Allergy' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${useSolidBackground ? 'bg-white/95 shadow-sm backdrop-blur-md dark:bg-navy-950/95' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 z-50 group">
                    <div className="bg-main text-white p-1.5 rounded flex items-center justify-center transition-transform group-hover:scale-105">
                        <Logo className="h-5 w-5" />
                    </div>
                    <span className={`text-xl font-bold tracking-tight ${!isTranslucentHeader ? 'text-navy-900 dark:text-white' : 'text-white'}`}>
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
                            <span className={`text-sm font-bold transition-colors ${!isTranslucentHeader ? 'text-navy-700 group-hover:text-main dark:text-navy-200 dark:group-hover:text-gold-400' : 'text-white/90 group-hover:text-white'}`}>
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
                        className={`md:hidden p-2 focus:outline-none ${!isTranslucentHeader ? 'text-navy-900 dark:text-white' : 'text-white'}`}
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
