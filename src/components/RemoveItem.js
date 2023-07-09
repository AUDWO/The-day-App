import { useContext } from "react";

import { DispatchContext } from "../App";
import Button from "./Button";

const RemoveItem = ({ id }) => {
  const { onRemove } = useContext(DispatchContext);

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove(id);
  };

  return (
    <div>
      <Button className={"delete"} text={"삭제하기"} onClick={handleRemove} />
    </div>
  );
};

export default RemoveItem;
