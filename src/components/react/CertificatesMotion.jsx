import { motion } from 'framer-motion';
import { useState } from 'react';
import { certificates } from '../../data/certificates';

export default function CertificatesMotion() {
  const [selectedId, setSelectedId] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  return (
    <div className="flex gap-8 max-w-5xl flex-wrap justify-center items-center mt-10 relative ">
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
              items-center w-44 h-60 border-solid border-2 rounded-lg hover:cursor-pointer
              bg-one dark:bg-one-dark z-10 hover:border-black dark:hover:border-white transition-colors
              ${lastSelected === c.name ? 'z-30' : 'z-10'}
              ${selectedId === c.name
                ? 'w-full border-black max-w-md flex-col lg:flex-row lg:max-w-3xl absolute h-auto hover:cursor-default m-auto left-0 right-0 md:top-10 min-h-[384px]'
                : 'border-transparent'
              }
              `}
            >
              {selectedId === c.name && (
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-full lg:w-8/12 border-solid border-b-black
                  lg:border-r-black border-2 rounded-t-lg lg:rounded-l-lg lg:border-b-0 lg:rounded-t-none"
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
                      href={c.url}
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
