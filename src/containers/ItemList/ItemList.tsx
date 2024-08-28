import React, { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex mb-4 w-full max-w-md">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Zadaj názov..."
          className="border p-2 rounded-l-md w-full"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-700"
        >
          Pridať
        </button>
      </div>

      <div className="flex w-full max-w-4xl">
        <div className="w-1/3 p-4 border-r">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className="cursor-pointer bg-gray-100 hover:bg-gray-200 p-2 rounded-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {selectedItem && (
          <div className="w-2/3 p-4">
            <div className="p-4 border rounded-md ">
              <h3 className="text-xl font-semibold">{selectedItem}</h3>
              <ItemDetail />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
