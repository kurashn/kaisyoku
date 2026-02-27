import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'プライバシーポリシー | Kaisyoku',
 description: 'Kaisyokuのプライバシーポリシーについてご説明します。',
};

export default function PrivacyPolicyPage() {
 return (
 <div className="bg-white pt-20 min-h-screen">
 <section className="bg-navy-950 py-16 text-center text-white">
 <div className="container mx-auto px-4">
 <h1 className="text-3xl font-serif font-bold">プライバシーポリシー</h1>
 <p className="mt-4 text-navy-300 text-sm">Privacy Policy</p>
 </div>
 </section>

 <div className="container mx-auto px-4 py-16 max-w-3xl">
 <div className="space-y-12">

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">1</span>
 個人情報の取得について
 </h2>
 <p className="text-navy-700 leading-[2] pl-11">
 当サイト「Kaisyoku」（以下「当サイト」）では、お問い合わせやコメントの際に、
 お名前、メールアドレス等の個人情報をご提供いただく場合があります。
 取得した個人情報は、お問い合わせへの回答や必要な情報のご連絡のために利用し、
 これらの目的以外では利用いたしません。
 </p>
 </section>

 <hr className="border-gray-100"/>

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">2</span>
 個人情報の第三者提供について
 </h2>
 <p className="text-navy-700 leading-[2] pl-11 mb-4">
 取得した個人情報は、以下の場合を除き、第三者に提供することはありません。
 </p>
 <ul className="pl-11 space-y-2 text-navy-700">
 <li className="flex items-start gap-2"><span className="text-gold-500 mt-1">•</span>ご本人の同意がある場合</li>
 <li className="flex items-start gap-2"><span className="text-gold-500 mt-1">•</span>法令に基づく場合</li>
 <li className="flex items-start gap-2"><span className="text-gold-500 mt-1">•</span>人の生命、身体または財産の保護のために必要がある場合</li>
 </ul>
 </section>

 <hr className="border-gray-100"/>

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">3</span>
 Cookie（クッキー）について
 </h2>
 <p className="text-navy-700 leading-[2] pl-11">
 当サイトでは、ユーザーの利便性向上やアクセス解析のためにCookieを使用しています。
 Cookieはブラウザの設定により無効にすることが可能です。
 ただし、Cookieを無効にした場合、一部のサービスが正常に動作しない可能性があります。
 </p>
 </section>

 <hr className="border-gray-100"/>

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">4</span>
 アクセス解析ツールについて
 </h2>
 <div className="pl-11 space-y-4 text-navy-700 leading-[2]">
 <p>
 当サイトでは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を使用しています。
 Googleアナリティクスは、Cookieを使用してトラフィックデータを収集しています。
 このデータは匿名で収集されており、個人を特定するものではありません。
 </p>
 <p>
 詳細については{' '}
 <a href="https://marketingplatform.google.com/about/analytics/terms/jp/"target="_blank"rel="noopener noreferrer"className="text-main underline hover:no-underline">
 Googleアナリティクス利用規約
 </a>
 {' '}をご確認ください。
 </p>
 </div>
 </section>

 <hr className="border-gray-100"/>

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">5</span>
 広告について
 </h2>
 <p className="text-navy-700 leading-[2] pl-11">
 当サイトでは、第三者配信の広告サービスを利用する場合があります。
 広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
 </p>
 </section>

 <hr className="border-gray-100"/>

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">6</span>
 著作権について
 </h2>
 <p className="text-navy-700 leading-[2] pl-11">
 当サイトに掲載されている文章、画像、デザイン等のコンテンツの著作権は、
 当サイト運営者または正当な権利を有する第三者に帰属します。
 無断での転載・複製・改変等はお断りいたします。
 </p>
 </section>

 <hr className="border-gray-100"/>

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">7</span>
 免責事項
 </h2>
 <div className="pl-11 space-y-4 text-navy-700 leading-[2]">
 <p>
 当サイトに掲載された情報の正確性には万全を期しておりますが、
 その内容を保証するものではありません。
 当サイトの情報を利用したことによるいかなる損害についても、
 当サイト運営者は一切の責任を負いかねます。
 </p>
 <p>
 また、当サイトからリンクされた外部サイトの内容についても、
 当サイト運営者は一切の責任を負いかねます。
 </p>
 </div>
 </section>

 <hr className="border-gray-100"/>

 <section>
 <h2 className="text-xl font-serif font-bold text-navy-950 mb-4 flex items-center gap-3">
 <span className="flex-shrink-0 w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-sm font-bold text-navy-600">8</span>
 プライバシーポリシーの変更
 </h2>
 <p className="text-navy-700 leading-[2] pl-11">
 当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、
 本ポリシーの内容を適宜見直しその改善に努めます。
 修正された最新のプライバシーポリシーは、常に本ページにて開示されます。
 </p>
 </section>

 <div className="mt-16 pt-8 border-t-2 border-navy-100 text-sm text-navy-500">
 <p>制定日：2026年2月26日</p>
 <p className="mt-1">Kaisyoku 運営事務局</p>
 </div>
 </div>
 </div>
 </div>
 );
}
