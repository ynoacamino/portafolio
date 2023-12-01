import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HoverButton({
  content, alt, src,
}) {
  const [view, setView] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      scale: 0,
      y: 20,
    },
  };

  return (
    <div className="flex justify-center items-center relative">
      <motion.div
        className="flex p-2 py-0 justify-center items-center hover:cursor-pointer"
        onHoverStart={() => setView(true)}
        onHoverEnd={() => setView(false)}
        animate={view ? 'open' : 'close'}
        variants={{
          open: {
            scale: 1.8,
          },
          close: {
            scale: 1,
          },
        }}
      >
        <img src={`/icons/${src}`} alt={alt} className="w-14 h-14" />
      </motion.div>
      <motion.div
        className="z-10 flex absolute min-w-max bottom-[85px] font-semibold justify-center items-center py-2 px-4 rounded-lg shadow-xl bg-black text-white"
        animate={view ? 'open' : 'close'}
        variants={variants}
      >
        {content}
      </motion.div>
    </div>
  );
}
