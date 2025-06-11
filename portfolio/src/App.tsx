import { Navbar } from "@/components/Navbar"
import { Home } from "./pages/Home"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar/>
        <main className="pt-20">
          <Home />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App