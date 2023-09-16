import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ items, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        id={`checkbox-${items.id}`}
        type="checkbox"
        checked={items.checked}
        onChange={() => handleCheck(items.id)}
      />
      <label
        style={items.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(items.id)}
        htmlFor={`checkbox-${items.id}`}
      >
        {items.itemName}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(items.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${items.item}`}
      />
    </li>
  );
};
export default LineItems;
