import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import CreateBlog from './Pages/CreateBlog';
import SingleBlog from './Pages/SingleBlog';
import EditBlog from './Pages/EditBlog';

const AllRoutes = () => {
  const NavBarHOC = () => {
    return <>
      <NavBar />
      <Outlet />
    </>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarHOC />}>
          <Route path='/' element={<Home />} />

          <Route path='/create-blog' element={<CreateBlog />} />
          <Route path='/single-blog/:id' element={<SingleBlog />} />
          <Route path='/edit-blog/:id' element={<EditBlog />} />\

        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default AllRoutes