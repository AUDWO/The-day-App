import { useContext, useState } from "react";
import React, { useRef } from "react";
import { DispatchContext } from "../App";
import { getStringDate } from "../util/date";
import OptionMenu from "./OptionMenu";
import Button from "./Button";

const filterOptionList = [
  { value: "all", name: "전부" },
  { value: "gratitude", name: "감사" },
  { value: "introspection", name: "성찰" },
  { value: "daily", name: "일상" },
];

const AddItem = () => {
  const contentRef = useRef();

  const { onCreate, onEdit, onRemove } = useContext(DispatchContext);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, title, type, content);
  };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getStringDate(new Date()));
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  return (
    <div class="AddItem">
      <section>
        <h2>what's thr date today?</h2>
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
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </section>
      <section>
        <h4>content</h4>
        <textarea
          placeholder="뭐라도 좀 적아봐"
          value={content}
          ref={contentRef}
          onChange={(e) => setContent(e.target.value)}
        />
      </section>
      <Button text={"새 일기쓰기"} onClick={handleSubmit} />
    </div>
  );
};

export default AddItem;
