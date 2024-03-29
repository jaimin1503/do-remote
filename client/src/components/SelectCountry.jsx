import React, { useEffect, useState } from "react";
import Select from "react-select";

const SelectCountry = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=false&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  useEffect(() => {
    // Invoke the callback function whenever selectedCountry changes
    onCountrySelect(selectedCountry);
  }, [selectedCountry]);

  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
  );
};

export default SelectCountry;
