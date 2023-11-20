import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

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
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.product_id
          }>
            <strong>{product.price}</strong> - {product.product_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
