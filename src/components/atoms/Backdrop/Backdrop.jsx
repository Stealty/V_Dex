import styles from "./Backdrop.module.scss";

const Backdrop = ({children, Active}) => {
return <div className={styles.Backdrop}>
    {children}
</div>
}

export default Backdrop;