import { useState , useEffect} from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
 
  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }
  
  const darkMode = () => {
    setThemeMode("dark")
  }

  //useEffect that changes the classList of HTML
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
