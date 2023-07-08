import React, { useContext, useState } from "react";
import DiaryItem from "./DiaryItem";
import { StateContext } from "../App";
import OptionMenu from "./OptionMenu";

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

const DiaryList = () => {
  const diaryList = useContext(StateContext);

  const [filter, setFilter] = useState("all");
  const [sortType, setSortType] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallback = (it) => {
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
    <div className="DiaryList">
      <div className="option_wrapper">
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
      <div className="Diary-list-button"></div>
      <div className="list_wrapper">
        {getProcessedDiaryList().map((it) => (
          <DiaryItem key={it.id} {...it} version={"a"} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
