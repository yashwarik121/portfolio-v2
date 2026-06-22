import { ThemeToggle } from "./ThemeToggle";

const items = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#experience", label: "exp" },
  { href: "#skills", label: "kit" },
  { href: "#contact", label: "say hi" },
];

export const Nav = () => (
  <header className="fixed left-0 right-0 top-0 z-50">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
      <a href="#" className="sticker inline-flex items-center gap-2 border-2 border-foreground bg-background px-3 py-2 font-mono text-xs font-bold uppercase">
        <span className="h-2 w-2 rounded-full bg-hot" /> yw / portfolio
      </a>
      <nav className="hidden md:block">
        <ul className="sticker flex items-center gap-1 border-2 border-foreground bg-background px-2 py-1 font-mono text-xs uppercase">
          {items.map(it => (
            <li key={it.href}>
              <a href={it.href} className="block px-3 py-2 transition-colors hover:bg-foreground hover:text-background">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  </header>
);
