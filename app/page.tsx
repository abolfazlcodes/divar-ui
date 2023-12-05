import { productsData } from "@/data/products";
import ProductsWrapper from "@/features/products/ProductsWrapper";

export default function Home() {
  return (
    <>
      <h1 className="text-left pb-2 block text-xs text-[#0000008f] leading-6">
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم و
        کارکرده، استخدام و خدمات
      </h1>

      <ProductsWrapper data={productsData} />
    </>
  );
}

// "https://s100.divarcdn.com/static/photo/web_thumbnail/SvHGWpL_HaAM2DiHsKYUmw/279963b9-bdb3-4714-b469-02e80a71ba34.webp" - image/webp
// "https://s100.divarcdn.com/static/photo/thumbnail/8QyrytRCd887BfhHB2WpDQ/279963b9-bdb3-4714-b469-02e80a71ba34.jpg
