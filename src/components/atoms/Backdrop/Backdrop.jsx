import { useEffect, useState } from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = ({children, Active}) => {
    const [isActive, setActive] = useState(false);
    useEffect(()=>{
        if(Active == true){
            setActive(true);
        }else{
            setActive(false);
        }
    }, [Active]);

return <div className={!isActive ? styles.Backdrop : styles.Backdrop + " " + styles["--active"]}>
    {children}
</div>
}

export default Backdrop;