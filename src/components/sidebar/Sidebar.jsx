import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="container ">
      <div className="sidebar">
        <div className="logo">
          <NavLink to={"/admin"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <hr />
        <ul>
          <li>
            <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/users"}>Users</NavLink>{" "}
            <span>
              <NavLink to={"/admin/createusers"}>Create Users</NavLink>
            </span>
          </li>
          <li>
            <NavLink to={"/admin/category"}>Categories</NavLink>{" "}
            <span>
              <NavLink to={"/admin/createcategory"}>Create Categories</NavLink>
            </span>
          </li>
          <li>
            <NavLink to={"/admin/products"}>Products</NavLink>{" "}
            <span>
              <NavLink to={"/admin/createproducts"}>Create Products</NavLink>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
