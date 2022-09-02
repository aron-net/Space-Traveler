const fetchDragon = async () => {
  const data = await fetch('https://api.spacexdata.com/v3/dragons');
  return data;
};
export default fetchDragon;
