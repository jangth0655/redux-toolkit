import { useSelector } from "react-redux";

const Item = () => {
  const { data } = useSelector((state) => state.items);
  return (
    <>
      <h1>Item</h1>
      {data.map((item, i) => (
        <h1 key={i}>{item.title}</h1>
      ))}
    </>
  );
};

export default Item;
