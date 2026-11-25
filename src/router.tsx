import { createBrowserRouter, Link } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import BranchesPage from './pages/BranchesPage'
import HomePage from './pages/HomePage'
import MaintenancePage from './pages/MaintenancePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'branchen', element: <BranchesPage /> },
      { path: 'pflege', element: <MaintenancePage /> },
      {
        path: '*',
        element: (
          <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
            <h1 className="mb-4 text-3xl font-bold">Seite nicht gefunden</h1>
            <Link to="/" className="text-orange-400 underline">Zur Startseite</Link>
          </main>
        ),
      },
    ],
  },
])

export default router
