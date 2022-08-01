import styles from "./ModalObject.module.scss";

const ModalObject = ({text, svg, onClick, className}) => {

    const onClickHandler = () => {
        if(text == "Search"){
            onClick();
        }
    }


    return <li className={
        className ? 
        className + styles.ModalObject : 
        styles.ModalObject} 
    onClick={onClickHandler}
    >
        {text}
    <span className={styles.ModalObject__Span}>{svg}</span>
    </li>
}

export default ModalObject;