import ModalObject from "../ModalObject/ModalObject";
import styles from "./Modal.module.scss";
import { useState, useEffect } from "react";

const Modal = ({Active}) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        if(Active == true){
            setActive(true);
        }else{
            setActive(false);
        }
    }, [Active]);


    const onClickHandler = (e) => {
        
    }

    return <ul className={!isActive ? styles.Modal : styles.Modal + ` ${styles["--active"]}`}>
        <ModalObject onClick={onClickHandler} text={"Favorite Pokémon"} svg={<svg width="16" height="13" viewBox="0 0 16 13">
            <path d="M13.6328 1.47266C12.1289 0.1875 9.91406 0.433594 8.51953 1.85547L8 2.40234L7.45312 1.85547C6.08594 0.433594 3.84375 0.1875 2.33984 1.47266C0.617188 2.94922 0.535156 5.57422 2.06641 7.16016L7.37109 12.6289C7.69922 12.9844 8.27344 12.9844 8.60156 12.6289L13.9062 7.16016C15.4375 5.57422 15.3555 2.94922 13.6328 1.47266Z" />
        </svg>} />
        <ModalObject onClick={onClickHandler} text={"All Type"} svg={<svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M17.0134 7.83526H12.5989C12.2663 5.8759 10.5607 4.38393 8.50668 4.38393C6.45263 4.38393 4.74704 5.8759 4.4145 7.83526H0C0.355881 3.44879 4.02852 -6.29425e-05 8.50668 -6.29425e-05C12.9848 -6.29425e-05 16.6575 3.44879 17.0134 7.83526ZM17.0053 9.32771H12.5819C12.2118 11.2409 10.528 12.6857 8.50668 12.6857C6.48538 12.6857 4.80152 11.2409 4.43145 9.32771H0.00807338C0.408027 13.6697 4.06029 17.0698 8.50668 17.0698C12.9531 17.0698 16.6053 13.6697 17.0053 9.32771ZM5.65756 8.53481C5.65756 10.1083 6.93315 11.3839 8.50668 11.3839C10.0802 11.3839 11.3558 10.1083 11.3558 8.53481C11.3558 6.96128 10.0802 5.68568 8.50668 5.68568C6.93315 5.68568 5.65756 6.96128 5.65756 8.53481Z" />
        </svg>} />
        <ModalObject onClick={onClickHandler} text={"All Gen"} svg={<svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M17.0134 7.83526H12.5989C12.2663 5.8759 10.5607 4.38393 8.50668 4.38393C6.45263 4.38393 4.74704 5.8759 4.4145 7.83526H0C0.355881 3.44879 4.02852 -6.29425e-05 8.50668 -6.29425e-05C12.9848 -6.29425e-05 16.6575 3.44879 17.0134 7.83526ZM17.0053 9.32771H12.5819C12.2118 11.2409 10.528 12.6857 8.50668 12.6857C6.48538 12.6857 4.80152 11.2409 4.43145 9.32771H0.00807338C0.408027 13.6697 4.06029 17.0698 8.50668 17.0698C12.9531 17.0698 16.6053 13.6697 17.0053 9.32771ZM5.65756 8.53481C5.65756 10.1083 6.93315 11.3839 8.50668 11.3839C10.0802 11.3839 11.3558 10.1083 11.3558 8.53481C11.3558 6.96128 10.0802 5.68568 8.50668 5.68568C6.93315 5.68568 5.65756 6.96128 5.65756 8.53481Z" />
        </svg>} />
        <ModalObject onClick={onClickHandler} text={"Search"} svg={<svg width="15" height="15" viewBox="0 0 15 15">
            <path d="M13.8086 12.8633L11.0742 10.1289C10.9375 10.0195 10.7734 9.9375 10.6094 9.9375H10.1719C10.9102 8.98047 11.375 7.77734 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7 12.125 8.20312 11.6875 9.1875 10.9219V11.3867C9.1875 11.5508 9.24219 11.7148 9.37891 11.8516L12.0859 14.5586C12.3594 14.832 12.7695 14.832 13.0156 14.5586L13.7812 13.793C14.0547 13.5469 14.0547 13.1367 13.8086 12.8633ZM5.6875 9.9375C3.74609 9.9375 2.1875 8.37891 2.1875 6.4375C2.1875 4.52344 3.74609 2.9375 5.6875 2.9375C7.60156 2.9375 9.1875 4.52344 9.1875 6.4375C9.1875 8.37891 7.60156 9.9375 5.6875 9.9375Z" />
        </svg>
        } />

    </ul>
}

export default Modal;