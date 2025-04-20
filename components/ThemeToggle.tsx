// components/ThemeToggle.tsx
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full transition-colors bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
