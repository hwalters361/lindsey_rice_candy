import type { Sticker } from "../types/sticker"
import { StickerCard } from "./StickerCard"

interface StickerGridProps {
  stickers: Sticker[]
}

export function StickerGrid({ stickers }: StickerGridProps) {
  if (stickers.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🍬</div>
        <h3>No stickers found</h3>
        <p>
          Try changing your search or removing one of the filters.
        </p>
      </div>
    )
  }

  return (
    <div className="sticker-grid">
      {stickers.map((sticker) => (
        <StickerCard key={sticker.id} sticker={sticker} />
      ))}
    </div>
  )
}
