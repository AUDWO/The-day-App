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

  const { imageSrc, title, content, type, date } = selectedItem;
  const itImageSrc = imageSrc;
  const itTitle = title;
  const itContent = content;
  const itType = type;
  const itDate = new Date(date);

  return (
    <div>
      <AddItem
        itTitle={itTitle}
        itImageSrc={itImageSrc}
        itContent={itContent}
        itType={itType}
        id={id}
        itDate={itDate}
      />
    </div>
  );
};

export default Edit;
