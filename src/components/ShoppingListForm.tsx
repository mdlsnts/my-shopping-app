import React from "react";

function ShoppingListForm(): JSX.Element {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted!");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default ShoppingListForm;
