import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from 'react';
import { itemContext } from "../itemContext";
import { totalContext } from "../totalContext";

function Navbar() {
  const value = useContext(itemContext);
  console.log(value);
  const tvalue = useContext(totalContext)

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {tvalue.total}</h1>
      <h1>Items: {value.item}</h1>
    </div>
  );
}

export default Navbar;
