import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm flex flex-col border-0 shadow-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
            className="object-contain"
          />
        </Link>
      </CardHeader>

      <CardContent className="p-2 flex flex-col gap-1 flex-1"> 
        <div className="text-xs text-gray-500">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium line-clamp-2 h-10">{product.name}</h2>
        </Link>

        <div className="flex justify-between items-center text-sm h-6"> 
          <div className="flex items-center gap-1">
            <span>{product.rating}</span>
            <span>Stars</span>
          </div>

          <div className="flex items-center leading-none">
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} />
            ) : (
              <span className="text-xs text-red-600 font-medium">Out Of Stock</span> // Texto más pequeño
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
