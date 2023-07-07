import { useNavigate } from "react-router-dom";
import Button from "./Button";
import RemoveItem from "./RemoveItem";

const CategoryModal = ({ id }) => {
  const navigate = useNavigate();

  const goDeTailEdit = () => {
    navigate(`/Edit/${id}`);
  };
  return (
    <div class="CategoryModal">
      <RemoveItem id={id} />
      <Button onClick={goDeTailEdit} text={"수정하기"} className={"edit"} />
    </div>
  );
};

export default CategoryModal;
