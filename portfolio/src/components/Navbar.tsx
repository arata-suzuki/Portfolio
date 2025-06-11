import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = ["Home", "Projects", "About", "Contact"]

  return (
    <header className="w-full px-4 py-4 shadow-sm bg-primary fixed top-0 left-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-primary">Arata.dev</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                <Menu className="h-5 w-5" />
            </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-primary">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
