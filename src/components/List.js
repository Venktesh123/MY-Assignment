import { useState } from 'react';
import { ref, push, getDatabase } from 'firebase/database';
import { app } from "../firebase";
import styles from "./List.module.css";

const db = getDatabase(app);

function List() {
  const [values, setValues] = useState({
    product_id: '',
    product_name: '',
    price: '',
    quantity: ''

  });

  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding the popup
  const [isPurchased, setIsPurchased] = useState(false); // State for tracking whether the product has been purchased

  const putData = async () => {
    try {
      const newProductRef = push(ref(db, 'product/sale'), values);
      console.log('Data pushed with key:', newProductRef.key);
      setShowPopup(true); // Show the popup
      setIsPurchased(true); // Set the state to indicate that the product has been purchased
    } catch (error) {
      console.error('Error pushing data:', error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    putData();
    setValues({
      product_id: '',
      product_name: '',
      price: '',
      quantity: '',
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    window.history.back(); // Redirect to the previous URL after closing the popup
  };

  return (
    <div className={styles.formStyle}>
      
      <form onSubmit={handleSubmit}>
        {/* InputControl components */}
        <h3>Database Data</h3>
        <input
          type="text"
          name="product_id"
          placeholder="Enter Product id"
          value={values.product_id}
          onChange={handleInputChange}
          required={true}
        />
        <input
          type="text"
          name="product_name"
          placeholder="Enter Product Name"
          value={values.product_name}
          onChange={handleInputChange}
          required={true}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Price"
          value={values.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="quantity"
          placeholder="quantity"
          value={values.quantity}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Data submitted successfully!</p>
            <p>{isPurchased ? "Product purchased!" : "Product not purchased yet."}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
