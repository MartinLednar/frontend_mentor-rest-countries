import { Link } from "react-router-dom";
import "./country-preview.styles.scss";

const CountryPreview = ({ countryData: { flag, name, population, region, capital, alpha3Code } }) => {
  return (
    <Link to={`/country/${alpha3Code}`} className="country-preview-container">
      <div className="flag-box">
        <img src={flag} alt={`Flag of ${name}`} />
      </div>

      <div className="details-box">
        <h2>{name}</h2>

        <div className="detail-pair">
          <p className="detail-bold">Population:</p>
          <p>{population.toLocaleString("en-US")}</p>
        </div>

        <div className="detail-pair">
          <p className="detail-bold">Region:</p>
          <p>{region ? region : "None"}</p>
        </div>

        <div className="detail-pair">
          <p className="detail-bold">Capital:</p>
          <p>{capital ? capital : "None"}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryPreview;
