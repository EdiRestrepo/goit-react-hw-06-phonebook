import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export const Filter = ({ setFilterToState }) => {
  const setFilterValue = (event) => {
    let value = event.currentTarget.value.toUpperCase();
    setFilterToState(value);
  };

  return (
    <TextField
      onChange={setFilterValue}
      label="Find contacts by name"
      size="small"
      variant="outlined"
    />
  );
};

export default Filter;

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
