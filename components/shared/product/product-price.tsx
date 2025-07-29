import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <div
      className={cn(
        "inline-flex items-start text-2xl font-semibold",
        className
      )}
    >
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </div>
  );
};

export default ProductPrice;
