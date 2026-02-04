import type { Category, CategoryOption } from '../types'
import { Layers, Cpu, Wrench, FlaskConical, Github, Building2 } from 'lucide-react'

interface FilterBarProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
}

const categories: CategoryOption[] = [
  { value: 'all', label: '全部', icon: 'Layers' },
  { value: 'models', label: '模型发布', icon: 'Cpu' },
  { value: 'tools', label: '工具平台', icon: 'Wrench' },
  { value: 'research', label: '研究成果', icon: 'FlaskConical' },
  { value: 'opensource', label: '开源项目', icon: 'Github' },
  { value: 'industry', label: '行业动态', icon: 'Building2' },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Cpu,
  Wrench,
  FlaskConical,
  Github,
  Building2,
}

export default function FilterBar({ selectedCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="sticky top-20 z-40 mb-8">
      <div className="glass-card p-2 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {categories.map((category) => {
            const Icon = iconMap[category.icon]
            const isSelected = selectedCategory === category.value
            
            return (
              <button
                key={category.value}
                onClick={() => onCategoryChange(category.value)}
                className={`
                  flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isSelected 
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
