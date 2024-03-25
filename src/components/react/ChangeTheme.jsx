import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ChangeTheme() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);
  const handdleClick = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={handdleClick}
      className={`w-16 h-8 rounded-full p-1 border-solid border-2 bg-background dark:bg-background border-black dark:border-white flex items-center ${theme === 'dark' ? 'justify-end' : 'justify-start'}`}
      aria-label="button"
      type="button"
    >
      <motion.div layout className="w-6 h-6 rounded-full bg-black dark:bg-white" />
    </button>
  );
}
