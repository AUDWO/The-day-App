import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DiaryList from "../components/DiaryList";

import Navigate from "../components/Navigate";

const Home = ({ diaryList }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  /*
  const [data, setData] = useState([]);

  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);*/

  return (
    <div className="Home">
      {show ? (
        <>
          <div className="boxboxbox"></div>
          <Navigate />
          <DiaryList />
        </>
      ) : (
        <>
          <Navigate />
          <DiaryList />
        </>
      )}
    </div>
  );
};

export default Home;
