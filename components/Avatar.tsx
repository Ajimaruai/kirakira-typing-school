import { findAvatarItem } from "@/data/items";
import { getAssetPath } from "@/features/avatar/assets";
import type { AvatarSelection } from "@/features/avatar/types";
import type { AvatarImageLayer, AvatarItem, AvatarLayerSlot } from "@/features/inventory/types";
import type { CSSProperties } from "react";

const itemFor = (id?: string) => id ? findAvatarItem(id) : undefined;

export type AvatarSize = "small" | "medium" | "large";

const layerOrder: Record<AvatarLayerSlot, number> = {
  hairBack: 0,
  body: 1,
  shoes: 2,
  outfit: 3,
  face: 4,
  hairFront: 5,
  accessory: 6,
  pet: 7,
  effect: 8,
};

const imageLayersFor = (items: Array<AvatarItem | undefined>) => items
  .flatMap((item) => item?.visualType === "layeredImage" ? (item.visualConfig.layers ?? []) : [])
  .map((layer, index) => ({ ...layer, index }))
  .sort((left, right) => layerOrder[left.slot] - layerOrder[right.slot] || left.index - right.index);

function AvatarImageLayers({ layers }: { layers: Array<AvatarImageLayer & { index: number }> }) {
  if (layers.length === 0) return null;

  return <div className="avatar__image-layers" aria-hidden="true">
    {layers.map((layer) => {
      // 静的exportで任意数の透明レイヤーを重ねるため、最適化不要のimgを使います。
      // eslint-disable-next-line @next/next/no-img-element
      return <img
        key={`${layer.slot}-${layer.index}-${layer.src}`}
        className={`avatar__image-layer avatar__image-layer--${layer.slot}`}
        src={getAssetPath(layer.src)}
        alt=""
        draggable={false}
        onError={(event) => { event.currentTarget.hidden = true; }}
      />;
    })}
  </div>;
}

export function Avatar({ selection, size = "large", celebration = false }: { selection: AvatarSelection; size?: AvatarSize; celebration?: boolean }) {
  const hairItem = itemFor(selection.hair);
  const outfitItem = itemFor(selection.outfit);
  const shoesItem = itemFor(selection.shoes);
  const accessoryItem = itemFor(selection.accessory);
  const hair = hairItem?.visualConfig.styleKey ?? "bob";
  const outfit = outfitItem?.visualConfig.styleKey ?? "uniform";
  const shoes = shoesItem?.visualConfig.styleKey ?? "brown";
  const accessory = accessoryItem?.visualConfig.styleKey ?? "none";
  const hairStyle = { "--hair-color": hairItem?.visualConfig.accent } as CSSProperties;
  const imageLayers = imageLayersFor([hairItem, outfitItem, shoesItem, accessoryItem]);

  return (
    <div className={`avatar-preview avatar-preview--${size} ${celebration ? "avatar-preview--celebrate" : ""}`} aria-label="着せ替えした主人公アバター" data-avatar-size={size}>
      <div className="avatar">
        <span className="avatar__spark avatar__spark--one">✦</span>
        <span className="avatar__spark avatar__spark--two">✧</span>
        <div className={`avatar__hair avatar__hair--${hair}`} style={hairStyle}>
          {["twin", "royal"].includes(hair) && <><i className="avatar__tail avatar__tail--left" /><i className="avatar__tail avatar__tail--right" /></>}
          {hair === "side" && <i className="avatar__tail avatar__tail--right" />}
          <div className="avatar__face">
            <i className="avatar__eye avatar__eye--left" /><i className="avatar__eye avatar__eye--right" />
            <i className="avatar__blush avatar__blush--left" /><i className="avatar__blush avatar__blush--right" />
            <i className="avatar__mouth" />
            {accessory !== "none" && <span className={`avatar__accessory avatar__accessory--${accessory}`}>{accessoryItem?.visualConfig.symbol ?? accessoryItem?.icon}</span>}
          </div>
        </div>
        <div className="avatar__neck" />
        <div className={`avatar__body avatar__body--${outfit}`}><span className="avatar__collar">◆</span></div>
        <i className="avatar__arm avatar__arm--left" /><i className="avatar__arm avatar__arm--right" />
        <i className={`avatar__leg avatar__leg--left avatar__shoe--${shoes}`} />
        <i className={`avatar__leg avatar__leg--right avatar__shoe--${shoes}`} />
        <AvatarImageLayers layers={imageLayers} />
      </div>
    </div>
  );
}
