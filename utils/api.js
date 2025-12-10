
export const fetchAuth = async (url, options = {}) => {
  const token = localStorage.getItem('authToken');

  const headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    console.error("Authentication Error: Token is invalid or expired.");
    // Aquí podríem afegir la lògica de logout automàtic, si cal
  }

  return response;
};