import type { NewsItem } from '../types'
import NewsCard from './NewsCard'

interface NewsGridProps {
  news: NewsItem[]
}

export default function NewsGrid({ news }: NewsGridProps) {
  if (news.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">未找到相关资讯</h3>
        <p className="text-gray-500">尝试调整筛选条件或搜索关键词</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item, index) => (
        <NewsCard key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}
