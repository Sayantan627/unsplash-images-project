import { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  //   const [text, setText] = useState("");
  //   const handleChange = (e) => {
  //     setText(e.target.value);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    if (!searchTerm) return;
    setSearchValue(searchTerm);
    // setText("");
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
          //   value={text}
          //   onChange={handleChange}
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
