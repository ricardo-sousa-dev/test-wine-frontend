export default async function fetchWines() {
  const response = await fetch(`https://wine-back-test.herokuapp.com/products?page=1&limit=100`);
  const data = await response.json();
  const { items } = data;
  return items;
}