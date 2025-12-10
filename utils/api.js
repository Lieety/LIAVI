const fetchAuth = (url, options = {}) => {
  const token = localStorage.getItem('authToken');
  const headers = {
    ...options.headers,
    // Afegim la capçalera d'Autorització a totes les peticions
    Authorization: token ? `Bearer ${token}` : '',
  };

  return fetch(url, { ...options, headers });
};

