import React from "react";
import styles from "./menuhamburguer.module.scss";
import Back from "../../atoms/back/back";

const MenuHamburguer = () => {
    return <nav className={styles.Navigation}>
        <Back className={styles.Navigation__BackArrow} />
        <ul className={styles.Navigation__Menu}>
            <li><span></span><span></span></li>
            <li><span></span><span></span></li>
            <li><span></span><span></span></li>
        </ul>
    </nav>
}

export default MenuHamburguer;