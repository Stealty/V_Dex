import styles from "./PokemonSize.module.scss";
import { Paragraph } from "@atoms";

export default function PokemonSize({ data }) {
  return (
    <div className={styles.PokemonSize}>
      <div>
        <Paragraph
          title="Height"
          size="14"
          color="dark-gray"
          opacity="04"
          height="28"
        />
        <Paragraph
          title={(data?.height / 10).toString().padEnd(4, "0") + " cm"}
          size="14"
          height="28"
        />
      </div>
      <div>
        <Paragraph title="Weight" size="14" opacity="04" height="28" />
        <Paragraph
          title={(data?.weight / 10).toString().padEnd(3, "0") + " kg"}
          size="14"
          height="28"
        />
      </div>
    </div>
  );
}
