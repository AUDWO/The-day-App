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
  const ref2 = useRef(null);

  const goDetailItem = () => {
    navigate(`/Item/${id}`);
  };

  const goDetailItem2 = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const handleClick = (e) => {
        if (
          !ref.current.contains(e.target) &&
          ref2.current &&
          !ref2.current.contains(e.target)
        ) {
          setIsOpen(!isOpen);
        }
      };

      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [isOpen]);

  return (
    <div className="DiaryItem" onClick={goDetailItem}>
      <Thumbnail />
      <BiDotsVerticalRounded
        className="category-button"
        onClick={goDetailItem2}
        ref={ref}
      />
      {isOpen && <CategoryModal id={id} ref={ref2} />}
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
