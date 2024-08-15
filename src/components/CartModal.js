import React from "react";

import styles from '../styles/CartModal.module.css';

function CartModal({toggle}) {

    return (
        <div className={styles.cartmodal}>
            <div className={styles.closeButton} onClick={toggle}>
                close
            </div>
            <div className={styles.clearButton}>
                Clear
            </div>
            <div className={styles.itemContainer}>

            </div>
            <div className={styles.total}>
                <div className={styles.totlaText}>Total</div>
                <div className={styles.totalPrice}>Price</div>
            </div>
        </div>
    )
}

export default CartModal;