import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./store";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const deleteClick
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
      {selector.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <button onClick={}>DEL</button>
        </div>
      ))}
    </>
  );
}

export default App;
