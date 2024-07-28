import React from "react";

const Card = ({ product }) => {
  // Vérification pour éviter les erreurs si product est undefined
  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const { ref, category, name, price, unit, image } = product;

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
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Card;
