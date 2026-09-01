import { Link, NavLink } from "react-router-dom"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">
            <Sparkles size={18} />
          </span>

          <span>
            <strong>Botan</strong>
            <small>Sticker Collection</small>
          </span>
        </Link>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/stickers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Collection
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
