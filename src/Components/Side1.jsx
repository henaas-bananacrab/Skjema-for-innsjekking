import Kontakter from '../Components/Kontakt.jsx';
import Knapp from '../Components/Knapp.jsx';
import Enhet from '../Components/Enhet.jsx';
import Problem from '../Components/Problem.jsx';
import Bilde from '../Components/Bilde.jsx';
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