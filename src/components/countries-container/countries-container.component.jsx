import { Fragment } from "react";
import CountryPreview from "../country-preview/country-preview.component";
import Spinner from "../spinner/spinner.component";
import "./countries-container.styles.scss";

const CountriesContainer = ({ data }) => {
  return (
    <Fragment>
      {data ? (
        <Fragment>
          {data.length !== 0 ? (
            <div className="countries-grid">
              {data.map((country) => (
                <CountryPreview key={country.numericCode} countryData={country} />
              ))}
            </div>
          ) : (
            <div className="empty-container">
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
