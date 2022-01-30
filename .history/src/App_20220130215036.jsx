import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsList } from "./reducer/items";
import { action, addToDo, deleteToDo } from "./reducer/todo";

function App() {
  const [text, setText] = useState("");
  const items = useSelector((state) => state.items.data);
  const value = useSelector((state) => state.toDos.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsList());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onDelete = (id) => {
    dispatch(deleteToDo(id))
  }

  return (
    <>
      <h1 className="App">Hello</h1>
      <form onSubmit={onSubmit}>
        <label>form</label>
        <input
          value={text}
          type="text"
          placeholder="Write blabla"
          onChange={onChange}
        />
      </form>
      {items.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
      {value.map((item) => (
        <div key={item.id}>
          <h1>{item.text}</h1>
          <button onClick={}>DEL</button>
        </div>
      ))}
    </>
  );
}

export default App;
