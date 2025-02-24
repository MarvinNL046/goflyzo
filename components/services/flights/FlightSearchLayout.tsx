import { FC, ReactNode } from 'react';

interface FlightSearchLayoutProps {
  filters: ReactNode;
  mainContent: ReactNode;
  sidebar: ReactNode;
}

const FlightSearchLayout: FC<FlightSearchLayoutProps> = ({
  filters,
  mainContent,
  sidebar,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Progress Bar */}
      <div className="bg-[#111827] dark:bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-20">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-lg font-bold shadow-lg">✓</div>
                <span className="ml-3 text-lg font-medium">Vlucht</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold shadow-lg">2</div>
                <span className="ml-3 text-lg font-medium">Gegevens</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold shadow-lg">3</div>
                <span className="ml-3 text-lg font-medium">Extra&apos;s</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold shadow-lg">4</div>
                <span className="ml-3 text-lg font-medium">Voltoolen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#111827] text-white py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center bg-[#1f2937] dark:bg-gray-800 rounded-xl p-4 hover:bg-[#374151] dark:hover:bg-gray-700 transition-colors shadow-lg">
            <div className="flex-1 flex items-center">
              <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <div className="flex items-center w-full">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <input
                  type="text"
                  className="w-full bg-transparent border-none focus:ring-0 text-white text-lg placeholder-gray-300 dark:placeholder-gray-400 hover:placeholder-gray-200 dark:hover:placeholder-gray-300 transition-colors"
                  placeholder="Düsseldorf (DUS) - Bangkok (Alle)"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 px-6 border-x border-gray-600 dark:border-gray-700 mx-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <input
                type="text"
                className="bg-transparent border-none focus:ring-0 text-white text-lg placeholder-gray-300 dark:placeholder-gray-400 hover:placeholder-gray-200 dark:hover:placeholder-gray-300 transition-colors w-28"
                placeholder="17 feb."
              />
              <span className="text-gray-300 dark:text-gray-400 text-lg">-</span>
              <input
                type="text"
                className="bg-transparent border-none focus:ring-0 text-white text-lg placeholder-gray-300 hover:placeholder-gray-200 transition-colors w-28"
                placeholder="11 mrt."
              />
            </div>
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold flex items-center shadow-md">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Zoeken
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-1/4">
            {filters}
          </div>

          {/* Main Content Area */}
          <div className="w-1/2">
            {mainContent}
          </div>

          {/* Right Sidebar - Ads */}
          <div className="w-1/4">
            {sidebar}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchLayout;
