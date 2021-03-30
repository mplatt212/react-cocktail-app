import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
      searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
      setSearchTerm(searchValue.current.value)
  }

  return (
    <>
      <section className="section search">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-control">
            <label htmlFor="search">Search Your Favorite Cocktail</label>
            <input
              type="text"
              id="search"
              name='name'
              ref={searchValue}
              onChange={searchCocktail}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchForm;
