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
          className={"show-other"}
          text={"Other"}
          onClick={() => console.log("hello")}
        />
        <Button
          className={"create-diaryItem"}
          text={"New"}
          onClick={() => navigate(`/New`)}
        />

        <Profile className={"profile"} />
      </div>
    </div>
  );
};

export default Navigate;
