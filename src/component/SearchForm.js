import { Form } from "react-router-dom";

const SearchForm = () => {
  return (
    <Form className="form">
      <div className="form-row">
        <input
          type="search"
          name="search"
          placeholder="Search for a country..."
          className="form-input"
        />
      </div>
    </Form>
  );
};
export default SearchForm;
