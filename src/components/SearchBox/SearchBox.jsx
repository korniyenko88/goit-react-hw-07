import styles from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useId } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchName = useId();

  return (
    <div className={styles.divsearch}>
      <label htmlFor={searchName} className={styles.searchinput}>
        <span className={styles.tex}>find contacts by name</span>
        <input
          className={styles.input}
          type="text"
          id={searchName}
          placeholder="Search contacts..."
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
