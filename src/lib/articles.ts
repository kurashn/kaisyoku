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
    title: "絶対に失敗しない！会食での「上座・下座」完全マニュアル",
    excerpt: "円卓、タクシー、エレベーター...迷いやすい座次ルールの基本と、例外ケースのスマートな対応方法。",
    slug: "dining-manners-seating-rules",
    category: "会食マナー",
    categorySlug: "manners",
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
    location: "マナー・知識",
    features: ["上座・下座", "タクシー", "エレベーター"],
    publishedAt: "2024-02-15",
    content: `
      <h2>「上座・下座」はビジネスの基本中の基本</h2>
      <p>会食において、席次は相手への敬意を示す最も重要な要素の一つです。間違えれば一瞬で信頼を失うリスクがあります。<br>ここでは、基本ルールから迷いやすいシチュエーションまで、完全網羅して解説します。</p>

      <h2>1. 基本的なルール</h2>
      <p>大原則として、<strong>「出入口から最も遠い席が上座」「最も近い席が下座」</strong>となります。これはどの空間でも共通する考え方です。</p>

      <h2>2. 迷いやすいケース別対応</h2>
      <ul>
        <li><strong>景色が良い部屋</strong>：大原則よりも「景色がよく見える席」を上座とするケースがあります。臨機応変に対応しましょう。</li>
        <li><strong>円卓の場合</strong>：入口から最も遠い席が上座、以降は上座から見て「左→右→左→右...」の順に座ります。</li>
        <li><strong>タクシーの場合</strong>：運転席の後ろが上座、助手席の後ろ、後部座席の中央、助手席が下座となります。</li>
        <li><strong>エレベーターの場合</strong>：操作盤の前が下座。奥が上座となります。</li>
      </ul>

      <h2>3. 重要なのは「臨機応変」な気遣い</h2>
      <p>ルールは基本ですが、時には「相手が最も心地よい席」を選ぶことが最優先です。空調の風が直接当たる席や、外の景色を楽しみたいゲストへの配慮など、マニュアルに捉われない「おもてなしの心」が成功の鍵となります。</p>
    `
  },
  {
    title: "【特集】AI時代に生き残るビジネスパーソンの「人間力」",
    excerpt: "テクノロジーが進化するほど、泥臭い「会食」の価値が上がっている理由を探る。",
    slug: "special-ai-human-connection",
    category: "特集記事",
    categorySlug: "special",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    location: "コラム",
    features: ["特集", "AI活用", "ビジネススキル"],
    publishedAt: "2024-02-18",
    content: `
      <h2>なぜ今、会食なのか？</h2>
      <p>業務連絡はツールで完結し、商談すらオンラインで済む時代。だからこそ、わざわざ時間を共有し、共に食事をする「会食」は、テキストには乗らない「人間性」を確認し合う究極のアナログフィルターとなっています。</p>
    `
  },
  {
    title: "接待で使える！絶対外さない「手土産」リスト2024",
    excerpt: "常温保存可、日持ちする、かさばらない。三拍子揃ったエグゼクティブ向けの手土産を厳選。",
    slug: "excellent-business-gifts",
    category: "準備・ツール",
    categorySlug: "tools",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    location: "準備",
    features: ["手土産", "常温", "日持ち"],
    publishedAt: "2024-02-17",
    content: `
      <h2>手土産は「渡した後」まで想像する</h2>
      <p>相手が電車で帰るのか、運転手付きの車なのか。家族構成はどうか。手土産一つで、あなたの「想像力」が試されています。</p>
    `
  },
  {
    title: "【シーン別】絶対に失敗できない「顔合わせ」進行マニュアル",
    excerpt: "両家顔合わせの店選びから、当日の進行、話題作りのコツまで。",
    slug: "scene-family-meeting-guide",
    category: "シーンから探す",
    categorySlug: "scene",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    location: "ノウハウ",
    features: ["顔合わせ", "進行", "話題作り"],
    publishedAt: "2024-02-16",
    content: `
      <h2>ビジネス以上の緊張感</h2>
      <p>「顔合わせ」は一生に一度の重要なイベントです。和やかで品のある空間作りが求められます。</p>
    `
  },
  {
    title: "「ドタキャン」された時の完全リカバリー術",
    excerpt: "会食当日の突然のキャンセル。店への連絡、相手へのフォロー、キャンセル料の扱いを解説。",
    slug: "trouble-sudden-cancellation",
    category: "トラブル回避",
    categorySlug: "trouble",
    imageUrl: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&q=80&w=800",
    location: "対応策",
    features: ["ドタキャン対応", "キャンセル料", "フォロー"],
    publishedAt: "2024-02-14",
    content: `
      <h2>ピンチはチャンスになる</h2>
      <p>トラブル時のスマートな対応こそが、ビジネスパーソンとしての器を示します。決して感情的にならず、機械的かつ丁寧に処理しましょう。</p>
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
