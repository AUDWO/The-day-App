import { useParams } from "react-router-dom";
import { StateContext } from "../App";
import { useContext } from "react";
import AddItem from "../components/AddItem";
const Edit = () => {
  const { id } = useParams();
  const diaryList = useContext(StateContext);
  const selectedItem = diaryList.find((it) => parseInt(it.id) === parseInt(id));
  const a = selectedItem.title;
  console.log("aaaaa");
  console.log(a);
  const { title, content, type } = selectedItem;
  const itTitle = title;
  const itContent = content;
  const itType = type;

  console.log("dwdwd");
  console.log(title);
  return (
    <div>
      <AddItem
        itTitle={itTitle}
        itContent={itContent}
        itType={itType}
        id={id}
      />
    </div>
  );
};

export default Edit;
