/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/photos/1.webp',
  '/photos/2.webp',
  '/photos/3.webp',
  '/photos/4.webp',
];

const variants = {
  enter: {
    opacity: 0,
    display: 'none',
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    display: 'block',
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    display: 'none',
  },
};

export default function Example() {
  const [page, setPage] = useState(1);

  const paginate = (newDirection) => {
    if (page === 0 && newDirection === -1) {
      setPage(images.length - 1);
    } else if (page === images.length - 1 && newDirection === 1) {
      setPage(0);
    } else {
      setPage((prevPage) => prevPage + newDirection);
    }
  };

  return (
    <div className="relative w-full h-min">
      <AnimatePresence initial={false}>
        <motion.img
          className="w-full"
          key={page}
          src={images[page]}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.2 },
          }}
        />
      </AnimatePresence>
      <motion.button
        type="button"
        className="absolute top-1/2 right-4 flex justify-center items-center w-8 h-8 rounded-full
         bg-white text-2xl p-2"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ x: 10 }}
      >
        <img src="/icons/derecho.svg" alt="pasar imagen" className="mr-[-3px]" />
      </motion.button>
      <motion.button
        type="button"
        className="absolute top-1/2 left-4 flex justify-center text-2xl items-center w-8 h-8 rounded-full
         bg-white p-2"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ x: -10 }}
      >
        <img src="/icons/izquierdo.svg" alt="pasar imagen" className="ml-[-3px]" />
      </motion.button>
    </div>
  );
}
