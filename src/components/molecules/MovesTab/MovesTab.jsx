import styles from "./MovesTab.module.scss";
import { PokemonType } from "@molecules";
import { Paragraph } from "../../atoms";

export default function MovesTab({ moves }) {
  return moves ? (
    moves?.map((move) => {
      return (
        <PokemonType
          type={move?.move.name}
          key={move?.move.name}
          color="dark-gray"
        />
      );
    })
  ) : (
    <div className={styles.MovesTab__notFound}>
      <Paragraph title="No moves found" color="dark-gray" />
    </div>
  );
}
