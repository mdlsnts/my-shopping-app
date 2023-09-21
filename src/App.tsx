import React, { useState } from "react";
import Greeter from "./components/greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Oat milk", quantity: 2 },
  //   { id: 3, product: "Tofu", quantity: 6 },
  // ];
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm />
    </div>
  );
}

export default App;
