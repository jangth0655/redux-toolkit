import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <>
      <h1 className="App">Hello</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Write ToDo"
        />
        <button>ADD</button>
      </form>
    </>
  );
}

export default App;
