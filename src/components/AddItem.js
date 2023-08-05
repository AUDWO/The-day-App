import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { DispatchContext } from "../App";
import { getStringDate } from "../util/date";
import OptionMenu from "./OptionMenu";
import Button from "./Button";
import { PiHandsPrayingBold } from "react-icons/pi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { GiTwoShadows } from "react-icons/gi";

const filterOptionList = [
  { value: "gratitude", name: "감사" },
  { value: "introspection", name: "성찰" },
  { value: "daily", name: "일상" },
];

const typeIcons = {
  gratitude: <PiHandsPrayingBold />,
  daily: <BsEmojiSunglasses />,
  introspection: <GiTwoShadows />,
};

const AddItem = ({ id, itImageSrc, itTitle, itDate, itContent, itType }) => {
  const contentRef = useRef();
  const navigate = useNavigate();

  const dateItDate = new Date(itDate);

  const { onCreate, onEdit } = useContext(DispatchContext);

  const handleCreate = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(imageSrc, date, title, content, type);
    navigate("/");
  };

  const handleEdit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    onEdit(id, imageSrc, title, content, date, type);
    navigate("/");
  };

  const [title, setTitle] = useState(itTitle ? itTitle : "");
  const [date, setDate] = useState(
    dateItDate.getTime() ? dateItDate.getTime() : getStringDate(new Date())
  );
  const [content, setContent] = useState(itContent ? itContent : "");
  const [type, setType] = useState(itType ? itType : "gratitude");
  const [imageSrc, setImageSrc] = useState(itImageSrc ? itImageSrc : null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <div className="AddItem">
      <section className="title-img-wrapper">
        <section className="section-title">
          <input
            className="input-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </section>
        <section className="section-img">
          <label for="file">
            <div className="setImg-button">파일 선택하기</div>
          </label>
          {!imageSrc && <div className="fake-div"></div>}
          {imageSrc && (
            <img
              alt="이미지"
              className="thumbnail-img"
              src={imageSrc}
              placeholder="이미지 미리보기"
            />
          )}

          <input
            className="input-img"
            accept="image/*"
            type="file"
            name="file"
            id="file"
            onChange={(e) => onUpload(e)}
          />
          <button
            className="removeImg-button"
            onClick={() => {
              setImageSrc(null);
            }}
          >
            삭제하기
          </button>
        </section>
      </section>
      <section className="type-content-wrapper">
        <section className="section-type">
          <div>
            <div>Select Type</div>
            {typeIcons[type]}
          </div>
          <OptionMenu
            className={"option-type"}
            value={type}
            onChange={setType}
            optionList={filterOptionList}
          />
        </section>
        <section className="section-content">
          <div>Content</div>
          <textarea
            className="input-content"
            placeholder="당신의 이야기를 들려주세요..."
            value={content}
            ref={contentRef}
            onChange={(e) => setContent(e.target.value)}
          />
        </section>
        <Button
          text={itTitle ? "수정하기" : "새 일기쓰기"}
          onClick={itTitle ? handleEdit : handleCreate}
        />
      </section>
    </div>
  );
};

export default AddItem;
