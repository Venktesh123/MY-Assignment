import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue,set } from 'firebase/database';
import styles from "./ShowList.module.css";

const database = getDatabase();
const productsRef = ref(database, 'product/sale');


function ShowList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productList = Object.keys(data).map((productId) => ({
          id: productId,
          ...data[productId],
        }));
        setProducts(productList);
      } else {
        setProducts([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (productId) => {
    // and you want to delete the product based on its ID
    const productToDeleteRef = ref(database, `product/sale/${productId}`);
    // Remove the product from the database
    set(productToDeleteRef, null);
  };

  return (
    <div className={styles.visible}>
      <h2 className={styles.alignText}>Product List</h2>
      <div className={styles.container}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <p>ProductName: {product.product_name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {product.ispurchased ? (
              <p>Product Purchased</p>
            ) : (
              <p>Unpurchased Product</p>
            )}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;


