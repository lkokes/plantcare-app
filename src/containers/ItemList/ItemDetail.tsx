import React from "react";

type Props = {};

const ItemDetail = (props: Props) => {
  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Teplota miestnosti</span>
          <span className="text-gray-900 font-medium">24°C</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Vlhkosť pôdy</span>
          <span className="text-gray-900 font-medium">65%</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Presadené</span>
          <span className="text-gray-900 font-medium">Áno/Nie</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Hnojené</span>
          <span className="text-gray-900 font-medium">Áno/Nie</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Stanovište</span>
          <span className="text-gray-900 font-medium">slnko/tieň/polotieň</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Kvetináč</span>
          <span className="text-gray-900 font-medium">12cm</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Dátum aktualizácie</span>
          <span className="text-gray-900 font-medium">2024-08-28</span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700">Fotka</span>
          <div className="mt-2">
            <img
              src="https://via.placeholder.com/150"
              alt="Plant"
              className="rounded-md border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
