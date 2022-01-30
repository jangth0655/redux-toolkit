import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {}, []);
  return (
    <>
      <h1 className="App">Hello</h1>
    </>
  );
}

export default App;
