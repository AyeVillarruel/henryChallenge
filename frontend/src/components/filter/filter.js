import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {filtrarProductosAccion} from '../../redux/productosDuck'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [condition, setCondition] = React.useState('none');
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setCondition(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">condicion</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={condition}
          onChange={handleChange}
          label="condition"
        >
          <MenuItem value={''}>none</MenuItem>
          <MenuItem value={'new'}>new</MenuItem>
          <MenuItem value={'used'}>used</MenuItem>
        </Select>
        <Button variant="contained" onClick={()=>{dispatch(filtrarProductosAccion(condition))}} >filtrar</Button>
      </FormControl>
      
    </div>
  );
}