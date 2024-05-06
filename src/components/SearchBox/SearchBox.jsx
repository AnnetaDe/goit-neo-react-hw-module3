import s from './SearchBox.module.css';
import { useId } from 'react';
const SearchBox = ({ value, onSearch }) => {
  const labelId = useId();
  return (
    <div className={s.searchBox}>
      <label htmlFor={labelId}>
        <span>Search contact by name</span>
        <input
          type="text"
          value={value}
          onChange={e => onSearch(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
