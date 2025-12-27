type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

interface ProductsCardViewProps {
  product: Product;
}

export default function ProductsCardView({product}: ProductsCardViewProps) {

  return (
    <div className="rounded-lg border bg-white shadow-sm hover:shadow-md transition">
      {/* TODO: Add image */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800">
          {product.name}
        </h3>

        <p className="mt-2 text-lg font-semibold text-green-600">
          {product.price.toFixed(2)} €
        </p>
      </div>
    </div>
  );
}