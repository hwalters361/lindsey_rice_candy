import { useMemo, useState } from "react"
import { FilterBar } from "../components/FilterBar"
import { StickerGrid } from "../components/StickerGrid"
import { stickers } from "../data/stickers"
import type { StickerCategory } from "../types/sticker"

export function Stickers() {
  const [search, setSearch] = useState("")
  const [category, setCategory] =
    useState<StickerCategory | "all">("all")
  const [tag, setTag] = useState("all")

  const categories = useMemo(() => {
    return Array.from(
      new Set(stickers.map((sticker) => sticker.category)),
    ).sort()
  }, [])

  const tags = useMemo(() => {
    return Array.from(
      new Set(stickers.flatMap((sticker) => sticker.tags)),
    ).sort()
  }, [])

  const filteredStickers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return stickers.filter((sticker) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        sticker.title.toLowerCase().includes(normalizedSearch) ||
        sticker.category
          .toLowerCase()
          .includes(normalizedSearch) ||
        sticker.tags.some((item) =>
          item.toLowerCase().includes(normalizedSearch),
        ) ||
        sticker.description
          ?.toLowerCase()
          .includes(normalizedSearch)

      const matchesCategory =
        category === "all" || sticker.category === category

      const matchesTag =
        tag === "all" || sticker.tags.includes(tag)

      return (
        matchesSearch &&
        matchesCategory &&
        matchesTag
      )
    })
  }, [search, category, tag])

  function clearFilters() {
    setSearch("")
    setCategory("all")
    setTag("all")
  }

  return (
    <main className="collection-page">
      <section className="collection-header page-section">
        <span className="section-kicker">The archive</span>

        <h1>All stickers</h1>

        <p>
          Browse the collection and filter the stickers by
          category, tag, or name.
        </p>
      </section>

      <section className="page-section collection-content">
        <FilterBar
          search={search}
          category={category}
          tag={tag}
          categories={categories}
          tags={tags}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onTagChange={setTag}
          onClear={clearFilters}
        />

        <div className="results-header">
          <span>
            {filteredStickers.length}{" "}
            {filteredStickers.length === 1
              ? "sticker"
              : "stickers"}
          </span>
        </div>

        <StickerGrid stickers={filteredStickers} />
      </section>
    </main>
  )
}
