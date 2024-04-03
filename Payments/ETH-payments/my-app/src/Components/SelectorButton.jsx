import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector() {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    dispatch({ type: 'SELECT_TOUR', payload: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Tour</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Tour"
          onChange={handleChange}
        >
          <MenuItem value={"Cuyabeno"}>Cuyabeno</MenuItem>
          <MenuItem value={"Papallacta"}>Papallacta</MenuItem>
          <MenuItem value={"Otavalo"}>Otavalo</MenuItem>
          <MenuItem value={"Mindo"}>Mindo</MenuItem>
          <MenuItem value={"Quilotoa"}>Quilotoa</MenuItem>
          <MenuItem value={"Cotopaxi-H"}>Cotopaxi-Hike</MenuItem>
          <MenuItem value={"Cotopaxi-S"}>Cotopaxi-Summit</MenuItem>
          <MenuItem value={"Galapagos-S"}>Galápagos-Standard</MenuItem>
          <MenuItem value={"Galapagos-H"}>Galápagos-High</MenuItem>
          <MenuItem value={"Galapagos-P"}>Galápagos-Promo</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
  return value;
}