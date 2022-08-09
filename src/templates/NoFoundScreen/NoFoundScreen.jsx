import { Paragraph, BackArrow } from "@atoms";
import styles from "./NoFoundScreen.module.scss";

const NoFoundScreen = () => {
    return <div className={styles.Main}>
        <BackArrow />
    <Paragraph title="Missing No" />
    <img src="images\Missingno.png" alt="MissingNo"/>
    </div>
}

export default NoFoundScreen;