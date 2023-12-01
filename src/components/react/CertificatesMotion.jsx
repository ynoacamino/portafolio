import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { certificates } from '../../data/certificates';

export default function CertificatesMotion() {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);

  return (
    <div className="flex gap-8 flex-wrap justify-center items-center mt-10 relative">
      {
        certificates.map((c) => (
          <motion.div
            key={c.name}
            layoutId={c.name}
            onClick={() => setSelectedId(c.name)}
            whileHover={{ scale: 1.1 }}
            className={`flex flex-col gap-6 justify-start
            items-center w-44 h-60 border-transparent border-solid border- p-5 rounded-lg hover:cursor-pointer`}
          >
            <motion.img
              layoutId={c.img}
              src={c.logo}
              alt={c.name}
              className="w-32 h-32"
            />
            <motion.span className="font-semibold text-xl text-center">
              {c.name}
            </motion.span>
          </motion.div>
        ))
      }
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="bg-white border-solid border-black border-2 rounded-xl w-full max-w-3xl absolute p-6 flex"
          >
            <motion.img
              src={certificates.find((c) => c.name === selectedId).img}
              alt={certificates.find((c) => c.name === selectedId).name}
              className="w-7/12"
            />
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <motion.img
                layoutId={certificates.find((c) => c.name === selectedId).img}
                src={certificates.find((c) => c.name === selectedId).logo}
                alt={certificates.find((c) => c.name === selectedId).name}
                className="w-44 h-44"
              />
              <motion.span className="font-semibold text-xl text-center">
                {certificates.find((c) => c.name === selectedId).name}
              </motion.span>
              <a
                href="/"
                className="hover:cursor-pointer hover:shadow-sm bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 rounded-md"
              >
                <div className="w-full
                flex items-center justify-center gap-4 font-semibold text-base text-white
                bg-black hover:bg-transparent transition-all px-4 py-2
                rounded-md"
                >
                  Link
                </div>
              </a>
            </div>
            <motion.button
              onClick={() => setSelectedId(false)}
              className="rounded-full w-9 h-9 bg-white text-gray-700 absolute top-4 right-4"
            >
              X
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
