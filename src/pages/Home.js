import { useNavigate } from "react-router-dom";
import DiaryList from "../components/DiaryList";
import Button from "../components/Button";
import Navigate from "../components/Navigate";

const Home = ({ diaryList }) => {
  const navigate = useNavigate();
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
    <div class="Home">
      <Navigate />
      <DiaryList />
    </div>
  );
};

export default Home;
