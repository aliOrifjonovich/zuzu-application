import React from "react";
import cls from "./categories.module.scss";
import { CategoriesMenu } from "../../../API/api";

const Categories = () => {
  return (
    <div className={cls.wrapper}>
      {CategoriesMenu.map((category) => (
        <a href={`#${category.id}`} /*className={`${category.id == id ? cls.active : null}`}*/>{category.name}</a>
      ))}
    </div>
    
  );
};

export default Categories;
