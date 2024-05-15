// Importaciones necesarias
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchPage.css';  // Asegúrate de que el archivo CSS está en la misma carpeta

function SearchPage() {
  // Estados para manejar la palabra de búsqueda y los resultados
  const [palabra, setPalabra] = useState('');
  const [resultados, setResultados] = useState([]);

  // Función para buscar palabras mediante una petición a la API
  const buscarPalabra = async () => {
    try {
      // Realiza una solicitud GET a la API y actualiza el estado con los resultados
      const response = await axios.get(`http://192.168.1.67:3000/search?query=${palabra}`);
      setResultados(response.data);
    } catch (error) {
      // En caso de error, registra el error y limpia los resultados
      console.error('Error al buscar la palabra:', error);
      setResultados([]);
    }
  };

  // JSX para renderizar el componente
  return (
    <div className="container">
      <input
        className="input-field"
        type="text"
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
        placeholder="Ingresa una palabra"
      />
      <button className="button" onClick={buscarPalabra}>Buscar</button>
      <div className="results-container">
        {resultados.length > 0 ? (
          resultados.map((item, index) => (
            <div key={index} className="result-item">
              <Link to="/detalle" className="link">
                <p>Archivo: {item.file}</p>
                <p>Clave: {item.key}</p>
                <p>Valor: {item.value}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}

// Exporta el componente para su uso en otras partes de la aplicación
export default SearchPage;
