import { findAvatarItem } from "@/data/items";
import type { AvatarSelection } from "@/features/avatar/types";
import type { CSSProperties } from "react";

const itemFor = (id?: string) => id ? findAvatarItem(id) : undefined;

export type AvatarSize = "small" | "medium" | "large";

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
      </div>
    </div>
  );
}
