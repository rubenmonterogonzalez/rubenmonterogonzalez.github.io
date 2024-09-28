'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative w-14 h-8 p-[0.1rem] cursor-pointer">
      <button
        onClick={toggleTheme}
        aria-label='Toggle theme'
        title='Toggle theme'
        className="theme-toggle-button"
      >
        {theme === 'light' ? <IconMoon /> : <IconSun />}
      </button>
    </div>
  )
};

