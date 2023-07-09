import { useNavigate } from "react-router-dom";
import Button from "./Button";
import RemoveItem from "./RemoveItem";

const CategoryModal = ({ id, ref }) => {
  const navigate = useNavigate();

  const goDeTailEdit = (e) => {
    e.stopPropagation();
    navigate(`/Edit/${id}`);
  };
  return (
    <div className="CategoryModal" ref={ref}>
      <RemoveItem id={id} />
      <Button onClick={goDeTailEdit} text={"수정하기"} className={"edit"} />
    </div>
  );
};

export default CategoryModal;
