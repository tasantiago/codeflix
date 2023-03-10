import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Category, createCategory, selectCategoryById } from "./categorySlice";
import { CategoryFrom } from "./components/CategoryFrom";

export const CategoryCreate = () => {

  const [isdisabled, setIsdisabled] = useState(false);
  const [categoryState, setCategoryState] = useState<Category>({
    id: "",
    name: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
    description: "",
  })
  const dispatch = useAppDispatch();
  const {enqueueSnackbar} = useSnackbar();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createCategory(categoryState))
    enqueueSnackbar("Category created sucessfully", {variant: "success"})

  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setCategoryState({...categoryState, [name]:value});
  };

  const handleToggle = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name , checked} = e.target;
    setCategoryState({...categoryState, [name]:checked});
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
        <CategoryFrom
          category={categoryState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleToggle={handleToggle}
          isdisabled={isdisabled}
          isLoading={false}
        />

      </Paper>
    </Box>
    )
}