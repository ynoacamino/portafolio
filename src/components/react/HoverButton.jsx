import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HoverButton({
  content, alt, src,
}) {
  const [view, setView] = useState(false);
  const show = {
    opacity: 1,
    scale: 1,
    display: 'flex',
  };

  const hide = {
    opacity: 0,
    scale: 0.5,
    display: 'none',
  };

  return (
    <div className="flex justify-center items-center relative">
      <motion.div
        className="flex p-2 py-0 justify-center items-center hover:cursor-pointer"
        onHoverStart={() => setView(true)}
        onHoverEnd={() => setView(false)}
        whileHover={{
          scale: 1.8,
        }}
        whileTap={{
          scale: 1.4,
        }}
      >
        <img src={`/icons/${src}`} alt={alt} className="w-14 h-14" />
      </motion.div>
      <motion.div
        className="z-10 hidden absolute min-w-max bottom-[85px] font-semibold justify-center items-center py-2 px-4 rounded-lg shadow-xl bg-black text-white"
        animate={view ? show : hide}
      >
        {content}
      </motion.div>
    </div>
  );
}
