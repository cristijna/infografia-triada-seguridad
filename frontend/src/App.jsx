import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [datosTriada, setDatosTriada] = useState([]);
  // Estado para controlar el modo oscuro
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    axios.get('/api/triada')
      .then(response => {
        setDatosTriada(response.data);
      })
      .catch(error => console.error("Error al cargar los datos:", error));
  }, []);

  // Este efecto agrega o quita la clase 'dark' del body según el estado
  useEffect(() => {
    if (modoOscuro) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [modoOscuro]);

  return (
    <div className="infografia-container">
      
      {/* Botón del Modo Oscuro */}
      <div className="toggle-container">
        <button 
          className="btn-toggle-tema" 
          onClick={() => setModoOscuro(!modoOscuro)}
        >
          {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>

      <header className="header-seccion">
        <h1>La Triada de la Seguridad (CIA)</h1>
        <p className="subtitulo">Pasa el cursor sobre cada pilar para girar la tarjeta y descubrir cómo funciona a nivel técnico.</p>
      </header>
      
      <div className="pilares-grid">
        {datosTriada.map(item => (
          <div key={item.id} className="flip-card">
            <div className="flip-card-inner">
              
              <div className={`flip-card-front color-borde-${item.id}`}>
                <div className="icono-pilar">{item.icono}</div>
                <h2>{item.pilar}</h2>
                <p className="descripcion">{item.descripcion}</p>
                <div className="indicador-giro">↻ Pasa el cursor para girar</div>
              </div>

              <div className={`flip-card-back color-borde-back-${item.id}`}>
                <h3>Detalles Técnicos</h3>
                <div className="info-seccion">
                  <p><strong>⚠️ Riesgo / Amenaza:</strong></p>
                  <p className="texto-pequeno">{item.amenaza}</p>
                </div>
                <div className="info-seccion">
                  <p><strong>✅ Controles de mitigación:</strong></p>
                  <ul>
                    {item.controles?.map((control, index) => (
                      <li key={index} className="texto-pequeno">{control}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;