import { useState } from "react";
import "./ShoppingCard.css";

export default function ShoppingCard(props) {

  const shoppingData = props.shoppingData;
  const [shoppingCardData, setShoppingCard] = useState(shoppingData);

  const deleteShoppingCard = (event) => {
    setShoppingCard(
      shoppingCardData.filter((_, index) => {
        return index !== parseInt(event.target.parentElement.id);
      })
    );
  };

  return shoppingCardData.map((product, key) => {
    return (
      <div className="card-container" key={key} id={key}>
        <img src={require("../assets/image.png")} alt="" />
        <span className="close-button" onClick={deleteShoppingCard}>
          X
        </span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="buttons">
          <button>Wishlist</button>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  });
}
