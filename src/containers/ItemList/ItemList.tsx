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
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="flex mb-6 w-full max-w-md">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Zadaj názov..."
          className="border border-gray-300 p-3 rounded-l-md w-full focus:ring focus:ring-teal-200 focus:outline-none"
        />
        <button
          onClick={addItem}
          className="bg-teal-500 text-white p-3 rounded-r-md hover:bg-teal-600 transition-colors duration-200"
        >
          Pridať
        </button>
      </div>

      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 p-6 border-r bg-gray-200">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className={`cursor-pointer p-3 rounded-md text-gray-800 hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200 ${
                  selectedItem === item
                    ? "bg-teal-100 text-teal-700"
                    : "bg-gray-50"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {selectedItem && (
          <div className="w-2/3 p-6">
            <div className="p-6 border rounded-md bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedItem}
              </h3>
              <ItemDetail />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
