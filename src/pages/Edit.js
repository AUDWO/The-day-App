import { useParams } from "react-router-dom";
import { StateContext } from "../App";
import { useContext } from "react";
import AddItem from "../components/AddItem";
const Edit = () => {
  const { id } = useParams();
  const diaryList = useContext(StateContext);
  console.log("11111111");
  console.dir(diaryList);
  const selectedItem = diaryList.find((it) => parseInt(it.id) === parseInt(id));
  console.log("000000000");
  console.log(selectedItem);

  const { title, content, type } = selectedItem;
  const itTitle = title;
  const itContent = content;
  const itType = type;

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
