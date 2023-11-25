import {
  Popover, PopoverTrigger, PopoverContent,
} from '@nextui-org/react';

export default function Card({ s }) {
  return (
    <Popover placement="top">
      <PopoverTrigger className="hover:cursor-pointer">
        <img src={`/icons/${s}.svg`} alt={s} className="w-14 h-14 p-1 hover:bg-gray-200 transition-all rounded-xl" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-xl font-bold">{s}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
