import { useSelector, useDispatch } from "react-redux";
import { updateItemFromSelect, deleteFromCart } from "../../features/cart";
import React from "react";
import styles from "./cart.module.scss";

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
        <button onClick={onClose} className={styles.cartModalClose}>
          X
        </button>
        <ul>
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((product) => (
              <li key={product.id}>
                <img
                  src={`/img/img-product/${product.image}`}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <div className="select-buttons">
                  <select
                    name="quantity"
                    onChange={(e) =>
                      dispatch(
                        updateItemFromSelect({
                          value: e.target.value,
                          id: product.id,
                        })
                      )
                    }
                    value={product.quantity}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(deleteFromCart(product.id))}
                    className="delete_button "
                  >
                    Supprimer du panier
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="cart-2">Ajoutez des articles au panier</li>
          )}
          <div className="cart_footer">
            <div>
              <p className="total">
                Votre Total :
                <span className="seum">
                  {cart.cartItems
                    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                    .toFixed(2)}{" "}
                  €
                </span>
              </p>
            </div>
            <div className="commande">
              <button>passez lacommande</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
