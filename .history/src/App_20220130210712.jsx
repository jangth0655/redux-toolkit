import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const items = useSelector((state) => state.items);
  console.log(items);
  return (
    <>
      <h1 className="App">Hello</h1>
    </>
  );
}

export default App;
