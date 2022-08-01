import styles from "./back.module.scss";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Back = ({ className, fill, navigate }) => {
  const Navigate = useNavigate();
  const OnClickHandler = useCallback(() => {
    Navigate(navigate ? navigate : -1);
  }, [navigate]);

  return (
    <svg
      onClick={OnClickHandler}
      className={
        className != null ? `${className} ${styles.Back}` : styles.Back
      }
      width="22"
      height="14"
      viewBox="0 0 22 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M21.0476 6.0477H3.25135L7.4978 1.80097C7.86982 1.42917 7.86982 0.826047 7.4978 0.454305C7.12578 0.0822889 6.52266 0.0822889 6.15119 0.454305L0.279012 6.3266C-0.0930041 6.69839 -0.0930041 7.30157 0.279012 7.67326L6.15119 13.5458C6.33715 13.7319 6.58085 13.8248 6.8245 13.8248C7.06814 13.8248 7.31185 13.7319 7.4978 13.5458C7.86982 13.174 7.86982 12.5709 7.4978 12.1992L3.25135 7.95227H21.0476C21.5735 7.95227 22 7.52586 22 6.99996C22 6.47405 21.5736 6.0477 21.0476 6.0477Z"
      />
    </svg>
  );
};

export default Back;
