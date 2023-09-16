import LineItem from "./LineItems";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((items) => (
        <LineItem
          key={items.id}
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ItemList;
