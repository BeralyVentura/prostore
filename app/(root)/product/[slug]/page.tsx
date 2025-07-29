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
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Images Column */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>

        {/* Details Column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p className="text-sm text-muted-foreground">
              {product.brand} {product.category}
            </p>

            <h1 className="text-2xl font-bold">{product.name}</h1>

            <p className="text-sm text-muted-foreground">
              {product.rating.toString()} of {product.numReviews} Reviews
            </p>

            {/* Precio en verde con decimales elevados */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                value={Number(product.price)}
                className="bg-green-100 text-green-700 px-4 py-1 rounded-full"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="font-semibold text-base">Description</p>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>

        {/* Action Column */}
        <div className="p-4 mt-10 md:pr-2">
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                <div>Price</div>
                <div>
                  <ProductPrice
                    value={Number(product.price)}
                    className="text-xl font-semibold text-neutral-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge
                    variant="outline"
                    className="border-black text-black dark:border-white dark:text-white"
                  >
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              {product.stock > 0 && (
                <div className="mt-6">
                  <Button className="w-full text-base font-semibold bg-black text-white hover:bg-neutral-800">
                    Add To Cart
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
