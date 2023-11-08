type SearchInputProps = {
  value: string;
  onChange: any;
  onClick: any;
};

export const SearchInput = ({ value, onChange, onClick }: SearchInputProps) => {
  return (
    <div className="container">
      <div className="container__item">
        <form className="form">
          <input
            type="text"
            className="form__field"
            placeholder="Searchtext"
            value={value}
            onChange={onChange}
          />
          <button
            type="button"
            className="btn btn--primary btn--inside uppercase"
            onClick={onClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
