import Link from "next/link";
import { PiChatBold, PiMapPin, PiUser } from "react-icons/pi";
import SearchBox from "./SearchBox";
import Button from "./Button";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="shadow-md sticky">
      <div className="m-auto px-10 py-1 flex w-full max-w-screen-2xl items-center gap-1">
        <Link href="/">
          <Image
            src="/logo.png"
            priority
            width={60}
            height={60}
            alt="divar logo"
          />
        </Link>

        <hr className="inline-block h-6 w-[1px] bg-[#0000001f] border-none" />

        <button className="flex items-center gap-2 justify-between rounded-sm transition-all duration-150 ease-linear hover:bg-[#1f1f1f3b] px-3 py-2 text-base text-[#0000008f]">
          <PiMapPin className="text-[#0000008f] text-lg" />
          <span>تهران</span>
        </button>

        <div className="flex grow-[1] mr-4 relative items-center">
          <button className="flex items-center gap-1 rounded-sm transition-all justify-between ml-2 duration-150 ease-linear hover:bg-[#1f1f1f3b] px-4 py-2 text-sm text-[#0000008f]">
            <span>دسته ها</span>
          </button>

          <SearchBox />

          <div className="flex items-center mr-auto">
            <div className="inline-block relative">
              <Button icon={<PiUser />}>دیوار من</Button>
            </div>
            <Button styles={{ marginRight: "8px" }} icon={<PiChatBold />}>
              چت
            </Button>
            <Button styles={{ marginRight: "8px" }}>پشتیبانی</Button>
            <Button styles={{ marginRight: "16px" }} type="primary">
              ثبت آگهی
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
