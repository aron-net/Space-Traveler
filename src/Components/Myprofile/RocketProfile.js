import { useSelector } from 'react-redux';
import './Myprofile.css';

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
                  <li key={rocket.id}>
                    {rocket.name}
                  </li>
                );
              }
              return null;
            })
          ) : (
            <li>
              Reserved Rockets Currently(0)
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
export default RocketProfile;
