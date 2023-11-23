export default function ButtonLink({ children }) {
  return (
    <a className="w-40 hover:cursor-pointer hover:shadow-sm transition-all border-black border-solid border-2
     bg-white flex items-center justify-center gap-4 font-semibold text-lg
       text-black px-4 py-2 rounded-md"
    >
      {children}
    </a>
  );
}
