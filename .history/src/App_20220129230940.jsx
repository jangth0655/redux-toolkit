import { useState } from "react";

function App() {
  const [text, setText] = useState("");
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
