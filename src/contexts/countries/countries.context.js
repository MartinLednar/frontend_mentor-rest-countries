import { createContext, useState } from "react";

export const CountriesContext = createContext({
  countries: null,
  setCountries: () => {},
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);

  const value = { countries, setCountries };

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};
