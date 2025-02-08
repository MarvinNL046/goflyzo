import { metadata } from './metadata';
import HotelSearchSchema from './schema';

export { metadata };

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HotelSearchSchema />
      {children}
    </>
  );
}
