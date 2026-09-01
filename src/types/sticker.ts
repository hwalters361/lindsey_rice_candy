export type StickerCategory =
  | "animals"
  | "fruit"
  | "flowers"
  | "characters"
  | "objects"
  | "nature"
  | "food"
  | "other"

export interface Sticker {
  id: string
  title: string
  image: string
  category: StickerCategory
  tags: string[]
  colors?: string[]
  era?: string
  description?: string
  featured?: boolean
}
