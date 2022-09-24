import "./spinner.styles.scss";

const Spinner = ({ theme }) => {
  return (
    <div className={`spinner-container ${theme ? "dark" : ""}`}>
      <div className="spinner" />
    </div>
  );
};

export default Spinner;
