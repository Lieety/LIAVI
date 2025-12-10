// /pages/_app.js

import { AuthProvider } from '../context/AuthContext'; // Importar el nou Context

function MyApp({ Component, pageProps }) {
  // Aquí hi ha altres coses que utilitzes com Layout, etc.

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;