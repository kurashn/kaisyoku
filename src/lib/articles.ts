export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  category: string;
  categorySlug: string;
  imageUrl: string;
  location: string;
  features: string[];
  publishedAt: string;
}

export const articles: Article[] = [
  {
    title: "【新宿】個室確約！接待・会食に使える「絶対に静かな」和食店5選",
    excerpt: "新宿の喧騒を忘れる完全個室だけを厳選。隣の席の声が聞こえない防音レベルを独自調査しました。",
    slug: "shinjuku-private-room-washoku",
    category: "エリアガイド",
    categorySlug: "area",
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    location: "新宿エリア",
    features: ["個室", "静音", "和食"],
    publishedAt: "2024-02-10",
    content: `
      <h2>新宿での会食、最大の敵は「騒音」である</h2>
      <p>「個室で予約したのに、上部が空いていて隣の宴会の声が丸聞こえだった...」<br>新宿エリアの居酒屋や和食店で、このような苦い経験をしたことはありませんか？</p>
      <p>重要な商談や、絶対に外せない接待において、<strong>「静寂」はお金で買うべき最も重要なリソース</strong>です。<br>今回は、Kaisyoku編集部が実際に足を運び、騒音計片手に「真の防音個室」があるお店だけを厳選しました。</p>

      <h2>1. 新宿の接待で「店選び」に失敗する共通点</h2>
      <p>多くの幹事が「個室」という言葉に踊らされ、失敗しています。以下の3つの落とし穴に注意してください。</p>
      <ul>
        <li><strong>「半個室」の罠</strong>：すだれやパーテーションで仕切っただけの席。防音性は皆無です。</li>
        <li><strong>「天井抜け」の罠</strong>：壁はあるが、天井部分が繋がっているタイプ。隣の声が筒抜けになります。</li>
        <li><strong>「BGM」の罠</strong>：静かだと思ったら、大音量のジャズが流れていて会話が聞こえないケース。</li>
      </ul>

      <h2>2. 編集部が厳選した「絶対・防音」の基準</h2>
      <p>今回ご紹介するお店は、以下の厳しい「Kaisyoku基準」をクリアしています。</p>


      <h2>3. 【推奨店】隠れ房 新宿店</h2>
      <p>新宿駅東口、GUCCIの並びにあるビルの7階。<br>エレベーターを降りると、そこは新宿の喧騒とは無縁の「別世界」です。</p>

      <h3>【雰囲気】隣の声が消える？魔法のような遮音性</h3>
      <p>「隠れ房」の最大の特徴は、雪で作ったかまくらのような、白く滑らかな曲線で囲まれた「かまくら個室」です。</p>
      <p>壁の素材は特殊な吸音性を考慮した設計となっており、<strong>店内はBGMがかすかに聞こえる程度の静けさ（約45〜50db）</strong>。これは「静かな図書館」と同レベルの環境です。<br>隣の部屋で宴会が行われていても、気配すら感じさせません。</p>
      
      <div class="my-10">
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" alt="隠れ房 新宿店 内観" class="rounded-xl shadow-lg w-full object-cover h-64 md:h-80" />
        <p class="text-xs text-center text-gray-500 mt-2">※画像はイメージです</p>
      </div>

      <h3>【料理・予算】6,000円で叶う「非日常」</h3>
      <p>接待で使いやすい「季節の会席コース」は6,000円（税込）から。<br>新宿の一等地で完全個室確約、このクオリティでこの価格帯は「破格」と言えます。</p>
      <p>特に締めの<strong>「土鍋ご飯」</strong>は絶品。蓋を開けた瞬間の食材の香りと湯気は、緊張した場の空気を一気に和ませてくれるアイスブレイクの役割も果たします。</p>

      <h2>4. 接待・会食での「隠れ房」活用テクニック</h2>
      <p>このお店のポテンシャルを最大限に引き出す、シチュエーション別の活用法をご提案します。</p>

      <h3>初対面の相手との「アイスブレイク」に</h3>
      <p>「靴を脱ぐ」という行為は、心理学的に「武装解除」を促します。<br>入口で靴を預けてリラックスした状態で席に着くため、初対面の相手とも自然と打ち解けやすくなります。</p>

      <h3>重役クラスの「密談」に</h3>
      <p>壁の厚さと「かまくら」形状による音の反響防止効果により、会話の内容が外に漏れるリスクは極めて低いです。<br>人事案件、M&Aの話、組織改編など、<strong>「絶対に聞かれたくない話」</strong>をする場所として最適です。</p>

      <h2>5. よくある質問 (FAQ)</h2>
      <div class="space-y-6 my-10">
        <div class="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <div class="flex items-center mb-3">
             <span class="bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded mr-3">Q</span>
             <span class="font-bold text-navy-900">喫煙は可能ですか？</span>
          </div>
          <div class="flex items-start">
             <span class="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">A</span>
             <p class="text-sm text-navy-700 leading-relaxed mb-0">店内は完全禁煙です。ただし、同じフロア（徒歩30秒）に清潔な喫煙スペースが完備されていますので、喫煙者のゲストも安心です。</p>
          </div>
        </div>
        <div class="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <div class="flex items-center mb-3">
             <span class="bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded mr-3">Q</span>
             <span class="font-bold text-navy-900">アレルギー対応は可能ですか？</span>
          </div>
          <div class="flex items-start">
             <span class="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">A</span>
             <p class="text-sm text-navy-700 leading-relaxed mb-0">可能です。予約時、または3日前までに連絡すれば、食材変更や別メニューへの差し替えにスムーズに対応してくれます。</p>
          </div>
        </div>
      </div>

      <h2>6. 編集部ランク：S (Ironclad)</h2>
      <p>Kaisyoku編集部としての評価は<strong>「ランクS（鉄板）」</strong>。<br>新宿エリアで、これだけの「静けさ」と「アクセス」を両立し、かつ「6,000円〜8,000円」という現実的な価格帯で利用できる店は極めて貴重です。</p>
      <p>「新宿で店探して」と言われたら、迷わずここを押さえてください。<br>あなたの株が上がることは間違いありません。</p>
    `
  },
  {
    title: "「アレルギー確認」のメール文面テンプレート【コピペOK】",
    excerpt: "失礼にならないアレルギー確認の聞き方とは？ビジネスメールで使える定型文と、返信がない時の催促方法。",
    slug: "allergy-check-email-template",
    category: "会食マナー",
    categorySlug: "manners",
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
    location: "マナー・知識",
    features: ["アレルギー対応", "テンプレート"],
    publishedAt: "2024-02-09",
    content: `
      < h2 > 聞かないとリスク、聞くのも気を使う...</h2>
      < p > アレルギー確認は必須ですが、「好き嫌いありますか？」と聞くのはスマートではありません。</p>
  < h3 > 基本のテンプレート </h3>
  < pre class= "bg-gray-100 p-4 rounded text-sm overflow-x-auto" >
  件名：【ご確認】○○様とのご会食について

○○様

いつも大変お世話になっております。
○○株式会社の山田でございます。

来週の日程で調整しております会食につきまして、
お店の予約にあたり、事前にアレルギーや苦手な食材について
お伺いできればと存じます。

もしございましたら、配慮したお店を選定いたしますので、
ご遠慮なくお申し付けくださいませ。

簡単ではございますが、ご確認のほどよろしくお願いいたします。
</pre>
  `
  },
  {
    title: "東京駅周辺・ランチ会食（3000円〜）おすすめリスト",
    excerpt: "新幹線の時間まで1時間。サクッと、でも失礼のないランチ会食ができる東京駅近のお店まとめ。",
    slug: "tokyo-station-lunch-meeting",
    category: "エリアガイド",
    categorySlug: "area",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    location: "東京駅・丸の内",
    features: ["ランチ", "駅近", "Wifi"],
    publishedAt: "2024-02-08",
    content: `
  < h2 > 時間は短く、質は高く </h2>
    < p > 東京駅周辺でのランチ会食は「スピード」と「質の担保」の両立が求められます。</p>
      `
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return articles.filter((article) => article.category === category);
}

export function getArticlesByCategorySlug(categorySlug: string) {
  return articles.filter((article) => article.categorySlug === categorySlug);
}

export function getAllCategorySlugs() {
  return Array.from(new Set(articles.map(article => article.categorySlug)));
}
