'use client';
// icons
import SearchIcon from '../icons/SearchIcon';

export default function SearchInput() {
  return (
    <div className="relative w-[30rem] h-[48px] ml-1">
      <input
        className="w-full h-full border-[#89CFF0] border-2 pr-[50px] rounded pl-[14px]"
        type="text"
      />
      <button
        type="button"
        className="absolute top-0 right-0 w-[50px] h-full rounded-full"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
