# キラキラタイピング学園（最小試作版）

小学5年生のタイピング完全初心者向けに作った、学園・着せ替えテーマのタイピング練習Webアプリです。

練習そのものを目的にしすぎず、ちびキャラの着せ替えやアイテム獲得を楽しみながら、自然にキーボードに慣れる体験を目指しています。

## 使用技術

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- LocalStorage（ブラウザ内の保存）

## 起動方法（最初から）

### 1. Node.jsを入れる

[Node.js公式サイト](https://nodejs.org/)から、Node.js 22.13以上をインストールします。インストール後、ターミナルで次を実行します。

```bash
node --version
```

`v22.13.0`以上の数字が表示されれば準備完了です。

### 2. pnpmを入れる

ターミナルで次を実行します。

```bash
npm install -g pnpm
```

### 3. このフォルダへ移動する

```bash
cd path/to/kirakira-typing-school
```

### 4. 必要なパッケージを入れる

```bash
pnpm install
```

### 5. 開発サーバーを起動する

```bash
pnpm dev
```

### 6. ブラウザで開く

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

終了するときは、ターミナルで `Control` キーを押しながら `C` キーを押します。

## 現在できること

- ホームで所持コインと今日のレベルを確認
- 「あそぶ」からレベル・ステージ選択へ移動
- 4レベル・全12ステージを順番に解放
- 1文字、ローマ字2文字、短いローマ字単語に対応
- 次に押すキーを仮想キーボード上で確認
- 正解時のキラキラ演出と、ミス時のやさしい案内
- 12問中8問以上でクリア、正解数に応じた星1〜3評価
- ステージごとの最高星、クリア状況、次ステージ解放を保存
- 初回クリア・星3のボーナスコインと一部ステージのアイテム報酬
- レベル内の全ステージクリアで次レベルを解放
- 髪型・服・靴・アクセサリーの着せ替え
- 37種類のアイテムを、クローゼット兼ショップで確認
- コインでショップアイテムを購入し、購入済みアイテムを装備
- スターター〜レジェンドまで6段階のレア度と価格表示
- コイン不足やステージ報酬品をやさしいメッセージで案内
- コイン、進行、所持品、着せ替えをLocalStorageへ自動保存

## 主なフォルダ

- `app/`: Next.jsのページと全体スタイル
- `components/`: 4画面、アバター、ステータス表示
- `features/game/`: ゲームの型と星評価ロジック
- `features/avatar/`: アバター構造
- `features/inventory/`: アイテム所持の構造
- `features/inventory/shop.ts`: 購入条件、コイン消費、所持品追加
- `features/progress/`: 進行データと保存方法
- `data/levels.ts`: レベル、ステージ、12問の問題、解放条件
- `data/rewards.ts`: ステージ報酬
- `data/items.ts`: 着せ替えアイテム

## レベル設計

| レベル | 習得テーマ | ステージ |
| --- | --- | --- |
| Lv.1 はじめてのキーさがし | ホームポジション付近 | A/S/K、D/F/J/L、7キー混合 |
| Lv.2 母音のキー | A/I/U/E/O | 母音の基本、混合、ミニテスト |
| Lv.3 ローマ字の入口 | 2文字のつながり | KA行、SA行、KA・SA行混合 |
| Lv.4 短いことば | ローマ字単語 | neko、inu、ことば混合 |

各ステージは12問です。8〜9問正解で星1、10〜11問で星2、12問で星3になります。レベル内の3ステージをすべてクリアすると、次のレベルが解放されます。

## ステージを追加する方法

### 1. `data/levels.ts`を開く

追加したいレベルの `stages` 配列に、次の形のデータを追加します。

```ts
{
  id: "4-4",
  code: "4-4",
  name: "やさいの名前",
  description: "kome・mame など",
  questionType: "romajiWord",
  durationSeconds: 60,
  clearCorrect: 8,
  questions: questions("4-4", "romajiWord", ["kome", "mame"], "ことばをよく見て"),
  rewardId: "standard",
  unlockCondition: { type: "stageCleared", stageId: "4-3" },
}
```

### 2. 問題タイプを選ぶ

- `singleKey`: Aなどの1文字
- `romajiSyllable`: kaなどのローマ字音節
- `romajiWord`: nekoなどのローマ字単語
- `phrase`: 将来の短文用。型だけ用意してあり、表示・採点は今後拡張します

### 3. 報酬を選ぶ

`rewardId`には `data/rewards.ts`の報酬IDを指定します。新しい報酬を作る場合は、通常コイン・初回ボーナス・星3ボーナス・アイテムIDを同ファイルへ追加します。

難易度別の現在のコイン設定は次のとおりです。

| レベル | 基本 | 初回クリア | 星3 |
| --- | ---: | ---: | ---: |
| Lv.1 | 20 | +15 | +5 |
| Lv.2 | 25 | +20 | +8 |
| Lv.3 | 35 | +25 | +10 |
| Lv.4 | 45 | +35 | +15 |
| Lv.5用ひな形 | 60 | +40 | +20 |

### 4. 解放条件を決める

- `levelUnlocked`: レベルが開いたときから遊べる
- `stageCleared`: 指定ステージのクリア後に開く
- `levelCleared`: 指定レベルを全クリアすると開く

問題文・報酬・解放条件は画面コンポーネントへ直接書かず、データファイルで管理します。

## 着せ替えアイテムを追加する方法

`data/items.ts`の`avatarItems`へ、次の形式で追加します。

```ts
{
  itemId: "accessory-example",
  name: "雲のブローチ",
  category: "accessory",
  rarity: "uncommon",
  price: 180,
  ownedByDefault: false,
  unlockCondition: { type: "always" },
  rewardType: "shop",
  visualType: "emoji",
  visualConfig: { styleKey: "cloud-brooch", symbol: "☁️" },
  icon: "☁️",
  description: "制服につけるふわふわブローチ",
}
```

- `category`: `hair`、`outfit`、`shoes`、`accessory`
- `ownedByDefault`: 最初から所持させる場合は`true`
- `unlockCondition`: `always`、指定ステージクリア、指定レベル解放
- `rewardType`: `shop`、`stageReward`、`both`
- `visualType`と`visualConfig`: CSS、絵文字、画像レイヤーの表示方法を指定します

## アバター画像レイヤーを追加する方法

現在のCSS・絵文字アバターは残したまま、`layeredImage`形式の画像素材も使えます。画像が未設定、または読み込みに失敗した場合は、`styleKey`、`symbol`、`icon`を使った従来表示へ戻るため、アイテムを1点ずつ安全に画像化できます。

### 画像素材の置き場所

画像は`public/assets/avatar/`以下へ置きます。

```text
public/assets/avatar/
├── base/          顔や基本ボディ
├── hair/          髪型レイヤー
├── outfits/       服レイヤー
├── shoes/         靴レイヤー
├── accessories/   アクセサリー
├── pets/          将来のペット
├── backgrounds/   将来の背景
└── thumbnails/    ショップ・報酬画面用の正方形画像
```

アバターへ重ねる画像は、すべて同じ基準キャンバスにしてください。現在の表示基準座標は`176 × 302`です。Webアプリへ組み込むレイヤー画像は、その4倍である`704 × 1208 px`を標準とします。これはlarge表示の4倍なので、高密度ディスプレイでも十分な精細さを保ちつつ、GitHub Pagesで読み込むファイル容量を抑えやすいサイズです。

画像生成や手直し用にさらに大きな原画が必要な場合は、6倍の`1056 × 1812 px`で制作し、位置を動かさず`704 × 1208 px`へ縮小してWeb用に書き出します。6倍の制作原画は`public`へ置かず、別途保管してください。

### 画像制作の共通ルール

- レイヤー画像は透明背景のWebP（アルファチャンネル付き）を基本とします。
- body、face、髪、服、靴、アクセサリーは、すべて`704 × 1208 px`の同じ全身キャンバスで書き出します。
- 靴だけ、服だけの画像でも、パーツの周囲で切り抜いたり自動トリミングしたりしません。
- すべてのレイヤーを同じ原点・同じ中心・同じ足元位置に合わせます。
- 画像の外側は完全な透明にし、白い背景や色付き背景を残しません。
- サムネイルだけは例外で、ショップ表示用の`512 × 512 px`の正方形画像とします。
- ファイル名には既存の`itemId`を使用し、LocalStorageと対応する`itemId`は変更しません。
- 書き出し時にキャンバスのリサイズ、位置移動、自動クロップが起きていないことを確認します。

### 最初の高品質素材セット

最初の動作確認セットでは、次のレイヤーを同時に揃えます。`accessory-big-ribbon`という新しいIDは作らず、既存の`itemId`である`accessory-ribbon`をファイル名に使います。

| 役割 | 保存先 | キャンバス | 内容 |
| --- | --- | --- | --- |
| 基本ボディ | `public/assets/avatar/base/body.webp` | 704 × 1208 | 首、腕、手、脚など、服と靴の下になる素体 |
| 顔 | `public/assets/avatar/base/face.webp` | 704 × 1208 | 顔の輪郭、耳、目、口、頬。髪は含めない |
| 後ろ髪 | `public/assets/avatar/hair/hair-bob-back.webp` | 704 × 1208 | 顔・体の後ろへ回る髪 |
| 前髪 | `public/assets/avatar/hair/hair-bob-front.webp` | 704 × 1208 | 頭頂部、横髪、前髪 |
| 制服 | `public/assets/avatar/outfits/outfit-uniform.webp` | 704 × 1208 | 素肌や髪を含まない制服レイヤー |
| 靴 | `public/assets/avatar/shoes/shoes-brown.webp` | 704 × 1208 | 左右の靴だけを足元の正しい位置へ配置 |
| 大きなリボン | `public/assets/avatar/accessories/accessory-ribbon.webp` | 704 × 1208 | 既存アイテム`accessory-ribbon`の装飾 |
| 髪サムネイル | `public/assets/avatar/thumbnails/hair-bob.webp` | 512 × 512 | `hair-bob`の商品画像 |
| 制服サムネイル | `public/assets/avatar/thumbnails/outfit-uniform.webp` | 512 × 512 | `outfit-uniform`の商品画像 |
| 靴サムネイル | `public/assets/avatar/thumbnails/shoes-brown.webp` | 512 × 512 | `shoes-brown`の商品画像 |
| リボンサムネイル | `public/assets/avatar/thumbnails/accessory-ribbon.webp` | 512 × 512 | `accessory-ribbon`の商品画像 |

`accessory-none`は「何も表示しない」状態なので、新しい高品質画像は不要です。現在の透明SVGをそのままフォールバックとして残します。

### `renderMode="auto"`による表示切り替え

`Avatar`は標準で`renderMode="auto"`を使用し、内部では`cssFallback`と`layeredAvatar`の2状態を自動的に切り替えます。

1. body、face、hairBack、hairFront、outfit、shoesの必須画像がすべて設定されているか確認します。
2. 必須画像がすべて正常に読み込めた後だけ、CSSの髪・顔・体・腕・脚・靴を非表示にします。
3. 1枚でも未設定または読込失敗なら、画像一式を隠して従来のCSSアバターへ戻します。
4. アクセサリーは任意とし、`accessory-none`でも完成セットとして扱います。

画像の読み込みが終わる前にCSS版を隠すと、通信中にアバターが消えたり、完成画像とCSSの輪郭が混ざったりします。全必須画像の成功後に一度に切り替えることで、制作途中や通信失敗時も安全な表示を保ちます。

bodyとfaceは購入・装備する商品ではないため、`data/items.ts`には追加しません。共通パスは`data/avatarBase.ts`で管理します。購入状態や装備状態を保存するLocalStorageの形式には影響しません。

### ファイル名ルール

保存データと対応を確認しやすくするため、ファイル名には既存の`itemId`を使います。

```text
hair-bob.webp
outfit-uniform.webp
shoes-brown.webp
accessory-ribbon.webp
```

髪が顔の後ろと前に分かれる場合は、次のようにします。

```text
hair-bob-back.webp
hair-bob-front.webp
```

`itemId`は購入状態と装備状態としてLocalStorageへ保存されています。既存の`itemId`を変更すると、以前に入手・装備したアイテムを見つけられなくなるため、画像を差し替えるときも変更しません。

### `data/items.ts`へ画像を登録する

画像が完成したアイテムの`visualType`を`layeredImage`にし、サムネイルとレイヤーを登録します。

```ts
visualType: "layeredImage",
visualConfig: {
  // 画像がないときに使う既存CSS設定も残します。
  styleKey: "bob",
  accent: "#6d4553",
  thumbnailSrc: "/assets/avatar/thumbnails/hair-bob.webp",
  layers: [
    {
      slot: "hairBack",
      src: "/assets/avatar/hair/hair-bob-back.webp",
    },
    {
      slot: "hairFront",
      src: "/assets/avatar/hair/hair-bob-front.webp",
    },
  ],
},
```

使用できる`slot`は次の9種類です。配列の順番ではなく、このslot順で重なります。

```text
hairBack → body → shoes → outfit → face → hairFront → accessory → pet → effect
```

サムネイルは正方形を推奨します。レイヤー画像は透明背景のPNG、WebP、SVGを利用できます。制作元の大きな原画ファイルは`public`へ置かず、Web表示用に書き出したファイルだけを配置してください。

### CSS表示との切り替え

- `visualType: "css"`: 従来のCSSパーツを表示
- `visualType: "emoji"`: 従来の絵文字アクセサリーを表示
- `visualType: "layeredImage"`: `renderMode="auto"`の完成判定へ使う画像レイヤーを登録
- `thumbnailSrc`がない、または画像読み込みに失敗: `icon`の絵文字へ戻る
- 必須slotが不足、読込中、または読込失敗: 画像一式を隠して従来のCSSアバターを表示
- 必須slotがすべて読込成功: CSS版を隠して画像レイヤーだけを表示

現在は`hair-bob`、`outfit-uniform`、`shoes-brown`、`accessory-none`と共通baseだけをテスト用の透明SVGで設定しています。`hairBack`を含む完成セットはまだ揃っていないため、見た目は従来のCSS版から変わりません。

### GitHub Pagesでの画像パス

GitHub Pagesでは公開URLに`/kirakira-typing-school`が入ります。コンポーネント内でURLを直接連結せず、`features/avatar/assets.ts`の`getAssetPath()`を必ず使ってください。

`data/items.ts`にはローカルと共通の`/assets/avatar/...`形式で記載します。ビルド時に`next.config.ts`が公開用のbasePathを`NEXT_PUBLIC_BASE_PATH`へ渡すため、ローカルでは`/assets/avatar/...`、GitHub Pagesでは`/kirakira-typing-school/assets/avatar/...`として読み込まれます。

### 新しい高品質素材を追加する手順

1. 既存の`itemId`を確認します。
2. 共通キャンバス上で透明背景のレイヤー画像を制作します。
3. bodyとfaceを`public/assets/avatar/base/`へ置き、`data/avatarBase.ts`のパスをWebPへ変更します。
4. 髪、服、靴、アクセサリーを`public/assets/avatar/`内の各カテゴリへ置きます。
5. `public/assets/avatar/thumbnails/`へ正方形サムネイルを置きます。
6. `data/items.ts`で対象アイテムの`layers`と`thumbnailSrc`を完成画像のパスへ変更します。
7. ブラウザ開発者ツールで`data-avatar-display-mode="layeredAvatar"`になっていることを確認します。
8. 画像パスを一時的に誤った名前へ変え、`cssFallback`へ安全に戻ることを確認してから元へ戻します。
9. ホーム、着せ替え、タイピング、クリアのlarge・medium・small表示で、位置と切り抜けを確認します。
10. `PAGES_BASE_PATH=/kirakira-typing-school pnpm run build:pages`で公開用パスも確認します。

### レア度と価格

| レア度 | 価格目安 |
| --- | ---: |
| `starter` | 0（最初から所持） |
| `common` | 50〜90 |
| `uncommon` | 120〜220 |
| `rare` | 350〜600 |
| `superRare` | 900〜1,500 |
| `legendary` | 2,500〜4,000 |

購入処理は`features/inventory/shop.ts`に分離しています。購入時は、所持済みか、販売対象か、解放済みか、コインが足りるかを順番に確認します。成功した場合だけコインを引き、`ownedItemIds`へ追加します。その後の自動保存は従来どおり`PlayerStorage`が担当します。

## 動作確認用コマンド

```bash
pnpm build
pnpm test
pnpm lint
```

`pnpm build`または`npm run build`を実行すると、GitHub Pagesで公開できる静的ファイルが`out/`に作られます。`out/`は生成物なのでGitへは追加しません。

## GitHubへ安全にアップロードする手順（A）

最初はWeb公開を有効にせず、コードだけをGitHubへ保存します。

1. GitHubへログインします。パスワード、トークン、認証コードはチャットへ貼らず、GitHubの画面だけで入力してください。
2. 右上の`+`から`New repository`を選びます。
3. Repository nameには`kirakira-typing-school`がおすすめです。
4. 無料プランでGitHub Pagesまで進む場合は`Public`を選びます。公開前の確認だけなら、いったん`Private`でも構いません。
5. `Add a README file`、`.gitignore`、Licenseは追加せず、空のリポジトリとして作成します。このプロジェクトにはすでにREADMEと.gitignoreがあります。
6. 作成後に表示されるHTTPS形式のリポジトリURLを控えます。認証情報を含むURLは使いません。

リポジトリURLを確認してから、次のコマンドを実行します。実行前に必ず`git status`で対象ファイルを確認してください。

```bash
git add .
git status
git commit -m "Initial release of Kirakira Typing School"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/YOUR-REPOSITORY.git
git push -u origin main
```

認証画面が出た場合は、ブラウザまたはGitHubの案内画面で本人が操作します。パスワードやコードをターミナルの共有ログやチャットへ貼らないでください。

## GitHub Pagesで公開する手順（B）

Aのアップロードが完了し、GitHub上のファイルに個人情報や秘密情報がないことをもう一度確認してから進めます。

1. `.github/workflows/deploy-pages.yml.example`を`.github/workflows/deploy-pages.yml`へ変更します。
2. その変更をコミットしてGitHubへpushします。
3. GitHubのリポジトリ画面で`Settings`を開きます。
4. 左側の`Pages`を開きます。
5. `Build and deployment`の`Source`で`GitHub Actions`を選びます。
6. `Actions`タブで`Deploy Next.js static export to GitHub Pages`が成功するまで待ちます。
7. 成功後、`Settings`→`Pages`に表示されたURLを開きます。

通常のプロジェクトリポジトリなら公開URLは`https://YOUR-NAME.github.io/YOUR-REPOSITORY/`です。ワークフローがリポジトリ名を自動的に`basePath`へ渡すため、現在の設定ファイルにリポジトリ名を固定する必要はありません。

### AとBの違い

| 案 | できること | 公開範囲 |
| --- | --- | --- |
| A. コードだけアップロード | バックアップ、変更履歴の保存 | Publicならコードを誰でも閲覧。Privateなら許可した人だけ |
| B. GitHub Pagesまで公開 | 子どもがURLを開いて遊べる | Webサイトはインターネットへ公開 |

このアプリの進行、コイン、購入品、着せ替えはブラウザごとのLocalStorageに保存されます。サーバーへ個人情報を送信しません。ただし、別の端末や別のブラウザにはデータが引き継がれず、ブラウザデータを消すと進行も消えます。

## 将来の保存先変更

画面はLocalStorageを直接操作せず、`PlayerStorage`という窓口を通します。旧バージョンのコイン、着せ替え、所持品も自動移行します。将来Supabaseなどに移行するときは、この窓口を実装した保存クラスへ差し替えられます。
