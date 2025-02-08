import { metadata } from './page';
import PartnerSchema from './schema';

export { metadata };

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PartnerSchema />
      {children}
    </>
  );
}
