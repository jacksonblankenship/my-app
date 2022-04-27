import "./styles.css";

const Search = ({ searchValue, onChange }) => {
  return (
    <div className="Search">
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
