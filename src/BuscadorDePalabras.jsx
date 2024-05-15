import React, { useState } from 'react';
import axios from 'axios';

function BuscadorDePalabras() {
  const [palabra, setPalabra] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarPalabra = async () => {
    try {///search?query=ejemplo
      const response = await axios.get(`http://192.168.1.67:3000/search?query=${palabra}`);
      setResultados(response.data);
    } catch (error) {
      console.error('Error al buscar la palabra:', error);
      setResultados([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
        placeholder="Ingresa una palabra"
      />
      <button onClick={buscarPalabra}>Buscar</button>
      <div>
        {resultados.length > 0 ? (
          resultados.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}

export default BuscadorDePalabras;
