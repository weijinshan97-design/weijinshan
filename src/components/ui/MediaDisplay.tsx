"use client";

import Image from "next/image";
import { SystemMedia } from "@/lib/types";

interface MediaDisplayProps {
  media: SystemMedia;
  priority?: boolean;
}

export function MediaDisplay({ media, priority = false }: MediaDisplayProps) {
  if (media.type === "video") {
    return (
      <div className="rounded-lg overflow-hidden bg-surface">
        <video
          src={media.src}
          controls
          className="w-full"
          poster={media.caption}
        />
        {media.caption && (
          <p className="px-4 py-2 text-xs text-muted">{media.caption}</p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden bg-surface">
      <Image
        src={media.src}
        alt={media.caption || ""}
        width={1200}
        height={800}
        className="w-full h-auto"
        priority={priority}
      />
      {media.caption && (
        <p className="px-4 py-2 text-xs text-muted">{media.caption}</p>
      )}
    </div>
  );
}
