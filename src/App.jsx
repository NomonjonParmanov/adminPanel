import Navbar from "./components/navbar/Navbar";
import "./sass/style.scss";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Users from "./components/users/Users";
import CreatUser from "./components/createUser/CreateUser";
import Category from "./components/category/Category";
import CreateCategory from "./components/createCategory/CreateCategory";
import Product from "./components/product/Product";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {
        <Routes>
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/createusers" element={<CreatUser />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/createcategory" element={<CreateCategory />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      }
    </div>
  );
}

export default App;
