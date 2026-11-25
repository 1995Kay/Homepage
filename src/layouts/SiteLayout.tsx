import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function SiteLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-950 text-zinc-100">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
