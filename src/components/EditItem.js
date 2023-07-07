import AddItem from "./AddItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const EditItem = ({ id, content, type, date, title }) => {
  const navigate = useNavigate();
  const nav = () => {
    navigate(`./New`);
  };
  return (
    <div>
      <Button text={"수정하기"} onClick={nav} />
    </div>
  );
};

export default EditItem;
