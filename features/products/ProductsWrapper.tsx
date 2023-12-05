import { ProductProps } from "@/types/products.types";
import ProductsCard from "./ui/ProductsCard";

interface IProductsWrapperProps {
  data: ProductProps[];
}

const ProductsWrapper: React.FC<IProductsWrapperProps> = ({ data }) => {
  return (
    <div className="pt-2 pb-44 min-h-[16rem] gap-4 flex flex-wrap mr-2">
      {data.map((product) => (
        <ProductsCard
          key={product.id}
          title={product.title}
          createdAt={product.createdAt}
          description={product.description}
          imageUrls={product.imageUrls}
          href={product.href}
        />
      ))}
    </div>
  );
};

export default ProductsWrapper;
