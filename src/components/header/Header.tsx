import { Link } from 'react-router-dom'
import SiteNavigation from '../navigation/SiteNavigation'

export default function Header() {
  return (
    <header id="start" className="border-b border-zinc-800">
      <div className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight">
          Kay <span className="text-orange-400">Hansen</span>
        </Link>
        <SiteNavigation />
      </div>
    </header>
  )
}
