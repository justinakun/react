import { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetching all products and placing them in items, changing loading state to false once done
  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((resp) => resp.json())
      .then((response) => {
        setItems(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  //when delete button is clicked, filter through items array and get rid of the one that was clicked
  const deleteProduct = (id) => {
    const newItems = items.filter((items) => items.id !== id);
    setItems(newItems);
  };

  // if the loading is finished, load all items
  return (
    <div className="allProductsContainer">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        items.map((item) => (
          <div className="productContainer" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p className="redText largerFont">€{item.price}</p>
            <button onClick={() => deleteProduct(item.id)}>Ištrinti</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
