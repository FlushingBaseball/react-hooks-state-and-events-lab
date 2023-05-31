import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleFilterChange(event){
    setSelectedCategory((selectedCategory) => selectedCategory = event.target.value)
  }

  console.log(selectedCategory)


const filteredItems = items.filter((item) => {if (selectedCategory ==="All"){
  return true 
}
  return item.category === selectedCategory
 })
  //category
console.log(filteredItems)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
