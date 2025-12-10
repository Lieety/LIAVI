
import { useAuth } from '../../../context/AuthContext';
const { login } = useAuth(); 

const handleSubmit = async (e) => {
  e.preventDefault();
  

  const response = await fetch('/api/auth/login', { /* ... */ });
  
  if (response.ok) {
    const data = await response.json();
    
    // CRIDA CLAU: Utilitzem la funció del Context
    login(data.token, data.user); 

  } else {
    // Gestió d'errors
  }
};