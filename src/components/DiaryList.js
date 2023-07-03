import React, { useState } from "react";
import DiaryItem from "./DiaryItem";
import { createPath } from "react-router-dom";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부" },
  { value: "gratitude", name: "감사" },
  { value: "introspection", name: "성찰" },
  { value: "daily", name: "일상" },
];

const OptionMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [data, setData] = useState([]);

  const [curDate, setCurDate] = useState(new Date());

  const [filter, setFilter] = useState("all");
  const [sortType, setSortType] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallback = (item) => {
      if (filter === "gratitude") {
        return it.type === "gratitude";
      } else if (filter === "daily") {
        return it.type === "daily";
      } else if (filter === "introspection") {
        return it.type === "introspection";
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };
  return (
    <div class="DiaryList">
      <h1>Day Diary List</h1>
      <div class="option_wrapper">
        <OptionMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <OptionMenu
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
      </div>
      <div class="list_wrapper">
        {getProcessedDiaryList().map((it) => (
          <DiaryItem />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
