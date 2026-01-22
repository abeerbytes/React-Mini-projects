import { useTheme } from "./context/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import  "./index.css"

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500
      ${theme === "light"
        ? "bg-linear-to-br from-slate-100 to-slate-200 text-gray-900"
        : "bg-linear-to-br from-gray-900 to-black text-gray-100"}`}
    >
      <div className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-10 w-[90%] max-w-md text-center transition">
        <h1 className="text-3xl font-bold mb-4">
          🌗 Theme Switcher
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
          This app uses Context API to switch themes globally.
        </p>

        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
