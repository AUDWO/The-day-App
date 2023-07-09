import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div className="Navigate">
      <div className="Navigate-header-text">
        <span className="text-t">G</span>
        <span className="text-h">I</span>
        <span className="text-e">D</span>
        <span className="texts">-Diary</span>
      </div>
      <div className="Navigate-items">
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
