import Kontakter from './Kontakt.jsx';
import Knapp from './Knapp.jsx';
import Enhet from './Enhet.jsx';
import Problem from './Problem.jsx';
import Bilde from './Bilde.jsx';
const Home = () => {
  return (
    <>
    <Enhet />
      <Kontakter />
      <Problem />
      <Bilde />
      <Knapp/>
    </>
  );
};
export default Home;