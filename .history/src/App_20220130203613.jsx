import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "./data";
import { addToDo, deleteToDo } from "./todos";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selectorToDo = useSelector((state) => state.todos.todo);
  const selectorData = useSelector((state) => state.data.data);

  console.log(selectorToDo);
  console.log(selectorData);

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  };

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onDelete = (id) => {
    console.log(id);
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
          onBlur={onChange}
        />
        <button>ADD</button>
      </form>
      {selectorToDo.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <button onClick={() => onDelete(todo.id)}>{todo.id}</button>
        </div>
      ))}
    </>
  );
}

export default App;
