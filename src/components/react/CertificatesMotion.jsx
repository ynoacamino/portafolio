import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { certificates } from '../../data/certificates';

export default function CertificatesMotion() {
  const [selectedId, setSelectedId] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  useEffect(() => {
    console.log(lastSelected);
  }, [selectedId]);

  return (
    <div className="flex gap-16 max-w-5xl flex-wrap justify-center items-center mt-10 relative">
      {
        certificates.map((c) => (
          <div
            className={`w-44 h-60 transition-all
              ${selectedId != c.name && selectedId !== null && 'opacity-50 brightness-75'}
            `}
            key={c.name}
          >
            <motion.div
              layout
              onClick={() => {
                if (c.name !== selectedId) { setSelectedId(c.name); setLastSelected(c.name); }
              }}
              className={`flex justify-start
              items-center w-44 h-60 border-black border-solid border-2 rounded-lg hover:cursor-pointer
              bg-white z-10
              ${lastSelected === c.name ? 'z-30' : 'z-10'}
              ${selectedId === c.name
                && 'w-full max-w-3xl absolute h-auto min-h-max hover:cursor-default m-auto left-0 right-0 top-10 '}
              `}
            >
              {selectedId === c.name && (
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-8/12 border-solid border-r-black border-2 rounded-l-lg"
                />
              )}
              <div className="flex flex-col gap-6 w-full p-5 justify-center items-center">
                <motion.img
                  src={c.logo}
                  alt={c.name}
                  layout
                  className="w-32 h-32 "
                />
                <motion.span layout className="font-semibold text-xl text-center w-[132px]">
                  {c.name}
                </motion.span>
                {selectedId === c.name && (
                  <>
                    <button
                      type="button"
                      aria-label="salir"
                      className="p-2 absolute top-4 right-4"
                      onClick={() => setSelectedId(null)}
                    >
                      <img src="/icons/x.svg" className="w-4 h-4" alt="salir" />
                    </button>
                    <a
                      href="/"
                      target="_blank"
                      className="hover:cursor-pointer hover:shadow-sm bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 rounded-md"
                      rel="noreferrer"
                    >
                      <div className="w-full
                      flex items-center justify-center gap-4 font-semibold text-base text-white
                      bg-black hover:bg-transparent transition-all px-4 py-2
                      rounded-md"
                      >
                        Link
                        <img src="/web.svg" alt="link" className="invert w-7" />
                      </div>
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        ))
      }
    </div>
  );
}
