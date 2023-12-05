import { productsData } from "@/data/products";
import ProductsWrapper from "@/features/products/ProductsWrapper";

export default function Home() {
  return (
    <>
      <h1 className="text-left pb-2 md:block text-xs text-[#0000008f] leading-6 hidden">
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم و
        کارکرده، استخدام و خدمات
      </h1>

      <ProductsWrapper data={productsData} />
    </>
  );
}
