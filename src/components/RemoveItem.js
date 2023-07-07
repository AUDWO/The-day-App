import { useContext } from "react";

import { DispatchContext } from "../App";
import Button from "./Button";

const RemoveItem = ({ id }) => {
  const { onRemove } = useContext(DispatchContext);

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div>
      <Button class={"Delete"} text={"삭제하기"} onClick={handleRemove} />
    </div>
  );
};

export default RemoveItem;
