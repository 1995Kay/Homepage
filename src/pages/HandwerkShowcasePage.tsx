import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const benefits = [
  ['Zeit sparen', 'Einsätze und Arbeitszeiten zentral erfassen und fürs Büro griffbereit halten.'],
  ['Den Überblick behalten', 'Auf einen Blick sehen, wer auf welcher Baustelle eingeplant ist.'],
  ['Fortschritte dokumentieren', 'Fotos und Notizen der passenden Baustelle zuordnen.'],
]

const modules = [
  ['Baustellenverwaltung', 'Baustellen anlegen, Mitarbeitende zuweisen und den Stand laufender Arbeiten sehen.'],
  ['Fotodokumentation', 'Fortschritte per Smartphone mit Foto, Datum und Notiz festhalten. Der Betrieb kann die Bilder später herunterladen.'],
  ['Einsatzkalender', 'Sehen, wer wann auf welcher Baustelle eingeplant ist.'],
  ['Digitale Stundenzettel', 'Beginn, Ende und Pausen erfassen und die Arbeitszeit einer Baustelle zuordnen.'],
  ['Optionales Kundenportal', 'Ausgewählte Fortschritte freigeben, Fragen beantworten und die Abschlussabnahme vorbereiten.'],
  ['Lager und Material · Ausblick', 'Bestände, Entnahmen und Rückgaben im Blick behalten. Scans und Baustellenzuordnung sind mögliche Ergänzungen.'],
]

const accessModes = [
  ['Nur intern', 'Die Baustelle ist ausschließlich für den Betrieb sichtbar.'],
  ['Nur Abschluss', 'Kunden sehen die freigegebene Abschlussdokumentation und die Abschlussabnahme.'],
  ['Projektbegleitung', 'Kunden sehen ausgewählte Fortschritte und Fotos, können Fragen oder Änderungswünsche senden und erhalten am Ende die Abschlussabnahme.'],
]

export default function HandwerkShowcasePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-16 px-6 py-12 sm:py-16">
      <header className="rounded-2xl border border-zinc-800 bg-zinc-900 bg-[radial-gradient(ellipse_at_top_right,#431c0b,transparent_65%)] p-6 sm:p-12">
        <Link to="/branchen#handwerk" className="text-sm font-medium text-orange-300 hover:underline">Zur Branchenübersicht</Link>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Websites für Handwerksbetriebe
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">
          Ein individueller Webauftritt mit optionalen digitalen Modulen für Baustellen, Teams und Kunden.
          Dieser Showcase zeigt, wie die Lösungen für deinen Betrieb aussehen könnten.
        </p>
      </header>

      <section aria-labelledby="handwerk-vorteile">
        <h2 id="handwerk-vorteile" className="mb-5 text-3xl font-semibold">Vorteile für deinen Betrieb</h2>
        <ul className="grid gap-5 sm:grid-cols-3">
          {benefits.map(([title, description]) => (
            <li key={title} className="border-l-2 border-orange-500 pl-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-zinc-300">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="handwerk-module">
        <h2 id="handwerk-module" className="mb-5 text-3xl font-semibold">Mögliche Zusatzmodule</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(([title, description]) => (
            <Card key={title} className="bg-zinc-900 text-zinc-100 ring-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg text-orange-400">{title}</CardTitle>
                <CardDescription className="text-base text-zinc-300">{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-zinc-800 p-5 sm:p-6">
          <h3 className="text-xl font-semibold">Wer sieht was im Kundenportal?</h3>
          <p className="mt-2 text-zinc-300">
            Inhalte sind zunächst intern. Der Betrieb legt den Zugriff pro Baustelle fest, gibt Inhalte einzeln frei und kann den Zugriff widerrufen.
            Arbeitszeiten und Mitarbeiterdaten bleiben intern. Änderungswünsche gehen als Anfrage an den Betrieb.
          </p>
          <dl className="mt-5 grid gap-5 md:grid-cols-3">
            {accessModes.map(([title, description]) => (
              <div key={title}>
                <dt className="font-semibold text-orange-300">{title}</dt>
                <dd className="mt-1 text-zinc-300">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="handwerk-vorschau">
        <h2 id="handwerk-vorschau" className="mb-5 text-3xl font-semibold">Dashboard-Vorschau</h2>
        <figure className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 sm:p-8">
          <figcaption className="text-sm font-medium text-orange-300">Konzeptvorschau · Fiktive Beispieldaten</figcaption>
          <h3 className="mt-3 text-xl font-semibold">Betriebsansicht · Sanierung Lindenweg</h3>
          <dl className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-4">
            {[
              ['Baustellenstatus', 'In Arbeit'],
              ['Team', 'Lea und Jonas'],
              ['Fotodokumentation', '3 Fortschrittsfotos'],
              ['Nächster Termin', 'Montag · 08:00 Uhr'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-zinc-950 p-3">
                <dt className="text-sm text-zinc-400">{label}</dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </figure>
      </section>

      <section aria-labelledby="handwerk-anfrage" className="rounded-xl border border-orange-500/30 bg-zinc-900 p-6 sm:p-8">
        <h2 id="handwerk-anfrage" className="text-2xl font-semibold">Was braucht dein Betrieb?</h2>
        <p className="mt-2 text-zinc-300">Erzähl mir, welche Aufgaben du mit deiner Website einfacher machen möchtest.</p>
        <Button asChild size="lg" className="mt-5 bg-orange-500 font-semibold text-zinc-950 hover:bg-orange-400">
          <Link to="/#kontakt">Projekt anfragen</Link>
        </Button>
      </section>
    </main>
  )
}
