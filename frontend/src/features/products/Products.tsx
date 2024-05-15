import { useState, type FC } from 'react';
import StoreProductCreator from './StoreProductCreator';
import styles from "./styles/Products.module.css";

const Products: FC = () => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleAddProductClick = () => {
    setIsAddingProduct(true);
  };

  const handleCloseProductCreator = () => {
    setIsAddingProduct(false);
  };


  return (
    <>
    <div className={styles.buttonAddNewImage}>
      <button
        onClick={handleAddProductClick}
        className="mt-4 bg-blue-500 text-white p-2 hover:bg-yellow-500 "
      >
        Add Product
      </button>
      {isAddingProduct && <StoreProductCreator onClose={handleCloseProductCreator} />}
    </div>
    </>
  )
}

export default Products;