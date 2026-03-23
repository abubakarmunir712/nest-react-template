import { ThemeProvider } from "./theme-provider"
const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}
export default AppProvider