import { Link } from "react-router-dom"
import type { Sticker } from "../types/sticker"

interface StickerCardProps {
  sticker: Sticker
}

export function StickerCard({ sticker }: StickerCardProps) {
  return (
    <Link to={`/stickers/${sticker.id}`} className="sticker-card">
      <div className="sticker-image-wrap">
        <img
          src={`${import.meta.env.BASE_URL}${sticker.image.replace(/^\//, "")}`}
          alt={sticker.title}
          className="sticker-image"
          loading="lazy"
        />
      </div>

      <div className="sticker-card-info">
        <h3>{sticker.title}</h3>

        <span className="category-label">
          {sticker.category}
        </span>
      </div>
    </Link>
  )
}
