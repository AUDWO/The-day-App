import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div class="Navigate">
      <h1>THE-Diary</h1>
      <div class="Navigate-items">
        <Button
          text={"다른사람 일기 보기"}
          onClick={() => console.log("hello")}
        />
        <Button text={"새 일기쓰기"} onClick={() => navigate(`/New`)} />

        <Profile />
      </div>
    </div>
  );
};

export default Navigate;
