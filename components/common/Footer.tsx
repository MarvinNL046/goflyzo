import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  const services = [
    { name: 'Hotels', href: '/services/hotels' },
    { name: 'Flights', href: '/services/flights' },
    { name: 'eSIMs', href: '/services/esims' },
    { name: 'Travel Insurance', href: '/services/travel-insurance' },
    { name: 'Car Rental', href: '/services/car-rental' },
    { name: 'Ferry Services', href: '/services/ferry-services' },
    { name: 'Taxi Services', href: '/services/taxi-services' },
    { name: 'Train Services', href: '/services/train-services' },
    { name: 'Travel Products', href: '/services/travel-products' },
  ];

  const features = [
    { name: 'AI Travel Assistant', href: '/chat' },
    { name: 'Locations', href: '/locations' },
    { name: 'Blog', href: '/blog' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Become a Partner', href: '/partner' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              GoFlyzo
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Your trusted partner for all travel-related services. Find the best deals on hotels,
              flights, and more.
            </p>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">More Services</h3>
            <ul className="space-y-2">
              {services.slice(6).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature.href}>
                  <Link
                    href={feature.href}
                    className="text-gray-400 hover:text-blue-400 text-sm"
                  >
                    {feature.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/airalo"
                  className="text-gray-400 hover:text-blue-400 text-sm"
                >
                  Airalo eSIM
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-gray-400 hover:text-blue-400 text-sm"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GoFlyzo. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
