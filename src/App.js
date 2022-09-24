import { useContext, useEffect } from "react";
import { CountriesContext } from "./contexts/countries/countries.context";
import { ThemeContext } from "./contexts/theme/theme.context";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import MainPage from "./components/main-page/main-page.component";
import CountryPage from "./components/country-page/country-page.component";
import "./App.css";

function App() {
  const { setCountries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();

        setCountries(data);
      } catch (error) {
        console.log("Failed to fetch the data : " + error);
      }
    };

    getCountries();
  }, [setCountries]);

  return (
    <div className={`app-container ${theme && "dark"}`}>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country/:id" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
