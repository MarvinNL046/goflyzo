import { FC } from 'react';

const FlightFilters: FC = () => {
  return (
    <div className="space-y-6">
      {/* Tussenstops */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-4">Tussenstops</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="ml-2">Direct</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
            <span className="ml-2">1 tussenstop</span>
            <span className="ml-auto text-sm text-gray-500">vanaf € 916</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
            <span className="ml-2">2+ tussenstops</span>
            <span className="ml-auto text-sm text-gray-500">vanaf € 696</span>
          </label>
        </div>
      </div>

      {/* Vertrektijden */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-4">Vertrektijden</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm mb-2">Heen</h4>
            <div className="flex items-center">
              <input type="range" className="w-full" min="0" max="24" />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>00:00</span>
              <span>23:59</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm mb-2">Terugreis</h4>
            <div className="flex items-center">
              <input type="range" className="w-full" min="0" max="24" />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>00:00</span>
              <span>23:59</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reisduur */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-4">Reisduur</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="range" className="w-full" min="15" max="375" />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>15,0 uur</span>
            <span>37,5 uur</span>
          </div>
        </div>
      </div>

      {/* Luchtvaartmaatschappij */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-4">Luchtvaartmaatschappij</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <button className="text-sm text-gray-500">Alles selecteren</button>
            <button className="text-sm text-blue-600">Alles wissen</button>
          </div>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
            <span className="ml-2">Air France</span>
            <span className="ml-auto text-sm text-gray-500">vanaf € 982</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
            <span className="ml-2">Air India</span>
            <span className="ml-auto text-sm text-gray-500">vanaf € 1059</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
            <span className="ml-2">Austrian Airlines</span>
            <span className="ml-auto text-sm text-gray-500">vanaf € 1053</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FlightFilters;
