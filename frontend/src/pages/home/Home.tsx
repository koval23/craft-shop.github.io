import { useState, type FC } from 'react';
import type { HomePageProduct } from '../../features/products/types/HomePageProduct';
import styles from "./Home.module.css";

const Home: FC = () => {

  const [items, setItems] = useState<HomePageProduct[]>([]);
  const [newItem, setNewItem] = useState<HomePageProduct[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  

  return (
    <div className={styles.mainPageContainer}>
      <form  className={styles.form}>
        <input
          type="text"
          name="id"
        
         
          placeholder="ID"
          required
        />
        <input
          type="text"
          name="url"
  
          placeholder="Image URL"
          required
        />
        <input
          type="text"
          name="description"
      
          placeholder="Description"
          required
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <div className={styles.itemsContainer}>
        {items.map((item, index) => (
          <div key={item.id} className={styles.item}>
            {index % 2 === 0 ? (
              <>
                <img src={item.url} alt={item.description} className={styles.image} />
                <p className={styles.description}>{item.description}</p>
              </>
            ) : (
              <>
                <p className={styles.description}>{item.description}</p>
                <img src={item.url} alt={item.description} className={styles.image} />
              </>
            )}
            <button >Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

