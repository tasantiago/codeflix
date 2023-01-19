import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Category, selectCategoryById } from "./categorySlice";

export const CategoryCreate = () => {

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
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>


      </Paper>
    </Box>
    )
}