import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import RemoveItem from "./RemoveItem";
import Thumbnail from "./Thumbnail";

const DiaryItem = ({ id, title, content, type, date, version }) => {
  const navigate = useNavigate();
  const toDate = new Date(date).toLocaleDateString();
  const [ver, setVer] = useState(version === "a" ? false : true);

  const goDetailItem = (e) => {
    if (
      e.target.className === "DiaryItem" ||
      e.target.className === "Button-more-than"
    )
      navigate(`/Item/${id}`);
  };
  const goDeTailEdit = () => {
    navigate(`/Edit/${id}`);
  };
  return (
    <div class="DiaryItem" onClick={goDetailItem}>
      <Thumbnail />
      <div class="diaryDate">{toDate}</div>
      <div class="diaryTypeImg_wrapper"></div>
      <div class="diaryType">{type}</div>
      <div class="diaryTitle">{title}</div>
      {ver && <div class="diaryContent">{content}</div>}
      {!ver && (
        <Button
          onClick={goDetailItem}
          text={"more than"}
          className={"more-than"}
        />
      )}
      {!ver && <RemoveItem id={id} />}
      {!ver && <Button onClick={goDeTailEdit} text={"수정하기"} />}
    </div>
  );
};

export default DiaryItem;
