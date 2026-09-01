import { ArrowLeft, Heart } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { stickers } from "../data/stickers"

export function StickerDetail() {
  const { id } = useParams<{ id: string }>()

  const sticker = stickers.find(
    (item) => item.id === id,
  )

  if (!sticker) {
    return (
      <main className="not-found page-section">
        <span className="section-kicker">Oops</span>
        <h1>Sticker not found</h1>
        <p>We couldn't find that sticker in the collection.</p>

        <Link to="/stickers" className="primary-button">
          <ArrowLeft size={17} />
          Back to collection
        </Link>
      </main>
    )
  }

  return (
    <main className="detail-page page-section">
      <Link to="/stickers" className="back-link">
        <ArrowLeft size={16} />
        Back to collection
      </Link>

      <div className="detail-layout">
        <div className="detail-image-area">
          <div className="detail-image-card">
            <img
              src={`${import.meta.env.BASE_URL}${sticker.image.replace(/^\//, "")}`}
              alt={sticker.title}
            />
          </div>
        </div>

        <div className="detail-info">
          <span className="section-kicker">
            <Heart size={14} />
            Sticker
          </span>

          <h1>{sticker.title}</h1>

          {sticker.description && (
            <p className="detail-description">
              {sticker.description}
            </p>
          )}

          <div className="metadata">
            <div className="metadata-row">
              <span>Category</span>
              <strong>{sticker.category}</strong>
            </div>

            {sticker.era && (
              <div className="metadata-row">
                <span>Era</span>
                <strong>{sticker.era}</strong>
              </div>
            )}

            {sticker.colors &&
              sticker.colors.length > 0 && (
                <div className="metadata-row">
                  <span>Colors</span>

                  <div className="color-list">
                    {sticker.colors.map((color) => (
                      <span
                        key={color}
                        className="metadata-tag"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            <div className="metadata-row">
              <span>Tags</span>

              <div className="color-list">
                {sticker.tags.map((item) => (
                  <span
                    key={item}
                    className="metadata-tag"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
