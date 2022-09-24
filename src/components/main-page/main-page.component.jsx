import { useContext, useState, useEffect } from "react";
import { CountriesContext } from "../../contexts/countries/countries.context";
import { ThemeContext } from "../../contexts/theme/theme.context";
import { Search } from "react-feather";
import CountriesContainer from "../countries-container/countries-container.component";
import CustomSelect from "../custom-select/custom-select.component";
import Spinner from "../spinner/spinner.component";
import "./main-page.styles.scss";

const defaultFilterState = {
  search: "",
  region: "",
};

const selectOptions = [
  {
    title: "Africa",
    value: "Africa",
  },
  {
    title: "America",
    value: "Americas",
  },
  {
    title: "Asia",
    value: "Asia",
  },
  {
    title: "Europe",
    value: "Europe",
  },
  {
    title: "Oceania",
    value: "Oceania",
  },
];

const MainPage = () => {
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [filter, setFilter] = useState(defaultFilterState);
  const { countries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name = "region", value } = e.target;
    setFilter({ ...filter, [name]: value.toLowerCase() });
  };

  useEffect(() => {
    if (countries) {
      if (!filter.region && !filter.search) return setFilteredCountries(countries);
      if (filter.region) {
        setFilteredCountries(countries.filter((country) => country.region.toLowerCase() === filter.region).filter((country) => country.name.toLowerCase().includes(filter.search)));
      } else {
        setFilteredCountries(countries.filter((country) => country.name.toLowerCase().includes(filter.search)));
      }
    }
  }, [filter, countries]);

  return (
    <main>
      <div className={`search-container ${theme ? "dark" : ""}`}>
        <div className="search-box">
          <Search />
          <input type="search" name="search" onChange={handleChange} placeholder="Search for a country..." />
        </div>

        <CustomSelect theme={theme} selectTitle="Filter by Region" options={selectOptions} changeFilter={handleChange} />
      </div>

      {countries ? <CountriesContainer data={filteredCountries} /> : <Spinner theme={theme} />}
    </main>
  );
};

export default MainPage;
