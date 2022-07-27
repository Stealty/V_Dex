import styles from "./ModalObject.module.scss";

const ModalObject = ({text, svg, onClick, className}) => {
    return <li className={className ? className + styles.ModalObject : styles.ModalObject} onClick={onClick}>{text}<span className={styles.ModalObject__Span}>{svg}</span></li>
}

export default ModalObject;