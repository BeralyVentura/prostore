import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm flex flex-col">
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

      <CardContent className="p-4 flex flex-col gap-2 flex-1">
        <div className="text-xs text-gray-500">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <p className="text-sm">{product.rating} Stars</p>

        {/* Sección inferior */}
        <div className="flex justify-between items-center mt-auto">
          <ProductPrice value={Number(product.price)}/>
          {product.stock <= 0 && (
            <p className="text-sm text-red-600 font-medium">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;