import { useSelector } from 'react-redux';

function RocketProfile() {
  const rockets = useSelector((state) => state.rockets);
  let counter = 0;
  rockets.map((data) => {
    if (!data.reservation) {
      counter += 1;
    }
    return counter;
  });
  return (
    <>
      <section>
        <h1>My Rockets</h1>
        <ul>
          {counter > 0 ? (
            rockets.map((rocket) => {
              if (!rocket.reservation) {
                return (
                  <li style={{ border: 'none', color: 'green' }} key={rocket.id}>
                    {rocket.name}
                  </li>
                );
              }
              return null;
            })
          ) : (
            <li style={{ border: 'none' }}>
              Reserved Rockets Currently(0)
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
export default RocketProfile;
