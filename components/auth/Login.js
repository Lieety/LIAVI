// Exemple de funció de Login dins del component React
const handleLogin = async (email, password) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // Gestió d'errors (credencials invàlides)
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    // 1. Desa el token al localStorage
    localStorage.setItem('authToken', data.token);

    // 2. Actualitza l'estat global de l'usuari (utilitzant el Context)
    login(data.token, data.user); 

    // 3. Redirigeix l'usuari (p. ex., a la pàgina principal)
    router.push('/');

  } catch (error) {
    console.error(error.message);
    // Mostrar missatge d'error a l'usuari
  }
};