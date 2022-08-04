import styles from "./MovesTab.module.scss";
import { PokemonType } from "@molecules";

export default function MovesTab({ moves }) {
  return (
    <>
      {moves?.map((move) => {
        return (
          <PokemonType
            type={move?.move.name}
            key={move?.move.name}
            color="dark-gray"
          />
        );
      })}
    </>
  );
}
