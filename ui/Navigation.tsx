import Link from "next/link";
import { PiChatBold, PiMapPin, PiUser } from "react-icons/pi";
import SearchBox from "./SearchBox";
import Button from "./Button";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

const Navigation = () => {
  return (
    <nav className="shadow-md sticky">
      <div className="m-auto lg:px-10 px-2 py-1 flex w-full max-w-screen-2xl items-center gap-1">
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

        <Button icon={<PiMapPin />}>تهران</Button>

        <div className="flex grow-[1] mr-4 relative items-center">
          <div className="hidden lg:flex ml-2">
            <Button icon={<FaChevronDown />} changeOrder>
              دسته ها
            </Button>
          </div>

          <SearchBox />

          <div className="flex items-center mr-auto">
            <div className="hidden lg:flex">
              <div className="inline-block relative">
                <Button icon={<PiUser />}>دیوار من</Button>
              </div>
              <Button styles={{ marginRight: "8px" }} icon={<PiChatBold />}>
                چت
              </Button>
              <Button styles={{ marginRight: "8px" }}>پشتیبانی</Button>
            </div>
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
