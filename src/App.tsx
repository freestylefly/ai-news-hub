import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import NewsGrid from './components/NewsGrid'
import FilterBar from './components/FilterBar'
import Footer from './components/Footer'
import type { NewsItem, Category } from './types'

// 示例数据 - 实际使用时会从API或文件读取
const sampleNews: NewsItem[] = [
  {
    id: '1',
    title: 'OpenAI 发布 GPT-5 预览版，性能提升 40%',
    summary: '新一代大语言模型在多模态理解和推理能力上实现重大突破，支持更长的上下文窗口。',
    url: 'https://openai.com',
    category: 'models',
    source: 'OpenAI Blog',
    date: '2026-02-04',
    tags: ['LLM', 'GPT', '多模态']
  },
  {
    id: '2',
    title: 'Meta 开源 Llama 4：最强开源大模型',
    summary: 'Meta 发布 Llama 4 系列模型，在多项基准测试中超越 GPT-4，完全开源可商用。',
    url: 'https://ai.meta.com',
    category: 'models',
    source: 'Meta AI',
    date: '2026-02-04',
    tags: ['开源', 'Llama', 'Meta']
  },
  {
    id: '3',
    title: 'Claude 3.5 新增代码解释器功能',
    summary: 'Anthropic 为 Claude 添加代码执行能力，可以直接运行 Python 代码并分析数据。',
    url: 'https://anthropic.com',
    category: 'tools',
    source: 'Anthropic',
    date: '2026-02-04',
    tags: ['Claude', '编程', '数据分析']
  },
  {
    id: '4',
    title: 'Hugging Face 推出零代码模型训练平台',
    summary: '新平台让非技术人员也能轻松训练和部署自定义 AI 模型，大幅降低 AI 应用门槛。',
    url: 'https://huggingface.co',
    category: 'tools',
    source: 'HF Blog',
    date: '2026-02-04',
    tags: ['HuggingFace', '无代码', '训练']
  },
  {
    id: '5',
    title: 'Google DeepMind 突破：AI 发现新的数学定理',
    summary: 'AlphaGeometry 2 在复杂几何问题中发现人类未知的定理，展现 AI 的数学推理能力。',
    url: 'https://deepmind.google',
    category: 'research',
    source: 'DeepMind',
    date: '2026-02-04',
    tags: ['数学', 'DeepMind', '定理证明']
  },
  {
    id: '6',
    title: 'AI 蛋白质设计新工具开源：ProteinGPT',
    summary: '基于 GPT 架构的蛋白质设计模型开源，可预测蛋白质结构和设计新酶。',
    url: 'https://github.com',
    category: 'opensource',
    source: 'GitHub',
    date: '2026-02-04',
    tags: ['生物', '蛋白质', '开源']
  },
  {
    id: '7',
    title: 'MIT 研究：AI 辅助编程效率提升 55%',
    summary: '最新研究表明，使用 AI 编程助手的开发者完成任务的速度提升超过一半。',
    url: 'https://mit.edu',
    category: 'industry',
    source: 'MIT News',
    date: '2026-02-04',
    tags: ['研究', '效率', '编程']
  },
  {
    id: '8',
    title: 'Stable Diffusion 3.5 发布：图像质量大幅提升',
    summary: '新版本在文字渲染和人物细节方面显著改进，支持更高分辨率生成。',
    url: 'https://stability.ai',
    category: 'models',
    source: 'Stability AI',
    date: '2026-02-04',
    tags: ['图像生成', 'StableDiffusion', 'AIGC']
  }
]

function App() {
  const [news] = useState<NewsItem[]>(sampleNews)
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(sampleNews)
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let filtered = news
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    setFilteredNews(filtered)
  }, [selectedCategory, searchQuery, news])

  const handleRefresh = () => {
    // 这里可以集成实际的API来获取最新数据
    console.log('Refreshing news...')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100">
      <Header onSearch={setSearchQuery} />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Hero onRefresh={handleRefresh} lastUpdate="2026-02-04" />
        <FilterBar 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <NewsGrid news={filteredNews} />
      </main>
      <Footer />
    </div>
  )
}

export default App
