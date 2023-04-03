import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getCountryDetails } from "../store/covidSlice";

const Countries = () => {
  const countries = useSelector((state) => state.covid.countries);
  console.log(countries);
  const [country, setCountry] = useState("Afghanistan");
  console.log(country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const selectedCountry = countries?.Countries?.find(
    (item) => item.Country === country
  );
  dispatch(getCountryDetails(selectedCountry));

  return (
    <form className="w-full grid place-items-center mt-20">
      <select
        name="countries"
        id="countries"
        className="w-1/2 p-2 bg-inherit border-b-2 border-zinc-500 focus:outline-none"
        onChange={(e) => setCountry(e.target.value)}
      >
        {countries?.Countries?.map((country, i) => (
          <option key={i} value={country.Country}>
            {country.Country}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Countries;
