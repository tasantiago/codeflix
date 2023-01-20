
import { Box,ThemeProvider, Typography } from '@mui/material';
import { Header } from './components/Header';
import * as React from 'react';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route, Link } from 'react-router-dom';
import { CategoryList } from './features/categories/ListCategory';
import { CategoryCreate } from './features/categories/CreateCategory';
import { CategoryEdit } from './features/categories/EditCategory';
import { SnackbarProvider } from 'notistack';

function App() {
    return <ThemeProvider theme={appTheme }>
      <SnackbarProvider 
        autoHideDuration={2000}
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
      <Box component="main"
          sx={{
              height: "100vh",
              backgroundColor: (theme)=> theme.palette.grey[900]
            }}
      >
        <Header/>
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />}/>
            <Route path="/categories" element={<CategoryList />}/>
            <Route path="/categories/create" element={<CategoryCreate />}/>
            <Route path="/categories/edit/:id" element={<CategoryEdit />}/>
            <Route path='*' element={
                  <Box sx={{color:"white"}}>
                    <Typography variant="h1">404</Typography>
                    <Typography variant="h1">Page not founnd</Typography>
                  </Box>}
                  />
          </Routes>
        </Layout>
      </Box>
      </SnackbarProvider>
    </ThemeProvider>;
}


export default App;