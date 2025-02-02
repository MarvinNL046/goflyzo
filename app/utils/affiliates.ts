import affiliatesData from '../../data/json/affiliates.json';

interface AffiliateData {
  link: string;
  widget: string;
}

interface AffiliateCategories {
  esims: {
    airalo: AffiliateData;
  };
}

export function getAffiliateLink(category: keyof AffiliateCategories, provider: string): string {
  try {
    const data = affiliatesData[category][provider as keyof typeof affiliatesData[typeof category]];
    return data?.link || '';
  } catch (error) {
    console.error(`Error getting affiliate link for ${category}/${provider}:`, error);
    return '';
  }
}

export function getAffiliateWidget(category: keyof AffiliateCategories, provider: string): string {
  try {
    const data = affiliatesData[category][provider as keyof typeof affiliatesData[typeof category]];
    return data?.widget || '';
  } catch (error) {
    console.error(`Error getting affiliate widget for ${category}/${provider}:`, error);
    return '';
  }
}

export function getAffiliateData(category: keyof AffiliateCategories, provider: string): AffiliateData | null {
  try {
    return affiliatesData[category][provider as keyof typeof affiliatesData[typeof category]] || null;
  } catch (error) {
    console.error(`Error getting affiliate data for ${category}/${provider}:`, error);
    return null;
  }
}
