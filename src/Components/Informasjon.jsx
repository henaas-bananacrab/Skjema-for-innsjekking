import '../Style/Informasjon.css'

function Informasjon({ kontaktInfo, status }) {



  return (
    <div className="informasjon">
      <h2 className='informasjon-title'>Informasjon</h2>
      <p>Navn: {kontaktInfo?.name || 'Ikke angitt'}</p>
      <p>Telefon: {kontaktInfo?.phone || 'Ikke angitt'}</p>
      <p>E-post: {kontaktInfo?.email || 'Ikke angitt'}</p>
      <p>Status: {status || 'Ikke angitt'}</p>
    </div>
  );
}

export default Informasjon;
