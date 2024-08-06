import React from "react";
import { useDispatch } from "react-redux";
import { togglePicked } from "../../features/productsSlice";
import "./card.scss";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const { ref, category, name, price, unit, image, picked } = product;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <img src={`/img/img-product/${image}`} alt={name} />
      </div>
      <div className="card-body">
        <ul>
          <li>Référence: {ref}</li>
          <li>Catégorie: {category}</li>
          <li>
            Prix: {price} € par {unit}
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <button
          className={picked ? "picked" : ""}
          onClick={() => dispatch(togglePicked(product.id))}
        >
          {picked ? "Article déjà ajouté ✅" : "Ajoutez au panier"}
        </button>
      </div>
    </div>
  );
};

export default Card;
