import css from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        className={css.seachInput}
        placeholder="Enter a name"
        value={currentFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
