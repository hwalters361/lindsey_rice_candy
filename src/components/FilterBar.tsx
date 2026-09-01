import { Search, X } from "lucide-react"
import type { StickerCategory } from "../types/sticker"

interface FilterBarProps {
  search: string
  category: StickerCategory | "all"
  tag: string
  categories: StickerCategory[]
  tags: string[]
  onSearchChange: (value: string) => void
  onCategoryChange: (value: StickerCategory | "all") => void
  onTagChange: (value: string) => void
  onClear: () => void
}

export function FilterBar({
  search,
  category,
  tag,
  categories,
  tags,
  onSearchChange,
  onCategoryChange,
  onTagChange,
  onClear,
}: FilterBarProps) {
  const hasFilters =
    search.length > 0 ||
    category !== "all" ||
    tag !== "all"

  return (
    <section className="filters">
      <div className="search-box">
        <Search size={19} />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search stickers..."
          aria-label="Search stickers"
        />
      </div>

      <div className="filter-section">
        <span className="filter-title">Category</span>

        <div className="filter-pills">
          <button
            className={category === "all" ? "pill selected" : "pill"}
            onClick={() => onCategoryChange("all")}
          >
            All
          </button>

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item ? "pill selected" : "pill"
              }
              onClick={() => onCategoryChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {tags.length > 0 && (
        <div className="filter-section">
          <span className="filter-title">Tags</span>

          <div className="filter-pills">
            <button
              className={tag === "all" ? "pill selected" : "pill"}
              onClick={() => onTagChange("all")}
            >
              All
            </button>

            {tags.map((item) => (
              <button
                key={item}
                className={tag === item ? "pill selected" : "pill"}
                onClick={() => onTagChange(item)}
              >
                #{item}
              </button>
            ))}
          </div>
        </div>
      )}

      {hasFilters && (
        <button className="clear-filters" onClick={onClear}>
          <X size={15} />
          Clear filters
        </button>
      )}
    </section>
  )
}
