import { FC } from 'react';

const FlightSidebar: FC = () => {
  return (
    <div className="space-y-6">
      {/* Hotel Banner */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4">
          <h3 className="font-semibold text-lg">Vlucht gevonden? Nu nog een hotel</h3>
          <p className="text-sm text-gray-600 mt-1">
            Doorzoek resultaten van de beste hotelkies hier op Skyscanner.
          </p>
          <a href="https://trip.tp.st/yeelXIdE" target="_blank" rel="noopener noreferrer" className="block w-full mt-4 bg-[#1a2332] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 text-center">
            Hotels verkennen
          </a>
        </div>
      </div>

      {/* Trip.com Quick Links */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4">
          <h3 className="font-semibold text-lg">Boek via Trip.com</h3>
          <p className="text-sm text-gray-600 mt-1">
            Vind de beste deals voor je reis
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a href="https://trip.tp.st/DrPeHSFI" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium">
              ✈️ Hotel + Vlucht
            </a>
            <a href="https://trip.tp.st/h4kJjHv9" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#1a2332] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 text-center text-sm font-medium">
              🚗 Transfers
            </a>
            <a href="https://trip.tp.st/oLwZ3h1y" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#1a2332] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 text-center text-sm font-medium">
              🚙 Autoverhuur
            </a>
          </div>
        </div>
      </div>

      {/* Sponsored Ads */}
      <div className="space-y-4">
        {/* KLM Ad */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              KLM
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Gesponsord</span>
                <button className="text-gray-400">
                  <span className="sr-only">More information</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <h4 className="font-semibold mt-1">KLM Royal Dutch Airlines</h4>
              <a href="#" className="text-blue-600 text-sm hover:underline">https://www.klm.nl/neth...</a>
              <p className="text-sm mt-2">Fly to Bangkok - KLM Return Fares from €778</p>
              <p className="text-xs text-gray-500 mt-1">Netherlands-Bangkok: Return fares from €778 (+€10/booking)</p>
            </div>
          </div>
        </div>

        {/* eDreams Ad */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-semibold">
              ED
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Gesponsord</span>
                <button className="text-gray-400">
                  <span className="sr-only">More information</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <h4 className="font-semibold mt-1">eDreams</h4>
              <a href="#" className="text-blue-600 text-sm hover:underline">https://nl.edreams.com/</a>
              <p className="text-sm mt-2">Vluchten Düsseldorf - Bangkok vanaf €282 met eDreams</p>
              <p className="text-xs text-gray-500 mt-1">Goedkope Vliegtickets van +650 Airlines Bij eDreams®. Vergelijken & goedkoper vliegen</p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-1">beoordeling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSidebar;
