import { useState } from 'react';
import { ref, push, getDatabase } from 'firebase/database';
import  {app} from "../firebase";
const db=getDatabase(app);
 // Import 'push' from firebase database

// Assuming db is the reference to your Firebase app's Realtime Database

function List() {
  const [values, setValues] = useState({
    product_id: '',
    product_name: '',
    price: '',
  });

  const putData = async () => {
    try {
      // Use 'push' to generate a new unique key for each entry
      const newProductRef = push(ref(db, 'product/sale'), values);
      console.log('Data pushed with key:', newProductRef.key);
    } catch (error) {
      console.error('Error pushing data:', error.message);
    }
  };

  const handleInputChange = (label, value) => {
    setValues((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    putData();
    // Optionally, you can reset the form fields after submission
    setValues({
      product_id: '',
      product_name: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* InputControl components */}
      <input
        type="text"
        placeholder="Enter Product id"
        value={values.product_id}
        onChange={(event) => handleInputChange('product_id', event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Name"
        value={values.product_name}
        onChange={(event) => handleInputChange('product_name', event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Price"
        value={values.price}
        onChange={(event) => handleInputChange('price', event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default List;
