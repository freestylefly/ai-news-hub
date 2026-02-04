import { useState } from 'react'
import { Search, Sparkles, Menu, X } from 'lucide-react'

interface HeaderProps {
  onSearch: (query: string) => void
}

export default function Header({ onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl blur-lg opacity-50"></div>
              <div className="relative p-2 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">AI News Hub</h1>
              <p className="text-xs text-gray-400">每日 AI 资讯聚合</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索 AI 资讯..."
                value={searchValue}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2.5 bg-dark-200/50 border border-white/10 rounded-xl text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">今日热点</a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">GitHub 项目</a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">论文推荐</a>
            <a 
              href="https://github.com/freestylefly/ai-news-hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search & Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索 AI 资讯..."
                value={searchValue}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2.5 bg-dark-200/50 border border-white/10 rounded-xl text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary-500/50"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm text-gray-300 py-2">今日热点</a>
              <a href="#" className="text-sm text-gray-300 py-2">GitHub 项目</a>
              <a href="#" className="text-sm text-gray-300 py-2">论文推荐</a>
              <a 
                href="https://github.com/freestylefly/ai-news-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-medium rounded-xl text-center"
              >
                GitHub
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
