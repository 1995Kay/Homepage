const categories = [
  { id: 'handwerk', title: 'Handwerk' },
  { id: 'arztpraxen', title: 'Arztpraxen' },
  { id: 'gastronomie', title: 'Gastronomie' },
  { id: 'bildung', title: 'Bildung und Schulen' },
  { id: 'dienstleistungen', title: 'Dienstleistungen' },
]

const previewNumbers = [1, 2, 3, 4, 5, 6]

export default function BranchesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <header className="flex min-h-40 items-center rounded-xl border border-zinc-800 bg-zinc-900 px-6 sm:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-orange-400">Branchen</h1>
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {categories.map(({ id, title }) => (
          <section
            key={id}
            aria-labelledby={id}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-6"
          >
            <h2 id={id} className="mb-4 text-xl font-semibold">{title}</h2>
            <ul className="grid grid-cols-3 gap-2 sm:gap-3">
              {previewNumbers.map((number) => (
                id === 'handwerk' && number === 1 ? (
                  <li key={number}>
                    <Link
                      to="/branchen/handwerk"
                      className="grid h-full min-h-20 place-items-center rounded-md border border-orange-500/50 bg-orange-500/10 p-2 text-center text-sm font-semibold text-orange-300 hover:bg-orange-500/20 focus-visible:outline-2 focus-visible:outline-orange-400"
                    >
                      Handwerker-Showcase
                    </Link>
                  </li>
                ) : (
                <li
                  key={number}
                  className="aspect-[4/3] rounded-md border border-dashed border-zinc-700 bg-zinc-950"
                >
                  <span className="sr-only">Platzhalter für Vorschau {number}</span>
                </li>
                )
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
import { Link } from 'react-router-dom'

