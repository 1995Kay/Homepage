import { Button } from '../ui/button'

export default function ServicesButton() {
  return (
    <div className="mt-8">
      <Button asChild size="lg" className="bg-orange-500 font-semibold text-zinc-950 hover:bg-orange-400">
        <a href="#leistungen">Leistungen ansehen</a>
      </Button>
    </div>
  )
}
