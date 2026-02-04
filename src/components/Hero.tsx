import { RefreshCw, TrendingUp, Clock, Zap } from 'lucide-react'

interface HeroProps {
  onRefresh: () => void
  lastUpdate: string
}

export default function Hero({ onRefresh, lastUpdate }: HeroProps) {
  const stats = [
    { label: '今日资讯', value: '24', icon: TrendingUp, color: 'text-green-400' },
    { label: 'GitHub 项目', value: '8', icon: Zap, color: 'text-yellow-400' },
    { label: '更新于', value: lastUpdate, icon: Clock, color: 'text-primary-400' },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">AI 资讯日报</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          每日聚合最新 AI 技术动态、模型发布、开源项目和研究成果
        </p>
        <p className="text-sm text-gray-500 mt-2">
          由 <span className="text-primary-400">OpenClaw AI Agent</span> 自动生成
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="glass-card p-6 hover-lift"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color} opacity-80`} />
            </div>
          </div>
        ))}
      </div>

      {/* Refresh Button */}
      <div className="flex justify-center">
        <button
          onClick={onRefresh}
          className="flex items-center space-x-2 px-6 py-3 bg-dark-100/50 border border-white/10 rounded-xl text-gray-300 hover:bg-dark-100 hover:text-white transition-all group"
        >
          <RefreshCw className="w-5 h-5 group-hover:animate-spin" />
          <span>刷新数据</span>
        </button>
      </div>
    </section>
  )
}
