import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // Simulem si està logat (false = no, true = sí)
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (loggedIn) {
      // Simulem logout
      setLoggedIn(false);
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>
          Liavi
        </Link>
      </div>

      <div style={styles.center}>
        <Link to="/flashcards" style={styles.link}>
          Flashcards
        </Link>
        <Link to="/resums" style={styles.link}>
          Resums
        </Link>
        <Link to="/esquemes" style={styles.link}>
          Esquemes
        </Link>
      </div>

      <div style={styles.right}>
        {loggedIn ? (
          <Link to="/perfil" style={styles.profileLink}>
            Perfil
          </Link>
        ) : (
          <button onClick={handleLoginLogout} style={styles.loginButton}>
            Iniciar sessió / Registre
          </button>
        )}
      </div>
    </nav>
  );
};

const primaryColor = '#4f46e5'; // Blau intens agradable
const backgroundColor = '#f3f4f6'; // Gris clar

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: backgroundColor,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  left: {
    flex: '1',
  },
  logo: {
    textDecoration: 'none',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: primaryColor,
    cursor: 'pointer',
  },
  center: {
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
  },
  link: {
    textDecoration: 'none',
    color: '#374151', // gris fosc
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '8px 15px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  right: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  loginButton: {
    backgroundColor: primaryColor,
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  profileLink: {
    textDecoration: 'none',
    color: primaryColor,
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '8px 15px',
    borderRadius: '6px',
    border: '2px solid #ccc',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
};

export default Navbar;
