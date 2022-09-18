import { useContext, useEffect, useState } from "react";
import { ChevronLeft } from "react-feather";
import { Link, useParams } from "react-router-dom";
import { CountriesContext } from "../../contexts/countries/countries.context";
import Spinner from "../spinner/spinner.component";
import "./country-page.styles.scss";

const CountryPage = () => {
  const [country, setCountry] = useState(null);
  const [neighbours, setNeighbours] = useState(null);
  const { id } = useParams();
  const { countries } = useContext(CountriesContext);
  console.log(country);

  const getCountry = (id) => countries.filter((country) => country.alpha3Code === id)[0];

  const getNeighbours = ({ borders }) => countries.filter((country) => borders.includes(country.alpha3Code));

  useEffect(() => {
    if (!countries) return;
    const newCountry = getCountry(id);

    if (newCountry?.borders) {
      setNeighbours(getNeighbours(newCountry));
    }

    setCountry(newCountry);
  }, [id, countries]);

  return (
    <div className="country-container">
      <Link to="/">
        <ChevronLeft /> Back
      </Link>
      {country ? (
        <div className="country-grid">
          <img src={country.flag} alt="Country Flag" />
          <div className="country-description">
            <h2>{country.name}</h2>
            <div className="details-grid"></div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CountryPage;
