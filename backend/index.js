import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [backendMessage, setBackendMessage] = useState('Carregant...');

  useEffect(() => {
    axios.get('/api/test')
      .then(response => {
        setBackendMessage(response.data.message);
      })
      .catch(() => {
        setBackendMessage('No s’ha pogut connectar amb el backend.');
      });
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial', maxWidth: 600, margin: 'auto' }}>
      <h1>Benvingut a LIAVI - Flashcards automàtiques</h1>
      <p>Resposta del backend: {backendMessage}</p>
    </div>
  );
}

export default App;
