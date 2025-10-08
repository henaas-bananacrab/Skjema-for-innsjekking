import Kontakter from './Kontakt.jsx';
import Knapp from './Knapp.jsx';
import Enhet from './Enhet.jsx';
import Problem from './Problem.jsx';
import Bilde from './Bilde.jsx';
const Home = ({addRow, setSelectedText}) => {
  return (
    <>
      <Enhet setSelectedText={setSelectedText} />
      <Kontakter />
      <Problem />
      <Bilde />
      <Knapp onAddRow={addRow} />
    </>
  );
};
export default Home;