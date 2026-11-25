import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export default function SiteNavigation() {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-zinc-300"
    >
      <Button asChild className="py-2">
        <Link to="/#leistungen">Leistungen</Link>
      </Button>
      <Button asChild className="py-2 aria-[current=page]:bg-orange-400 aria-[current=page]:text-zinc-950">
        <NavLink to="/branchen">Branchen</NavLink>
      </Button>
      <Button asChild className="py-2 aria-[current=page]:bg-orange-400 aria-[current=page]:text-zinc-950">
        <NavLink to="/pflege">Webseitenpflege</NavLink>
      </Button>
      <Button asChild className="py-2">
        <Link to="/#kontakt">Kontakt</Link>
      </Button>
    </nav>
  );
}
