import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import ItemPage from "./pages/ItemPage";
import New from "./pages/New";
import Edit from "./pages/Edit";
import "./App.css";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      console.log("edit impossible");
      console.log(action.data);
      newState = state.map((it) =>
        parseInt(it.id) === parseInt(action.data.id) ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DispatchContext = React.createContext();
export const StateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  const onCreate = (imageSrc, date, title, content, type) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        imageSrc,
        date: new Date(date).getTime(),
        title,
        content,
        type,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, imageSrc, title, content, date, type) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        imageSrc,
        title,
        content,
        date: date,
        type,
      },
    });
  };
  return (
    <StateContext.Provider value={data}>
      <DispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/New" element={<New />}></Route>
              <Route path="/List" element={<ListPage />}></Route>
              <Route path="/Item/:id" element={<ItemPage />}></Route>
              <Route path="/Edit/:id" element={<Edit />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
