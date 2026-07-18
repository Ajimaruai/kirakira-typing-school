"use client";

import { Avatar } from "@/components/Avatar";
import { avatarItems, categoryLabels, rarityLabels } from "@/data/items";
import type { AvatarCategory, AvatarSelection } from "@/features/avatar/types";
import type { PurchaseStatus } from "@/features/inventory/shop";
import { useState } from "react";

const categories: Array<Extract<AvatarCategory, "hair" | "outfit" | "shoes" | "accessory">> = ["hair", "outfit", "shoes", "accessory"];

type Props = {
  avatar: AvatarSelection;
  coins: number;
  ownedItemIds: string[];
  unlockedItemIds: string[];
  activeCategory: typeof categories[number];
  onCategory: (category: typeof categories[number]) => void;
  onSelect: (category: AvatarCategory, id: string) => void;
  onPurchase: (itemId: string) => PurchaseStatus;
  onHome: () => void;
};

const purchaseMessages: Record<PurchaseStatus, string> = {
  purchased: "おかいもの できたよ！ クローゼットに なかま入り♪",
  alreadyOwned: "もう もっているアイテムだよ",
  notEnoughCoins: "コインがたりないよ。タイピングで ためてみよう♪",
  notForSale: "このアイテムは ステージのごほうびだよ",
  locked: "もうすこし ステージを進めると ひらくよ",
  notFound: "アイテムを みつけられなかったよ",
};

export function DressUpScreen({ avatar, coins, ownedItemIds, unlockedItemIds, activeCategory, onCategory, onSelect, onPurchase, onHome }: Props) {
  const items = avatarItems.filter((item) => item.category === activeCategory);
  const [shopMessage, setShopMessage] = useState("ほしいアイテムを えらんでね");
  const buy = (itemId: string) => setShopMessage(purchaseMessages[onPurchase(itemId)]);
  return (
    <main className="dressup-screen screen-enter" data-testid="dressup-screen">
      <div className="dressup-header"><button className="icon-button" onClick={onHome} aria-label="ホームへもどる">←</button><div><span className="eyebrow">CLOSET & SHOP</span><h1>きせかえショップ</h1></div><span className="shop-coin"><i>●</i><b data-testid="shop-coin-count">{coins}</b> コイン</span></div>
      <div className="dressup-layout">
        <section className="mirror-area"><div className="mirror"><Avatar selection={avatar} size="large" /></div><p>わたしだけの コーデを つくろう♪</p><div className="shop-message" role="status" data-testid="shop-message">{shopMessage}</div></section>
        <section className="closet">
          <div className="category-tabs" role="tablist" aria-label="着せ替えカテゴリ">
            {categories.map((category) => <button key={category} role="tab" aria-selected={activeCategory === category} onClick={() => onCategory(category)}>{category === "hair" ? "✂" : category === "outfit" ? "♚" : category === "shoes" ? "♟" : "★"}<span>{categoryLabels[category]}</span></button>)}
          </div>
          <div className="item-grid">
            {items.map((item) => {
              const owned = ownedItemIds.includes(item.itemId);
              const unlocked = unlockedItemIds.includes(item.itemId);
              const selected = avatar[item.category] === item.itemId;
              const forSale = item.rewardType !== "stageReward";
              return <article key={item.itemId} className={`item-card item-card--${item.rarity} ${selected ? "item-card--selected" : ""} ${owned ? "item-card--owned" : ""}`} data-testid={`item-${item.itemId}`}>
                <span className={`rarity-badge rarity-badge--${item.rarity}`}>{rarityLabels[item.rarity]}</span>
                <span className="item-icon" aria-hidden="true">{item.icon}</span>
                <b>{item.name}</b>
                <small>{item.description}</small>
                {!owned && forSale && <span className="price-badge"><i>●</i>{item.price}</span>}
                {owned ? <button className="item-action item-action--owned" onClick={() => onSelect(item.category, item.itemId)} disabled={selected} data-testid={`select-${item.itemId}`}>{selected ? "えらんでるよ" : "えらぶ"}</button>
                  : !forSale ? <span className="reward-only">🎁 ステージのごほうび</span>
                  : !unlocked ? <span className="reward-only">🔒 もうすこしで解放</span>
                  : <><button className="item-action item-action--buy" onClick={() => buy(item.itemId)} disabled={coins < item.price} data-testid={`buy-${item.itemId}`}>かう</button>{coins < item.price && <em>コインがたりないよ</em>}</>}
              </article>;
            })}
          </div>
        </section>
      </div>
      <button className="primary-button done-button" onClick={onHome}>できあがり！</button>
    </main>
  );
}
