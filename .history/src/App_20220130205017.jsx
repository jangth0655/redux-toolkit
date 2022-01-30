import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "./data";
import { addToDo, deleteToDo } from "./todos";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="App">Hello</h1>
    </>
  );
}

export default App;
