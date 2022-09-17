import { useState } from "react";
import { ChevronDown } from "react-feather";
import "./custom-select.styles.scss";

const CustomSelect = ({ selectTitle, options, changeFilter }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setActiveOption(value);
    changeFilter(e);
  };

  return (
    <div className="select-box" onClick={toggleMenu}>
      {activeOption ? activeOption : selectTitle}
      <ChevronDown />

      {menuOpen && (
        <div className="select-options">
          {options.map((option, i) => (
            <option key={i} value={option.value} onClick={handleChange}>
              {option.title}
            </option>
          ))}
          <option value="" onClick={handleChange}>
            Reset
          </option>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
