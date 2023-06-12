import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/filterSlice';

export const Filter = () => {
  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contact by name <br />
      <input type="text" value={filter} onChange={changeFilter}></input>
    </label>
  );
};
