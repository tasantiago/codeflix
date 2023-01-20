import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Switch, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../categorySlice';

type Props = {
  category: Category;
  isdisabled: boolean;
  onSubmit: (e:React.FormEvent<HTMLFormElement>)=>void;
};


export function CategoryFrom() {

  const [isdisabled, setIsdisabled] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
    description: "",
  })

  const handleChange = (e:any) => {};
  const handleToggle = (e:any) => {};
  
  return (
    <Box p={2}>
    <form>
      <Grid container spacing = {3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              required
              name = "name"
              label = "Name"
              value = {category.name}
              disabled={isdisabled}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs = {12}>
        <FormControl fullWidth>
          <TextField
            required
            name = "description"
            label = "Description"
            disabled= {isdisabled}
            onChange={handleChange}
            value={category.description}
          />
        </FormControl>
      </Grid>
      <Grid item xs = {12}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                name = "is_active"
                color="secondary"
                onChange={handleToggle}
                checked={category.is_active}
                inputProps={{"aria-label": "controled"}}
              />
            }
            label="Active"
          />
        </FormGroup>
      </Grid>
      <Grid item xs = {12}>
        <Box display="flex" gap = {2}>
          <Button variant="contained" component={Link} to="/categories">
            Back
          </Button>
          <Button 
            type = "submit"
            variant="contained"
            color="secondary"
            disabled={isdisabled}
          >
            Save
          </Button>
        </Box>
      </Grid>

    </form>
  </Box>
  )
}
