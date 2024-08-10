import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { itemContext } from '../itemContext.js';
import { totalContext } from "../totalContext";

function ItemCard({ name, price }) {

  const value = useContext(itemContext);
  const { item , setItem } = value;

  const tValue = useContext(totalContext);
  const {total , setTotal } = tValue;
  const handleAdd = () => {
    setTotal(total + price);
    setItem(item + 1)
  };

  const handleRemove = () => {
    if( total <= 0 || setItem <=0 ) {
      return
    }
    setTotal((prevState) => prevState-price);
    setItem((prevState) => prevState - 1)
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
