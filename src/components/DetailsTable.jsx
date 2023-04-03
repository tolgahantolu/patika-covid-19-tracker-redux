import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DetailsTable = () => {
  const [chartData, setChartData] = useState([]);
  const selectedCountry = useSelector((state) => state.covid.selectedCountry);
  console.log(selectedCountry);

  useEffect(() => {
    selectedCountry
      ? setChartData([
          { name: "Infected", value: selectedCountry?.TotalConfirmed },
          { name: "Recovered", value: selectedCountry?.TotalRecovered },
          { name: "Death", value: selectedCountry?.TotalDeaths },
          { name: "Active", value: selectedCountry?.TotalRecovered },
        ])
      : setChartData([]);
  }, [selectedCountry]);

  return (
    <>
      <div className="mt-10 w-full grid grid-cols-4 place-items-center gap-5">
        <div className="w-full h-full">
          <h2 className="text-4xl bg-sky-600 text-white p-2">Infected</h2>
          <div className="h-full border-2 border-t-0 border-b-8 border-sky-400 pt-0">
            <div className="text-center py-5 px-2">
              <p className="text-5xl text-medium">
                {selectedCountry?.TotalConfirmed}
              </p>
              <p className="text-xl mt-5">
                Last updated at: {selectedCountry?.Date}
              </p>
              <p className="text-xl mt-5">
                Number of infected cases of COVID-19 from{" "}
                {selectedCountry?.Country}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <h2 className="text-4xl bg-green-600 text-white p-2">Recovered</h2>
          <div className="h-full border-2 border-t-0 border-b-8 border-green-400 pt-0">
            <div className="text-center py-5 px-2">
              <p className="text-5xl text-medium">
                {selectedCountry?.TotalRecovered}
              </p>
              <p className="text-xl mt-5">
                Last updated at: {selectedCountry?.Date}
              </p>
              <p className="text-xl mt-5">
                Number of recovered cases of COVID-19 from{" "}
                {selectedCountry?.Country}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <h2 className="text-4xl bg-red-600 text-white p-2">Deaths</h2>
          <div className="h-full border-2 border-t-0 border-b-8 border-red-400 pt-0">
            <div className="text-center py-5 px-2">
              <p className="text-5xl text-medium">
                {selectedCountry?.TotalDeaths}
              </p>
              <p className="text-xl mt-5">
                Last updated at: {selectedCountry?.Date}
              </p>
              <p className="text-xl mt-5">
                Number of death cases of COVID-19 from{" "}
                {selectedCountry?.Country}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <h2 className="text-4xl bg-orange-600 text-white p-2">Active</h2>
          <div className="h-full border-2 border-t-0 border-b-8 border-orange-400 pt-0">
            <div className="text-center py-5 px-2">
              <p className="text-5xl text-medium">
                {selectedCountry?.TotalRecovered}
              </p>
              <p className="text-xl mt-5">
                Last updated at: {selectedCountry?.Date}
              </p>
              <p className="text-xl mt-5">
                Number of active cases of COVID-19 from{" "}
                {selectedCountry?.Country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-20">
        <BarChart width={940} height={250} data={chartData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#1c1d1c" />
        </BarChart>
      </div>
    </>
  );
};

export default DetailsTable;
