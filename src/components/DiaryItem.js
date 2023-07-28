import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import Thumbnail from "./Thumbnail";
import CategoryModal from "./CategoryModal";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiHandsPrayingBold } from "react-icons/pi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { GiTwoShadows } from "react-icons/gi";

const typeIcons = {
  gratitude: <PiHandsPrayingBold />,
  daily: <BsEmojiSunglasses />,
  introspection: <GiTwoShadows />,
};

const DiaryItem = ({ id, imageSrc, title, content, type, date, version }) => {
  const initalValue = false;
  const navigate = useNavigate();
  const toDate = new Date(date).toLocaleDateString();
  const [ver, setVer] = useState(version === "a" ? false : true);
  const [isOpen, setIsOpen] = useState(initalValue);
  const areaRef = useRef(null);
  const areaRef2 = useRef(null);

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
          !areaRef.current.contains(e.target) &&
          !areaRef2.current.contains(e.target)
        ) {
          console.log(e.target);
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
    <div className="DiaryItem " onClick={goDetailItem}>
      <Thumbnail imageSrc={imageSrc} />
      <div className="category-dots" ref={areaRef}>
        <BiDotsVerticalRounded
          className="category-button"
          onClick={goDetailItem2}
        />
      </div>
      {isOpen && <CategoryModal id={id} ref2={areaRef2} />}
      <div className="diaryDate">{toDate}</div>
      <div className="diaryType">{typeIcons[type]}</div>
      <div className="diaryTitle">{title}</div>
      {ver && <div class="diaryContent">{content}</div>}
      {!ver && (
        <Button onClick={goDetailItem} text={"more"} className={"more"} />
      )}
    </div>
  );
};

export default DiaryItem;
