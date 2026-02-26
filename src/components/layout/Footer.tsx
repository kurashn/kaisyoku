import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
    return (
        <footer className="bg-navy-950 py-12 pb-32 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4 group">
                            <Logo className="h-6 w-6 text-main transition-transform group-hover:scale-110" />
                            <span className="text-xl font-bold tracking-tight">Kaisyoku</span>
                        </Link>
                        <p className="text-navy-300 text-sm max-w-sm">
                            ビジネス会食の成功をサポートする、リスク管理型グルメメディア。<br />
                            失敗できない幹事様のための「安全な店選び」と「アレルギー対策」を提供します。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-main mb-4">コンテンツ</h3>
                        <ul className="space-y-2 text-sm text-navy-300">
                            <li><Link href="/articles" className="hover:text-white">新着記事一覧</Link></li>
                            <li><Link href="/about" className="hover:text-white">掲載基準・アレルギー</Link></li>
                            <li><Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-main mb-4">アプリ</h3>
                        <ul className="space-y-2 text-sm text-navy-300">
                            <li><Link href="#" className="hover:text-white">iOS版ダウンロード</Link></li>
                            <li><Link href="#" className="hover:text-white">Android版ダウンロード</Link></li>
                            <li><Link href="/lp-app" className="hover:text-white">機能紹介</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-navy-800 pt-8 text-center text-xs text-navy-500">
                    <p>&copy; {new Date().getFullYear()} Kaisyoku. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
