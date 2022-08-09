export default function statsConverter(stats) {
  const replaceAttack = stats.replace("special-attack", "Sp. Atk");
  const replaceDefense = replaceAttack.replace("special-defense", "Sp. Def");
  const replaced = replaceDefense.replace("hp", "HP");

  return replaced;
}
