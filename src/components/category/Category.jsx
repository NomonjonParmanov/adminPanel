import React from "react";
import {
  useGetCategoryQuery,
  useDeleteCategoryMutation,
} from "../../context/categoryApi";
const Category = () => {
  let { data, isLoading, isError } = useGetCategoryQuery();
  let [deleteCategory, {}] = useDeleteCategoryMutation();
  const handleDeleteCategory = (id) => {
    deleteCategory(id);
  };
  console.log(data?.data);
  let card = data?.data?.map((el) => (
    <div className="card" key={el.id}>
      {el.urls ? (
        <img src={el.urls} alt="" />
      ) : (
        <img src="https://source.unsplash.com/random/200x200" alt="" />
      )}
      <p>{el.title}</p>
      <button onClick={() => handleDeleteCategory(el.id)}>Delete</button>
    </div>
  ));

  return (
    <div className="container category">
      <div className="cards">{card}</div>
    </div>
  );
};

export default Category;
