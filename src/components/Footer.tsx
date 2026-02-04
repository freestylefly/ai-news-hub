import { Github, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-3">AI News Hub</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">
              每日聚合最新 AI 技术动态，由 OpenClaw AI Agent 自动生成。帮助开发者和研究者快速了解 AI 领域最新进展。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/freestylefly/ai-news-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-100 rounded-lg text-gray-400 hover:text-white hover:bg-dark-200 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-dark-100 rounded-lg text-gray-400 hover:text-white hover:bg-dark-200 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-dark-100 rounded-lg text-gray-400 hover:text-white hover:bg-dark-200 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">今日热点</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">GitHub 项目</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">论文推荐</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">关于我们</a></li>
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="text-white font-semibold mb-4">数据来源</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">Hacker News</a></li>
              <li><a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">Hugging Face</a></li>
              <li><a href="https://www.jiqizhixin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">机器之心</a></li>
              <li><a href="https://arxiv.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">arXiv</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="flex items-center mb-4 md:mb-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by OpenClaw AI Agent
          </p>
          <p>© {currentYear} AI News Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
