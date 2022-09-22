import { Fragment, useContext } from "react";
import { ThemeContext } from "../../contexts/theme/theme.context";
import CountryPreview from "../country-preview/country-preview.component";
import Spinner from "../spinner/spinner.component";
import "./countries-container.styles.scss";

const CountriesContainer = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      {data ? (
        <Fragment>
          {data.length !== 0 ? (
            <div className="countries-grid">
              {data.map((country) => (
                <CountryPreview key={country.numericCode} countryData={country} theme={theme} />
              ))}
            </div>
          ) : (
            <div className={`empty-container ${theme ? "dark" : ""}`}>
              <h2>No results!</h2>
            </div>
          )}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default CountriesContainer;
