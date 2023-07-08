import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import Thumbnail from "./Thumbnail";
import CategoryModal from "./CategoryModal";
import { BiDotsVerticalRounded } from "react-icons/bi";

const DiaryItem = ({ id, title, content, type, date, version }) => {
  const initalValue = false;
  const navigate = useNavigate();
  const toDate = new Date(date).toLocaleDateString();
  const [ver, setVer] = useState(version === "a" ? false : true);
  const [isOpen, setIsOpen] = useState(initalValue);
  const ref = useRef(null);

  const goDetailItem = () => {
    navigate(`/Item/${id}`);
  };

  const goDetailItem2 = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="DiaryItem" onClick={goDetailItem}>
      <Thumbnail />
      <BiDotsVerticalRounded
        className="category-button"
        onClick={goDetailItem2}
        ref={ref}
      />
      {isOpen && <CategoryModal id={id} />}
      <div className="diaryDate">{toDate}</div>
      <div className="diaryTypeImg_wrapper"></div>
      <div className="diaryType">{type}</div>
      <div className="diaryTitle">{title}</div>
      {ver && <div class="diaryContent">{content}</div>}
      {!ver && (
        <Button onClick={goDetailItem} text={"more"} className={"more"} />
      )}
    </div>
  );
};

export default DiaryItem;
