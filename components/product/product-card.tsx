import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: any }) => {
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
          <h2 className="text-sm font-medium min-h-[40px]">{product.name}</h2>
        </Link>

        {/* Rating + Precio / Out Of Stock en una sola línea, perfectamente alineados */}
        <div className="flex justify-between items-center text-sm min-h-[28px]">
          <div className="flex items-center gap-1">
            <span>{product.rating}</span>
            <span>Stars</span>
          </div>

          <div className="flex items-center leading-none">
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} />
            ) : (
              <span className="text-sm text-red-600 font-medium">Out Of Stock</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
