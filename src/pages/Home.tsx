import { ArrowRight, Heart, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { stickers } from "../data/stickers"
import { StickerCard } from "../components/StickerCard"

export function Home() {
  const featured = stickers.filter(
    (sticker) => sticker.featured,
  )

  return (
    <main>
      <section className="hero">
        <div className="hero-decoration decoration-one">✿</div>
        <div className="hero-decoration decoration-two">♡</div>
        <div className="hero-decoration decoration-three">✦</div>

        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            There was once a girl that ate a lot of candy so she made a 
          </div>

          <h1>
            Botan Rice Candy
            <span>Sticker Collection</span>
          </h1>

          <p className="hero-description">
            Lindsey's Botan rice candy sticker collection.
          </p>

          <Link to="/stickers" className="primary-button">
            Explore the collection
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="hero-candy">
          <div className="candy-shadow" />
          <div className="candy">
            <div className="candy-label">
              <small>BOTAN</small>
              <strong>Rice Candy</strong>
              <span>🍬</span>
            </div>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="featured-section page-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                <Heart size={14} />
                Favorites
              </span>

              <h2>Featured stickers</h2>
            </div>

            <Link to="/stickers" className="text-link">
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="sticker-grid featured-grid">
            {featured.slice(0, 3).map((sticker) => (
              <StickerCard key={sticker.id} sticker={sticker} />
            ))}
          </div>
        </section>
      )}

      <section className="lindsey-section">
      <div className="lindsey-inner page-container">
        <div className="lindsey-photo-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}images/lindsey.png`}
            alt="Lindsey, owner of the Botan Rice Candy sticker collection"
            className="lindsey-photo"
          />
        </div>

        <div className="lindsey-content">
          <p className="eyebrow">Meet the collector</p>

          <h2>Hi, I'm Lindsey! 🍬</h2>

          <p>
            I'm the owner and curator of this little Botan Rice Candy
            sticker collection. What started as a love for these tiny
            nostalgic stickers grew into an archive of all the fun,
            colorful characters and designs I've collected over the years.
          </p>

          <Link to="/stickers" className="text-link">
            Explore the collection →
          </Link>
        </div>
      </div>
    </section>


      <section className="about-section page-section">
        <div className="about-card">
          <span className="about-flower">✿</span>

          <div>
            <span className="section-kicker">About this archive</span>

            <h2>A tiny home for tiny stickers.</h2>

            <p>
              This collection keeps track of Botan Rice Candy
              stickers and the little details that make each one
              special.
            </p>
          </div>

          <div className="about-count">
            <strong>{stickers.length}</strong>
            <span>stickers</span>
          </div>
        </div>
      </section>
    </main>
  )
}
