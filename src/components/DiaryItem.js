import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const DiaryItem = ({ id, title, content, type, date }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/ItemPage/${id}`);
  };
  return (
    <div class="DiaryItem">
      <div></div>
      <div class="diaryTypeImg_wrapper">
        <img src="₩" />
      </div>
      <div class="diaryTitle">{title}</div>
      <Button onClick={goDetail} />
    </div>
  );
};

export default DiaryItem;
