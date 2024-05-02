import React from "react";
import { useGetUsersQuery } from "../../context/usersApi";
import userLogo from "../../assets/user.png";
import { useDeleteUserMutation } from "../../context/usersApi";
import { FaTrashAlt } from "react-icons/fa";

const Users = () => {
  const { data, error } = useGetUsersQuery();
  let [deleteUser, {}] = useDeleteUserMutation();
  const handleDeleteUser = (id) => {
    deleteUser(id);
  };
  if (error) {
    alert(error.message);
  }
  let users = data?.data?.map((user) => (
    <div className="card" key={user.id}>
      <img src={userLogo} alt="" />
      <h2>{user.FirstName}</h2>
      <h3>{user.LastName}</h3>
      <h4>{user.UserName}</h4>
      <p>{user.phones[0]}</p>
      <div className="role">{user.role}</div>
      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
    </div>
  ));
  return (
    <div className="container users">
      <div className="cards">{users}</div>
    </div>
  );
};

export default Users;
