import { Form } from "react-router-dom";

const FilterForm = ({ setRegion }) => {
  return (
    <Form className="form">
      <div className="form-row">
        <select
          value=""
          onChange={(e) => {
            setRegion(e.currentTarget.value);
          }}
          className="form-select"
        >
          <option value="all" hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </Form>
  );
};
export default FilterForm;
