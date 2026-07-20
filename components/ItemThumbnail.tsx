"use client";

import { getAssetPath } from "@/features/avatar/assets";
import type { AvatarItem } from "@/features/inventory/types";
import { useState } from "react";

export function ItemThumbnail({ item, className = "item-icon" }: { item: AvatarItem; className?: string }) {
  const thumbnailSrc = item.visualType === "layeredImage" ? item.visualConfig.thumbnailSrc : undefined;
  const [failedSrc, setFailedSrc] = useState<string>();

  return <span className={className} aria-hidden="true">
    {thumbnailSrc && failedSrc !== thumbnailSrc
      // 静的export用の小さなサムネイルなので、最適化不要のimgを使います。
      // eslint-disable-next-line @next/next/no-img-element
      ? <img src={getAssetPath(thumbnailSrc)} alt="" draggable={false} onError={() => setFailedSrc(thumbnailSrc)} />
      : item.icon}
  </span>;
}
