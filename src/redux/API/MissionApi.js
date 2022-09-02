const fetchMission = async () => {
  const data = await fetch('https://api.spacexdata.com/v3/missions');
  return data;
};

export default fetchMission;
