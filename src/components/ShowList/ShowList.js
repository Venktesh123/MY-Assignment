import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import styles from "./ShowList.module.css";

// Assuming productsRef is the reference to your database
const database = getDatabase();
const productsRef = ref(database, 'product/sale');

function ShowList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Set up a real-time listener to fetch and update the products
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data,"data");
      if (data) {
        // Convert the data object into an array of products
        const productList = Object.keys(data).map((productId) => ({
          id: productId,
          ...data[productId],
        }));
        setProducts(productList);
      } else {
        setProducts([]);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

    return (
        <div className={styles.visible}>
          <h2 className={styles.alignText}>Product List</h2>
          <div className={styles.container}>
            {products.map((product) => (
              <div key={product.id} className={styles.card}>
                <p>ProductName:{product.product_name}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default ShowList;
