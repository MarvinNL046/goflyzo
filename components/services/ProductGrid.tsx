import { FC } from 'react';
import ProductCard from '../common/ProductCard';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  brand: string;
  badge?: string;
  affiliateLink?: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          image={product.image}
          category={product.category}
          brand={product.brand}
          badge={product.badge}
          affiliateLink={product.affiliateLink}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
