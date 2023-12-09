import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Name() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  return (
    <motion.span
      animate={{
        color: [theme === 'dark' ? '#ffffff' : '#000000', '#dc2626', '#d97706', '#16a34a', '#2563eb', '#7e22ce', theme === 'dark' ? '#ffffff' : '#000000'],
      }}
      transition={{
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: 2,
        repeatDelay: 5,
      }}
      className="md:text-6xl text-center lg:text-left xl:text-7xl 2xl:text-8xl font-bold"
    >
      Yenaro Noa
    </motion.span>
  );
}
