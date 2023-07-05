import { useContext } from "react";

import { DispatchContext } from "../App";
import Button from "./Button";

const RemoveItem = ({ id }) => {
  const { onRemove } = useContext(DispatchContext);
  console.log(id);

  return (
    <div>
      <div></div>
      <Button
        text={"삭제하기"}
        onClick={() => {
          onRemove(id);
        }}
      />
    </div>
  );
};

export default RemoveItem;
