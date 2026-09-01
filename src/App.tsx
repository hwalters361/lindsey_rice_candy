import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Stickers } from "./pages/Stickers"
import { StickerDetail } from "./pages/StickerDetail"

function App() {
  return (
    <BrowserRouter basename="/lindsey_rice_candy">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stickers" element={<Stickers />} />
        <Route
          path="/stickers/:id"
          element={<StickerDetail />}
        />
      </Routes>

      <footer className="site-footer">
        <p>
          Made for Lindsey w/ love ♡ by her sissy.
        </p>
      </footer>
    </BrowserRouter>
  )
}

export default App
