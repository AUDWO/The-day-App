import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import CategoryModal from "./CategoryModal";
const Category = ({ id }) => {
  const initalValue = false;
  const [isOpen, setIsOpen] = useState(initalValue);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="Category" onClick={handleOpenClick}>
      <BiDotsVerticalRounded className="cc" />
      {isOpen && <CategoryModal id={id} />}
    </div>
  );
};

export default Category;
