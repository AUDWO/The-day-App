import { useContext } from "react";
import { StateContext } from "../App";
import { useParams } from "react-router-dom";
import DiaryItem from "../components/DiaryItem";
const ItemPage = () => {
  const { id } = useParams();
  const diaryList = useContext(StateContext);
  const sortedList = JSON.parse(JSON.stringify(diaryList));
  console.log(sortedList);
  console.log("bbb");
  const selectedItem = sortedList.find(
    (it) => parseInt(it.id) === parseInt(id)
  );
  console.log(selectedItem);

  return (
    <div class="ItemPage">
      <h3>Item-Page</h3>
      <DiaryItem {...selectedItem} version={"b"} />
    </div>
  );
};

export default ItemPage;
