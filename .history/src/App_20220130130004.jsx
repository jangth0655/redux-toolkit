import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, getList } from "./store";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selectorToDo = useSelector((state) => state.todo);
  const selectorData = useSelector((state) => state.data);

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

  const deleteClick = (id) => {
    dispatch(deleteToDo(id));
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
          <button onClick={() => deleteClick(todo.id)}>DEL</button>
        </div>
      ))}

      <div>{selectorData.map((item) => item.title)}</div>
    </>
  );
}

export default App;
