import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsList } from "./reducer/items";

function App() {
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsList());
  }, []);
  return (
    <>
      <h1 className="App">Hello</h1>
      {items.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </>
  );
}

export default App;
