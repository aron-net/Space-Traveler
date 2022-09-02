import { useSelector } from 'react-redux';

function DragonProfile() {
  const dragons = useSelector((state) => state.dragons);
  let reserveCount = 0;
  dragons.map((dragon) => {
    if (dragon.reserved) {
      reserveCount += 1;
    }
    return reserveCount;
  });
  return (
    <section>
      <h1>My Dragons</h1>
      <ul>
        {reserveCount > 0 ? (
          dragons.map((dragon) => {
            if (dragon.reserved) {
              return <li key={dragon.id}>{dragon.name}</li>;
            }
            return null;
          })
        ) : (
          <li style={{ border: 'none', color: 'green' }}>Reserved Dragons Currently(0)</li>
        )}
      </ul>
    </section>
  );
}
export default DragonProfile;
