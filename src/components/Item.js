import React ,{useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

function handleItemClick(){
  setIsInCart((isInCart) => !isInCart)
}

const ItemClass = isInCart ? "in-cart" : "" ;


  return (
    <li className={ItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItemClick} className="add">{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
