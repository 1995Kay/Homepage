import ServicesButton from "../buttons/ServicesButton";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Webdesign",
    description: "Hier entsteht eine Übersicht meiner Webdesign-Leistungen.",
  },
  {
    title: "Branchenbeispiele",
    description:
      "Hier ist Platz für Beispielseiten aus verschiedenen Branchen.",
  },
  {
    title: "Webseitenpflege",
    description: "Hier folgen Informationen zu Pflege und Wartung.",
  },
];

export default function HomeBody() {
  return (
    <main className="flex-1">
      <section className="border-b border-zinc-800 bg-[radial-gradient(ellipse_at_top_right,#431c0b,transparent_65%)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Webdesign und{" "}
            <span className="text-orange-400">Webseitenpflege</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-300">
            Individuelle Websites für Unternehmen, vom ersten Entwurf bis zur
            laufenden Pflege.
          </p>
          <ServicesButton />
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">
          Leistungen
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map(({ title, description }) => (
            <Card
              key={title}
              className="bg-zinc-900 text-zinc-100 ring-zinc-800"
            >
              <CardHeader>
                <CardTitle className="text-xl text-orange-400">
                  {title}
                </CardTitle>
                <CardDescription className="text-base text-zinc-300">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-orange-500/30 bg-zinc-900 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Kontakt</h2>
          <p className="mt-2 text-zinc-300">
            Hier entsteht das öffentliche Ticketformular.
          </p>
        </div>
      </section>
    </main>
  );
}
