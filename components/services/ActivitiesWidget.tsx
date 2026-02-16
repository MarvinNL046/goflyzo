import { getAffiliate } from '@/lib/affiliates';

interface ActivitiesWidgetProps {
  city: string;
  className?: string;
}

const cityActivitiesData: Record<string, { name: string; duration: string; price: string }[]> = {
  bangkok: [
    { name: 'Grand Palace & Temple Tour', duration: '3-4 hours', price: 'From $25' },
    { name: 'Floating Market Day Trip', duration: 'Full day', price: 'From $30' },
    { name: 'Street Food Evening Tour', duration: '3 hours', price: 'From $28' },
  ],
  phuket: [
    { name: 'Phi Phi Islands Day Trip', duration: 'Full day', price: 'From $45' },
    { name: 'Zip-line Jungle Adventure', duration: '3 hours', price: 'From $40' },
    { name: 'Old Town Walking Tour', duration: '3 hours', price: 'From $15' },
  ],
  'chiang mai': [
    { name: 'Elephant Sanctuary Visit', duration: 'Half day', price: 'From $50' },
    { name: 'Thai Cooking Class', duration: '4-5 hours', price: 'From $30' },
    { name: 'Doi Suthep Temple Tour', duration: '4 hours', price: 'From $18' },
  ],
  krabi: [
    { name: 'Four Islands Snorkeling Tour', duration: 'Full day', price: 'From $28' },
    { name: 'Kayaking & Cave Exploration', duration: 'Half day', price: 'From $32' },
    { name: 'Railay Beach Day Trip', duration: 'Full day', price: 'From $22' },
  ],
  pattaya: [
    { name: 'Coral Island Tour', duration: 'Full day', price: 'From $25' },
    { name: 'Sanctuary of Truth Ticket', duration: '2-3 hours', price: 'From $15' },
    { name: 'Nong Nooch Garden Visit', duration: 'Half day', price: 'From $18' },
  ],
};

const klookCityLinkKeyMap: Record<string, string> = {
  bangkok: 'bangkok',
  phuket: 'phuket',
  'chiang mai': 'chiangMai',
};

const gygCityLinkKeyMap: Record<string, string> = {
  bangkok: 'bangkok',
};

export default function ActivitiesWidget({ city, className = '' }: ActivitiesWidgetProps) {
  const klook = getAffiliate('klook');
  const gyg = getAffiliate('getyourguide');

  if (!klook || !gyg) return null;

  const cityKey = city.toLowerCase();
  const activities = cityActivitiesData[cityKey] || cityActivitiesData.bangkok;
  const klookLinks = klook.links || {};
  const gygLinks = gyg.links || {};
  const klookLinkKey = klookCityLinkKeyMap[cityKey] || 'thailand';
  const gygLinkKey = gygCityLinkKeyMap[cityKey] || 'thailand';
  const klookLink = klookLinks[klookLinkKey] || klookLinks.thailand || klook.url;
  const gygLink = gygLinks[gygLinkKey] || gygLinks.thailand || gyg.url;

  return (
    <div className={`bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Top Activities & Tours in {city}
      </h3>
      <div className="space-y-3 mb-6">
        {activities.map((activity) => (
          <div key={activity.name} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">{activity.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{activity.duration}</p>
              </div>
              <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm whitespace-nowrap ml-2">{activity.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={klookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm"
        >
          Book on Klook
        </a>
        <a
          href={gygLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm"
        >
          GetYourGuide
        </a>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center">
        Affiliate links — we may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}
