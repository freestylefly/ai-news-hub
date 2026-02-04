export interface NewsItem {
  id: string
  title: string
  summary: string
  url: string
  category: Category
  source: string
  date: string
  tags: string[]
}

export type Category = 'all' | 'models' | 'tools' | 'research' | 'opensource' | 'industry'

export interface CategoryOption {
  value: Category
  label: string
  icon: string
}
