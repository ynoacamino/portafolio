import { useState } from 'react';
import MoreOptionsIcon from './MoreOptionsIcon.jsx';
import ButtonLink from './ButtonLink.jsx';
import ExitButton from './ExitButton.jsx';

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" aria-label="más opciones" className="w-9 md:hidden" onClick={handleClick}>
        <MoreOptionsIcon />
      </button>
      <nav className={`flex flex-col items-center justify-center gap-4 fixed h-screen z-[1000]
        w-screen bg-one dark:bg-one-dark top-0 left-0 ${isOpen || 'left-[-100vh] opacity-0'} md:hidden transition-all`}
      >
        <ButtonLink href="/#trabajos">Trabajos</ButtonLink>
        <ButtonLink href="/#proyectos">Proyectos</ButtonLink>
        <ButtonLink href="/#tecnologias">Tecnologías</ButtonLink>
        <ButtonLink href="/#certificados">Certificados</ButtonLink>
        <button type="button" aria-label="salir" className="w-9 mt-20" onClick={handleClick}>
          <ExitButton />
        </button>
      </nav>
    </>
  );
}
