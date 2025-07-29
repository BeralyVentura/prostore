import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product-price';
import ProductImages from '@/components/shared/product/product-images';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params }: ProductPageProps) => {
  const { slug } = params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="max-w-7xl mx-auto px-4">
      {/* Detalles del producto principal */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10">
        {/* Columna de imágenes */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>

        {/* Columna de detalles */}
        <div className="col-span-2 p-0">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              {product.brand} • {product.category}
            </p>

            <h1 className="text-2xl font-bold tracking-tight">{product.name}</h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span>{product.rating}</span>
                <span className="text-muted-foreground">({product.numReviews} reviews)</span>
              </div>
            </div>

            <ProductPrice
              value={Number(product.price)}
              className="text-green-600 font-bold text-xl"
            />
          </div>

          <div className="mt-6 space-y-2">
            <p className="font-semibold text-base">Description</p>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>

        {/* Columna de acciones */}
        <div className="p-0">
          <Card className="border">
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-sm">Price</div>
                <ProductPrice
                  value={Number(product.price)}
                  className="font-semibold"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm">Status</div>
                {product.stock > 0 ? (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              {product.stock > 0 && (
                <Button className="w-full bg-black hover:bg-gray-800 h-10">
                  Add To Cart
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
