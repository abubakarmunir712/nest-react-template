import { useTheme } from "./hooks/use-theme"
import { Button } from "./components/ui/button"

export function App() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex min-h-svh p-6">
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </Button>
    </div>
  )
}

export default App
