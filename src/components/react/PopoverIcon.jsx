import {
  Tooltip,
} from '@nextui-org/react';

export default function PopoverIcon({ s }) {
  return (
    <Tooltip
      placement="top"
      className="shadow-lg shadow-zinc-300 dark:shadow-zinc-800"
      content={(
        <div className="px-1 py-2">
          <div className="text-xl font-semibold">{s}</div>
        </div>
      )}
    >
      <img src={`/icons/${s}.svg`} alt={s} className="hover:cursor-pointer w-10 h-10 md:w-12 md:h-12 p-1 hover:bg-zinc-200 dark:hover:bg-zinc-400 transition-all rounded-lg" />
    </Tooltip>
  );
}
