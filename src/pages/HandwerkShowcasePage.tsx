import { Link } from 'react-router-dom'
import { Camera, CircleCheck, CircleX, ClipboardList } from 'lucide-react'
import { Button } from '@/components/ui/button'

const problems = [
  'Fotos auf privaten Handys',
  'Fehlende Stundenzettel',
  'Unklare Aufgabenverteilung',
  'Ständige Kundenrückfragen',
]

const statistics = [
  { label: 'Baustellen', value: 3 },
  { label: 'Mitarbeiter', value: 5 },
  { label: 'Einträge', value: 12 },
]

const workflow = [
  { label: 'Zuweisen', icon: ClipboardList },
  { label: 'Dokumentieren', icon: Camera },
  { label: 'Kontrollieren', icon: CircleCheck },
]

const contactButton = 'h-auto w-full bg-orange-500 px-4 py-3 text-center text-base font-semibold whitespace-normal text-zinc-950 hover:bg-orange-400'

export default function HandwerkShowcasePage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-8 sm:px-6 sm:py-12">
      <section aria-labelledby="handwerk-einstieg">
        <p className="text-sm font-medium tracking-wide text-orange-400">Digitale Lösungen fürs Handwerk</p>
        <h1 id="handwerk-einstieg" className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Schluss mit dem Chaos auf Ihren Baustellen.
        </h1>
        <p className="mt-4 font-semibold text-orange-400">Alles dokumentiert. Alles im Blick.</p>
        <p className="mt-3 text-zinc-200">
          Keine verstreuten Baustellenfotos, unübersichtlichen Chatverläufe oder verlorenen Stundenzettel mehr.
        </p>
        <Button asChild className={`mt-4 ${contactButton}`}>
          <Link to="/#kontakt">Individuelle Lösung anfragen</Link>
        </Button>
        <img
          src="/handwerk/baustelle-dokumentieren.png"
          alt="Ein Handwerker fotografiert ein Rohr auf der Baustelle mit seinem Smartphone."
          className="mt-4 aspect-video w-full rounded-xl bg-zinc-900 object-cover"
          fetchPriority="high"
        />

        <h2 className="mt-5 text-2xl font-semibold tracking-tight">Kennen Sie diese Probleme?</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {problems.map((problem) => (
            <li key={problem} className="rounded-lg bg-stone-800 p-4">
              <CircleX aria-hidden="true" className="mb-2 size-5 text-orange-400" />
              {problem}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="handwerk-loesung" className="border-t border-zinc-800 pt-8">
        <p className="text-sm font-medium tracking-wide text-orange-400">Ihr Betrieb. Digital vernetzt.</p>
        <h2 id="handwerk-loesung" className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Ihre Baustelle. Ihr Team. Eine Plattform.
        </h2>
        <p className="mt-3 text-zinc-200">
          Individuelle Baustellendokumentation, direkt integriert in Ihren digitalen Unternehmensauftritt.
        </p>

        <figure className="mt-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold">Baustellenübersicht</h3>
              <span className="text-sm font-medium text-orange-400">Demo</span>
            </div>
            <dl className="grid grid-cols-3 gap-2">
              {statistics.map(({ label, value }) => (
                <div key={label} className="flex min-w-0 flex-col-reverse gap-2 rounded-lg bg-stone-800 p-2 sm:p-4">
                  <dt className="break-words text-sm text-zinc-200">{label}</dt>
                  <dd className="text-2xl font-semibold text-orange-400 sm:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
            <img
              src="/handwerk/sanierung-lindenweg.png"
              alt="Teilweise gefliestes Badezimmer während der Sanierung."
              className="mt-3 aspect-video w-full rounded-xl bg-zinc-950 object-cover"
              loading="lazy"
            />
            <h4 className="mt-3 font-semibold">Sanierung Lindenweg</h4>
            <div className="mt-3 flex justify-between gap-2 text-sm">
              <label htmlFor="sanierung-fortschritt" className="text-zinc-300">Baufortschritt</label>
              <span className="text-orange-400">65 %</span>
            </div>
            <progress
              id="sanierung-fortschritt"
              value={65}
              max={100}
              className="mt-2 block h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-orange-500 [&::-webkit-progress-bar]:bg-zinc-700 [&::-webkit-progress-value]:bg-orange-500"
            />
            <details className="mt-3">
              <summary className="cursor-pointer rounded-lg bg-orange-500 px-4 py-2 text-center font-semibold text-zinc-950 hover:bg-orange-400">
                Fortschritt dokumentieren
              </summary>
              <p className="mt-3 rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">
                Beispieleintrag: Die Wandfliesen sind gesetzt. Als Nächstes werden die Fugen geschlossen und die Armaturen montiert.
              </p>
            </details>
          </div>
          <figcaption className="mt-3 text-sm text-zinc-400">Beispielansicht mit fiktiven Daten</figcaption>
        </figure>

        <h3 className="mt-6 text-2xl font-semibold tracking-tight">So einfach könnte Ihr Arbeitsalltag werden.</h3>
        <ul className="mt-3 grid grid-cols-3 gap-2">
          {workflow.map(({ label, icon: Icon }) => (
            <li key={label} className="grid justify-items-center gap-2 rounded-lg bg-stone-800 px-1 py-3 text-center text-xs sm:text-base">
              <Icon aria-hidden="true" className="size-5 text-orange-400" />
              {label}
            </li>
          ))}
        </ul>
        <Button asChild className={`mt-4 ${contactButton}`}>
          <Link to="/#kontakt">Jetzt individuelle Lösung besprechen</Link>
        </Button>
      </section>
    </main>
  )
}
