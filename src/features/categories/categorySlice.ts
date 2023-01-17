import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  deleted_at: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description: null | string;
}


const category:Category = {
  id: "3101c9ca-c757-4f86-89f7-2622b2caaf40",
  name: "Olive",
  description: "Olive is a fictional superhero appearing in American comic books",
  is_active: true,
  deleted_at: null,
  created_at: "2019-03-08T12:00:00.000Z",
  updated_at: "2019-03-08T12:00:00.000Z"
}

export const initialState = [category,
    { ...category, id: "7b3f4883-862c-4db3-8b64-fd723d28adbe", name: "Peach"},
    { ...category, id: "7f66c641-0677-445d-9195-d0fbbd7ce8d6", name: "Apple"},
    {...category, id: "8a2fdbe9-f793-4990-85b7-6b08ec7d7673", name: "Banana"}];


const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state,action){},
    updateCcreateCategory(state,action){},
    deleteCcreateCategory(state,action){},
  }
});

export default categoriesSlice.reducer;