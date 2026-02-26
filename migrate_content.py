#!/usr/bin/env python3
"""Migrate content to production WordPress at kaisyoku.tonkotsu.jp"""
import urllib.request
import json
import base64

WP_URL = "http://kaisyoku.tonkotsu.jp"
USER = "shun"
APP_PASSWORD = "wNGQ xqn4 Ef1k qgdQ 9b3q zr0D"

credentials = base64.b64encode(f"{USER}:{APP_PASSWORD}".encode()).decode()
headers = {
    "Authorization": f"Basic {credentials}",
    "Content-Type": "application/json"
}

def api_post(endpoint, data):
    url = f"{WP_URL}/wp-json/wp/v2/{endpoint}"
    req = urllib.request.Request(url, data=json.dumps(data).encode(), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode())
            return result
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"  Error {e.code}: {body[:200]}")
        # If term already exists, try to extract ID
        try:
            err = json.loads(body)
            if err.get("code") == "term_exists":
                return {"id": err["data"]["term_id"]}
        except:
            pass
        return None

# Step 1: Create category
print("=== Creating Category ===")
cat = api_post("categories", {"name": "会食マナー", "slug": "kaishoku-manner"})
if cat:
    cat_id = cat["id"]
    print(f"  Category ID: {cat_id}")
else:
    cat_id = 1
    print(f"  Using default category ID: {cat_id}")

# Step 2: Create tags
print("\n=== Creating Tags ===")
tag_names = ["接待", "幹事", "マナー", "リスク管理", "完全ガイド"]
tag_ids = []
for name in tag_names:
    tag = api_post("tags", {"name": name})
    if tag:
        tag_ids.append(tag["id"])
        print(f"  Tag '{name}' -> ID: {tag['id']}")
    else:
        print(f"  Failed to create tag '{name}'")

# Step 3: Create article
print("\n=== Creating Article ===")
article_content = """
<!-- wp:paragraph -->
<p>「来週、部長の接待の幹事を頼まれた…」</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな一言で胃が痛くなった経験はありませんか？ 接待の幹事は、ビジネスパーソンにとって避けては通れない試練です。しかし、正しい準備さえすれば、接待は「恐怖のイベント」から「信頼を勝ち取るチャンス」に変わります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>この記事では、接待幹事が「絶対に失敗しない」ための準備を、1週間前から当日、そして翌日のフォローアップまで、時系列で完全網羅します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>接待の1週間前｜「情報収集」が最重要</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>接待の成功は、当日ではなく「1週間前」に決まります。 まず最初にすべきは、接待相手の情報収集です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>相手の「食のNG」を事前に把握する</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
<li><strong>アレルギー情報</strong>：甲殻類、そば、小麦など、命に関わる情報は最優先で確認</li>
<li><strong>苦手な食材</strong>：パクチー、レバーなど、好き嫌いも重要な情報</li>
<li><strong>宗教上の制約</strong>：ハラール、コーシャなど、海外のお客様の場合は必須</li>
<li><strong>お酒の好み</strong>：飲めない方への配慮も忘れずに</li>
</ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>プロの幹事は、秘書や共通の知人を通じてさりげなく確認します。</strong> 直接聞くのが難しい場合は、「お食事の好みを伺えますか？」と丁寧にメールで聞くのもアリです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>接待の5日前｜「店選び」の3つの鉄則</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>情報が集まったら、次は店選びです。接待の店選びには、3つの絶対条件があります。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>鉄則①：完全個室であること</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>「個室あり」と書いてあっても、<strong>簾（すだれ）仕切りや半個室は論外</strong>です。天井まで壁があり、ドアが閉まる「完全個室」を選びましょう。商談内容が漏れるリスクを100%排除するためです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>鉄則②：静かであること</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>隣の部屋の宴会の声が聞こえるようでは、ビジネスの話はできません。<strong>防音性の高い個室</strong>を選ぶことで、会話に集中できる環境を確保します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>鉄則③：アクセスが良いこと</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>相手の会社やホテルから<strong>タクシーで10分以内</strong>が理想です。駅からの距離よりも、相手の出発地点からの所要時間を基準に考えましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>接待の前日｜最終確認チェックリスト</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>前日は、以下のチェックリストで最終確認を行います。ここで見落としがあると、当日取り返しがつきません。</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list">
<li><strong>予約の最終確認</strong>：店に電話して、日時・人数・コース内容を再確認</li>
<li><strong>アレルギー情報の共有</strong>：収集した食のNG情報を店に伝達</li>
<li><strong>支払い方法の確認</strong>：領収書の宛名、クレジットカードの利用可否</li>
<li><strong>手土産の準備</strong>：相手の好みや会社の規定に配慮した品を用意</li>
<li><strong>二次会の候補</strong>：求められた場合に備え、近隣のバーを1-2軒リサーチ</li>
</ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>接待当日｜「30分前行動」で差がつく</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>当日は、<strong>最低でも30分前には店に到着</strong>しましょう。この30分がプロとアマの幹事の差を生みます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>到着後にやること</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
<li><strong>個室の確認</strong>：空調、照明、座席の配置を確認し、上座の位置を把握</li>
<li><strong>担当者への挨拶</strong>：配膳のタイミングや声のかけ方について打ち合わせ</li>
<li><strong>支払いの段取り</strong>：食事中にスマートに退席して会計を済ませるルートを確認</li>
<li><strong>名刺交換のスペース</strong>：入口付近に名刺交換できるスペースがあるか確認</li>
</ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>接待の翌日｜フォローアップで「次」につなげる</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>接待は、翌日のフォローアップまでがセットです。翌朝一番に、<strong>お礼のメールまたは電話</strong>を入れましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>内容は簡潔に、しかし「昨日のお料理、○○がお口に合ったようで安心しました」のように、<strong>相手をよく観察していたことが伝わる一言</strong>を添えると、格段に印象が良くなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>接待の幹事は、決して簡単な仕事ではありません。しかし、この記事で紹介した準備を一つひとつ実行すれば、「あの人に任せれば安心だ」と言われる幹事になれるはずです。</p>
<!-- /wp:paragraph -->
"""

post_data = {
    "title": "【保存版】初めての接待幹事が絶対に失敗しない「完全準備マニュアル」",
    "content": article_content,
    "status": "publish",
    "slug": "first-time-kanji-guide",
    "categories": [cat_id],
    "tags": tag_ids,
    "excerpt": "接待の幹事を任されて不安なあなたへ。1週間前の情報収集から当日の30分前行動、翌日のフォローアップまで、初めての接待幹事が「絶対に失敗しない」完全準備マニュアルを時系列で徹底解説。"
}

result = api_post("posts", post_data)
if result and result.get("id"):
    print(f"  SUCCESS! Post ID: {result['id']}")
    print(f"  Slug: {result.get('slug', 'N/A')}")
    print(f"  Status: {result.get('status', 'N/A')}")
    print(f"  URL: {result.get('link', 'N/A')}")
else:
    print(f"  Failed to create post")

print("\n=== Migration Complete ===")
