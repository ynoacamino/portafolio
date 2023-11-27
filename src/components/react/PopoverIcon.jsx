import {
  Popover, PopoverTrigger, PopoverContent,
} from '@nextui-org/react';

export default function PopoverIcon({ s }) {
  return (
    <Popover placement="top">
      <PopoverTrigger className="hover:cursor-pointer">
        <img src={`/icons/${s}.svg`} alt={s} className="w-12 h-12 md:w-14 md:h-14 p-1 hover:bg-gray-300 transition-all rounded-xl" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-xl font-semibold">{s}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
