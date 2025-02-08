import { FC } from 'react';
import Image from 'next/image';
import CTAButton from '../common/CTAButton';

export interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  badge?: string;
  inStock: boolean;
  affiliateLink?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  name,
  description,
  price,
  rating,
  image,
  category,
  badge,
  inStock,
  affiliateLink = '#',
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
          {category}
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Price & Stock Status */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              €{price}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>
          <CTAButton href={affiliateLink} size="sm" disabled={!inStock}>
            {inStock ? 'View Deal' : 'Out of Stock'}
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
