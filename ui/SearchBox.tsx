import { PiMagnifyingGlassBold } from "react-icons/pi";

const SearchBox = () => {
  return (
    <div className="flex-1 h-10 ml-2 max-w-md">
      <div>
        <div className="w-full bg-[#0000000a] relative transition-all duration-75 rounded-[4px]">
          <div className="flex items-center gap-2 h-10 px-2">
            <PiMagnifyingGlassBold className="text-[#0000008f] hover:text-black duration-150 ease-linear" />

            <form className="h-full flex grow-[1]">
              <input
                type="text"
                name=""
                id=""
                className="bg-transparent border-none border-4 box-border text-[#000000de] flex text-base outline-0 duration-150 ease-linear"
                autoComplete="off"
                placeholder="جستجو در همه آگهی ها"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
