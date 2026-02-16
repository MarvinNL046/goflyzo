import fs from 'fs';
import path from 'path';

export interface Affiliate {
  name: string;
  description: string;
  url: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  features: string[];
  benefits: string[];
  cta: {
    text: string;
    url: string;
  };
  links?: Record<string, string>;
}

interface AffiliateData {
  affiliates: Record<string, Affiliate>;
}

function getAffiliateData(): AffiliateData {
  const filePath = path.join(process.cwd(), 'data', 'json', 'affiliates.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAffiliate(name: string): Affiliate | null {
  const { affiliates } = getAffiliateData();
  return affiliates[name] || null;
}

export function getAllAffiliates(): Affiliate[] {
  const { affiliates } = getAffiliateData();
  return Object.values(affiliates);
}
