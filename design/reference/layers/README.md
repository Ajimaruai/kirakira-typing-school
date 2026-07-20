# face / body レイヤー v1

正式マスター`../main-character-master-v1.png`に位置を合わせて制作した、最初のbaseレイヤー原本です。原本PNGは制作・再書き出し用にこの場所で管理し、公開用には透明情報を保持したlossless WebPを使用します。

| ファイル | サイズ | 透明情報 | 位置検査 | 状態 |
| --- | --- | --- | --- | --- |
| `face-v1.png` | 704 × 1208 | RGBA・四隅透明 | 目と顔の中心がマスターと数px以内 | 採用 |
| `body-v1.png` | 704 × 1208 | RGBA・四隅透明 | 首、手、脚の位置が概ね一致 | 採用 |

## 公開用素材

- `public/assets/avatar/base/face.webp`
- `public/assets/avatar/base/body.webp`

既存のSVGとCSSアバターはフォールバック用に残します。hair、outfit、shoesの必須レイヤーが揃うまでは、アプリの表示は安全に`cssFallback`のままです。
