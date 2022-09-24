import { useContext, useEffect, useState } from "react";
import { ChevronLeft } from "react-feather";
import { useParams } from "react-router-dom";
import CustomLink from "../custom-link/custom-link.component";
import { CountriesContext } from "../../contexts/countries/countries.context";
import { ThemeContext } from "../../contexts/theme/theme.context";
import Spinner from "../spinner/spinner.component";
import "./country-page.styles.scss";

const CountryPage = () => {
  const [country, setCountry] = useState(null);
  const [neighbours, setNeighbours] = useState(null);
  const { id } = useParams();
  const { countries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const getCountry = (id) => countries.filter((country) => country.alpha3Code === id)[0];

    const getNeighbours = ({ borders }) => countries.filter((country) => borders.includes(country.alpha3Code));
    if (!countries) return;
    const newCountry = getCountry(id);

    if (newCountry?.borders) {
      setNeighbours(getNeighbours(newCountry));
    }

    setCountry(newCountry);
  }, [id, countries]);

  return (
    <main className="country-container">
      <CustomLink path="/" theme={theme}>
        <ChevronLeft /> Back
      </CustomLink>
      {country ? (
        <div className="country-grid">
          <div className="flag-wrapper">
            <img src={country.flag} alt="Country Flag" />
          </div>
          <div className={`country-description ${theme ? "dark" : ""}`}>
            <h2>{country.name}</h2>
            <div className="details-grid">
              <div className="details-left">
                <div className="detail-pair">
                  <p className="detail-bold">Native Name:</p>
                  <p>{country.nativeName}</p>
                </div>
                <div className="detail-pair">
                  <p className="detail-bold">Population:</p>
                  <p>{country.population.toLocaleString("en-US")}</p>
                </div>

                <div className="detail-pair">
                  <p className="detail-bold">Region:</p>
                  <p>{country.region}</p>
                </div>

                <div className="detail-pair">
                  <p className="detail-bold">Sub Region:</p>
                  <p>{country.subregion}</p>
                </div>

                <div className="detail-pair">
                  <p className="detail-bold">Capital:</p>
                  <p>{country?.capital ? country.capital : "None"}</p>
                </div>
              </div>
              <div className="details-right">
                <div className="detail-pair">
                  <p className="detail-bold">Top Level Domain:</p>
                  <p>{country.topLevelDomain.join(" ,")}</p>
                </div>

                <div className="detail-pair">
                  <p className="detail-bold">Currencies:</p>
                  <p>{country?.currencies ? country.currencies.map((currency) => currency.name).join(" ,") : "None"}</p>
                </div>

                <div className="detail-pair">
                  <p className="detail-bold">Languages:</p>
                  <p>{country.languages.map((language) => language.name).join(" ,")}</p>
                </div>
              </div>
            </div>

            {neighbours && (
              <div className="neighbours-box">
                <div className="detail-pair">
                  <p className="detail-bold">Border countries:</p>
                  <p>
                    {neighbours.map((neighbour, i) => (
                      <CustomLink key={i} path={`/country/${neighbour.alpha3Code}`} theme={theme}>
                        {neighbour.name}
                      </CustomLink>
                    ))}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Spinner theme={theme} />
      )}
    </main>
  );
};

export default CountryPage;
