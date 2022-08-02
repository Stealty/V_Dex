export default function statsSum(stats) {
  const sum = stats?.reduce((acc, curr) => acc + curr.base_stat, 0);
  return sum;
}
