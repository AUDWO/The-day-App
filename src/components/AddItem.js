import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { DispatchContext } from "../App";
import { getStringDate } from "../util/date";
import OptionMenu from "./OptionMenu";
import Button from "./Button";

const filterOptionList = [
  { value: "gratitude", name: "감사" },
  { value: "introspection", name: "성찰" },
  { value: "daily", name: "일상" },
];

const AddItem = ({ id, itTitle, itDate, itContent, itType }) => {
  const contentRef = useRef();
  const navigate = useNavigate();

  const { onCreate, onEdit } = useContext(DispatchContext);

  const handleCreate = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, title, content, type);
    navigate("/");
  };

  const handleEdit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    onEdit(id, title, content, type);
    navigate("/");
  };

  const [title, setTitle] = useState(itTitle ? itTitle : "");
  const [date, setDate] = useState(getStringDate(itDate ? itDate : new Date()));
  const [content, setContent] = useState(itContent ? itContent : "");
  const [type, setType] = useState(itType ? itType : "gratitude");

  return (
    <div class="AddItem">
      <section>
        <h2>what's the date today?</h2>
        <input
          class="inpu-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="date"
        />
      </section>
      <section>
        <h4>Select Type</h4>
        <OptionMenu
          value={type}
          onChange={setType}
          optionList={filterOptionList}
        />
      </section>
      <section>
        <h4>title</h4>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
      </section>
      <section>
        <h4>content</h4>
        <textarea
          placeholder="당신의 이야기를 들려주세요"
          value={content}
          ref={contentRef}
          onChange={(e) => setContent(e.target.value)}
        />
      </section>
      <Button
        text={itTitle ? "수정하기" : "새 일기쓰기"}
        onClick={itTitle ? handleEdit : handleCreate}
      />
    </div>
  );
};

export default AddItem;
