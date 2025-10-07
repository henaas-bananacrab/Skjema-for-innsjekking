import './problem.css';

function Problem() {
  return (
    <div className='container'>
      <div className='title-bar'>
        <h1>hva er problemet med din enhet?</h1>
      </div>
      <div className='text-area'>
        <textarea rows="5" name="message" placeholder="Beskriv ditt problem" required></textarea>
      </div>
    </div>
  );
}

export default Problem;