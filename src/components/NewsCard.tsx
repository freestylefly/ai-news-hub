import type { NewsItem } from '../types'
import { ExternalLink, Calendar, BookOpen } from 'lucide-react'

interface NewsCardProps {
  item: NewsItem
  index: number
}

const categoryColors: Record<string, string> = {
  models: 'from-blue-500 to-cyan-500',
  tools: 'from-green-500 to-emerald-500',
  research: 'from-purple-500 to-pink-500',
  opensource: 'from-orange-500 to-yellow-500',
  industry: 'from-red-500 to-pink-500',
}

const categoryLabels: Record<string, string> = {
  models: '模型',
  tools: '工具',
  research: '研究',
  opensource: '开源',
  industry: '行业',
}

export default function NewsCard({ item, index }: NewsCardProps) {
  const gradientColor = categoryColors[item.category] || 'from-gray-500 to-gray-600'
  const categoryLabel = categoryLabels[item.category] || '其他'

  return (
    <article 
      className="glass-card overflow-hidden hover-lift group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Category Badge */}
      <div className={`h-1 bg-gradient-to-r ${gradientColor}`} />
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <span className={`px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${gradientColor} bg-opacity-20 text-white`}>
            {categoryLabel}
          </span>
          <span className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-100 mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {item.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center text-xs text-gray-500">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            {item.source}
          </div>
          <a 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>阅读更多</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
