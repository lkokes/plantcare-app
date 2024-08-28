import React from "react";

type Props = {};

const ItemDetail = (props: Props) => {
  return (
    <div className="w-2/3 p-4">
      <p>Teplota</p>
      <p>Vlhkosť</p>
      <p>Presadené</p>
      <p>Hnojené</p>
      <p>Stanovište</p>
      <p>Kvetináč</p>
      <p>Dátum aktualizácie</p>
      <p>Fotka</p>
    </div>
  );
};

export default ItemDetail;
