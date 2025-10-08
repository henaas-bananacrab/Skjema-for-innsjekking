import '../Style/henvedelser.css';

function Henvendelser() {  
  return (
    <div className="henvedelser">
      <h1>Henvendelser</h1>
      <p>Her kan du sende henvendelser til oss.</p>
      <ul>
        <li>
          E-post: <a href="mailto:Epost@example.com">Epost@example.com</a>
        </li>
        <li>
          Telefon: <a href="tel:+471234567">+47 123 45 67</a>
        </li>
      </ul>
    </div>
  );
}

export default Henvendelser;