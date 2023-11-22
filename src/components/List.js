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
    quantity: '',
    ispurchased: false, // Use a boolean value for ispurchased
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const putData = async () => {
    try {
      await push(ref(db, 'product/sale'), values);
      console.log('Data pushed successfully');
      setShowPopup(true);
      setIsPurchased(values.ispurchased); // Set isPurchased based on the value in the form
    } catch (error) {
      console.error('Error pushing data:', error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? event.target.checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    putData();
    setValues({
      product_id: '',
      product_name: '',
      price: '',
      quantity: '',
      ispurchased: false,
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    window.history.back();
  };

  return (
    <div className={styles.formStyle}>
      <form onSubmit={handleSubmit}>
        <h3>Product Information</h3>
        <input
          type="text"
          name="product_id"
          placeholder="Enter Product id"
          value={values.product_id}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="product_name"
          placeholder="Enter Product Name"
          value={values.product_name}
          onChange={handleInputChange}
          required
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
        <label>
          <input
            type="checkbox"
            name="ispurchased"
            checked={values.ispurchased}
            onChange={handleInputChange}
          />
          Product purchased
        </label>
        <button type="submit">Submit</button>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Data submitted successfully!</p>
            <p>{isPurchased ? "Product purchased!" : "Product not purchased yet."}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      </form>

      {/* {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Data submitted successfully!</p>
            <p>{isPurchased ? "Product purchased!" : "Product not purchased yet."}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default List;
