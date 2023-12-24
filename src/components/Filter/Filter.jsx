import { useDispatch, useSelector } from 'react-redux';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';
import { addFilter, selectFilter } from '../../redux/Filter/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <FilterBox>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={e => dispatch(addFilter(e.currentTarget.value))}
        />
      </FilterLabel>
    </FilterBox>
  );
};

export default Filter;
