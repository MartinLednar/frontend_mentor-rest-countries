import { useContext, useEffect } from "react";
import { CountriesContext } from "./contexts/countries/countries.context";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import MainPage from "./components/main-page/main-page.component";
import "./App.css";

function App() {
  const { setCountries } = useContext(CountriesContext);

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
  }, []);

  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/skuska" element={<h1>Muska</h1>} />
      </Routes>
    </div>
  );
}

export default App;
