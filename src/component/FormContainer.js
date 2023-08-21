import { Form } from "react-router-dom";
import { useGlobalContext } from "./context";
import SearchForm from "./SearchForm";
import FilterForm from "./FilterForm";

const FormContainer = ({ setRegion }) => {
  return (
    <div className="form-container">
      <SearchForm />
      <FilterForm setRegion={setRegion} />
    </div>
  );
};
export default FormContainer;
