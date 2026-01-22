import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-full py-3 rounded-xl font-semibold text-lg
      bg-indigo-500 hover:bg-indigo-600 text-white
      transition-all duration-300 active:scale-95"
    >
      {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggle;
