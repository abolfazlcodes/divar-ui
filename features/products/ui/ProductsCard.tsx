import { ProductProps } from "@/types/products.types";
import Image from "next/image";
import { PiChatBold } from "react-icons/pi";

const ProductsCard: React.FC<Omit<ProductProps, "id">> = ({
  createdAt,
  description,
  imageUrls,
  title,
}) => {
  return (
    <article className="h-[11.5rem] p-3 w-full xl:max-w-[32%] border rounded-md cursor-pointer">
      <article className="mb-4bg-white rounded-md flex w-full h-40 relative">
        <div className="flex w-full gap-1">
          <div className="flex flex-col grow-[1] w-1/3 relative">
            <h2 className="text-base font-semibold h-14 leading-7 mb-auto mt-0 overflow-hidden text-[#000000de]">
              {title}
            </h2>
            <p className=" text-sm leading-6 min-w-full overflow-hidden break-words text-ellipsis whitespace-nowrap w-0 text-[#0000008f]">
              {description.at(0)}
            </p>
            <p className=" text-sm leading-6 min-w-full overflow-hidden break-words text-ellipsis whitespace-nowrap w-0 text-[#0000008f]">
              {description.at(1)}
            </p>

            <div className="flex items-center leading-6 whitespace-nowrap break-words">
              <span className="text-xs text-[#0000008f] overflow-hidden text-ellipsis whitespace-nowrap">
                {createdAt}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-end w-max text-[#0000008f] cursor-pointer">
            <PiChatBold />
          </div>

          {/* thumbnail */}
          <div className="flex self-center h-40 overflow-hidden border w-40 bg-[#f5f5f5] mr-1 rounded-md">
            <picture className="rouned-md block overflow-hidden w-full relative">
              <source
                srcSet={imageUrls[0].src}
                type={imageUrls[0].fileType}
              ></source>
              <Image
                decoding="sync"
                fetchPriority="high"
                className="block h-full left-0 object-cover absolute top-0 w-full"
                fill
                src={imageUrls[1].src}
                alt={imageUrls[1].alt}
              />
            </picture>
          </div>
        </div>
      </article>
    </article>
  );
};

export default ProductsCard;
