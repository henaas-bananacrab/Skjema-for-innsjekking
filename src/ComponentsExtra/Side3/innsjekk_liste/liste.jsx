import './liste.css';
import data from '../../Side1/Enhet_Meny/data/data.json';function Liste({ rows }) {
    
    if (!rows || rows.length === 0) {
        return <p>Ingen data å vise.</p>;
    }

    return (
        <div className="list-container">
            <table className="list-table">
                <thead>
                    <tr className="list-tr">
                        <th className="list-th">Navn:</th>
                        <th className="list-th">Enhet:</th>
                        <th className="list-th">Nummer:</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <tr key={row.id} className="list-tr">
                            <td className="list-td">{row.data}</td>
                            <td className="list-td">{data.enhetData[0].name}</td>
                            <td className="list-td">{idx + 1}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Liste;
