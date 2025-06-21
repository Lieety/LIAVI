# 📚 LIAVI - Plataforma d'Aprenentatge Intel·ligent

> Una aplicació web moderna per a estudiants que combina flashcards intel·ligents, resums automàtics i gestió de perfils amb Firebase i MongoDB.

![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=flat-square&logo=mongodb)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange?style=flat-square&logo=firebase)

## 🌟 Característiques

- **🔐 Autenticació segura** amb Firebase Auth
- **📝 Gestió de flashcards** per a l'aprenentatge eficient
- **📄 Generació de resums** automatitzada
- **👤 Perfils d'usuari** personalitzables
- **📱 Disseny responsive** amb Tailwind CSS
- **⚡ Rendiment optimitzat** amb Vite
- **🌐 API RESTful** amb Express i MongoDB

## 🏗️ Arquitectura del Projecte

```
LIAVI/
├── 🎨 frontend/          # Aplicació React amb Vite
│   ├── src/
│   │   ├── components/   # Components reutilitzables
│   │   ├── pages/        # Pàgines de l'aplicació
│   │   ├── context/      # Context d'autenticació
│   │   └── hooks/        # Hooks personalitzats
│   ├── public/           # Arxius estàtics
│   └── dist/             # Build de producció
├── 🚀 backend/           # API servidor amb Express
│   ├── controllers/      # Lògica de negoci
│   ├── models/           # Models de MongoDB
│   ├── routes/           # Rutes de l'API
│   └── middleware/       # Middlewares
└── 📦 node_modules/      # Dependències compartides
```

## 🚀 Inici Ràpid

### Prerequisits

- **Node.js** (versió 18+ recomanada)
- **npm** o **yarn**
- **MongoDB** (local o MongoDB Atlas)
- **Compte Firebase** per a l'autenticació

### Instal·lació

1. **Clona el repositori**
   ```bash
   git clone https://github.com/teu-usuari/LIAVI.git
   cd LIAVI
   ```

2. **Instal·la les dependències del backend**
   ```bash
   cd backend
   npm install
   ```

3. **Instal·la les dependències del frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configura les variables d'entorn**
   
   Crea un arxiu `.env` al directori `backend/`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/liavi
   PORT=3000
   JWT_SECRET=el_teu_secret_jwt
   ```

   Configura Firebase al frontend creant `src/firebase.js`:
   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   
   const firebaseConfig = {
     // La teva configuració de Firebase
   };
   
   export const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   ```

### Execució en Desenvolupament

1. **Inicia el backend**
   ```bash
   cd backend
   npm start
   ```
   El servidor estarà disponible a `http://localhost:3000`

2. **Inicia el frontend** (en una nova terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   L'aplicació estarà disponible a `http://localhost:5173`

## 🛠️ Stack Tecnològic

### Frontend
- **React 19.1.0** - Llibreria de UI
- **Vite 6.3.5** - Build tool i dev server
- **React Router Dom 7.6.2** - Navegació
- **Tailwind CSS 4.1.9** - Framework CSS
- **Firebase 11.9.0** - Autenticació
- **Axios 1.9.0** - Client HTTP

### Backend
- **Node.js** - Runtime JavaScript
- **Express 4.18.2** - Framework web
- **MongoDB** - Base de dades NoSQL
- **Mongoose 7.0.0** - ODM per MongoDB
- **dotenv** - Gestió de variables d'entorn

### Eines de Desenvolupament
- **ESLint** - Linter de codi
- **PostCSS** - Processador CSS
- **Autoprefixer** - Prefixos CSS automàtics

## 📋 Scripts Disponibles

### Frontend
```bash
npm run dev      # Inicia el servidor de desenvolupament
npm run build    # Construeix per a producció
npm run preview  # Previsualitza el build de producció
npm run lint     # Executa ESLint
```

### Backend
```bash
npm start        # Inicia el servidor
npm run dev      # Inicia amb nodemon (si està configurat)
```

## 🎯 Funcionalitats Principals

### Autenticació
- Registre d'usuaris amb email/contrasenya
- Inici de sessió segur
- Gestió d'estat d'autenticació amb Context API
- Protecció de rutes privades

### Flashcards
- Creació i edició de targetes d'estudi
- Algorisme d'aprenentatge espaciat
- Categories i etiquetes personalitzables
- Sistema de progrés i estadístiques

### Resums
- Generació automàtica de resums
- Emmagatzematge i gestió de documents
- Compartició i col·laboració

### Perfil d'Usuari
- Informació personal
- Preferències d'aprenentatge
- Historial d'activitats
- Estadístiques de progrés

## 🔧 Configuració Avançada

### Variables d'Entorn

**Backend (.env)**
```env
# Base de dades
MONGODB_URI=mongodb://localhost:27017/liavi
MONGODB_URI_PROD=mongodb+srv://user:pass@cluster.mongodb.net/liavi

# Servidor
PORT=3000
NODE_ENV=development

# Seguretat
JWT_SECRET=supersecretkey
JWT_EXPIRE=7d

# CORS
CLIENT_URL=http://localhost:5173
```

**Frontend (firebase.js)**
```javascript
const firebaseConfig = {
  apiKey: "la-teva-api-key",
  authDomain: "projecte.firebaseapp.com",
  projectId: "projecte-id",
  storageBucket: "projecte.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## 🚢 Desplegament

### Frontend (Vercel/Netlify)
```bash
npm run build
# Desplega la carpeta dist/
```

### Backend (Railway/Heroku)
```bash
# Configura les variables d'entorn a la plataforma
# Assegura't que MONGODB_URI apunta a MongoDB Atlas
git push origin main
```

## 🤝 Contribució

1. Fes un fork del projecte
2. Crea una branca per a la teva funcionalitat (`git checkout -b feature/nova-funcionalitat`)
3. Commit els teus canvis (`git commit -am 'Afegeix nova funcionalitat'`)
4. Push a la branca (`git push origin feature/nova-funcionalitat`)
5. Obre un Pull Request

## 📝 Llicència

Aquest projecte està sota la llicència MIT. Consulta l'arxiu [LICENSE](LICENSE) per a més detalls.

## 👥 Autors

- Carles Paniagua - *Desenvolupador Principal Backend* - [@lieety](https://github.com/lieety)
- Guillermo Ballarín - *Desenvolupador Principal Frontend* - [@wilantr0](https://github.com/wilantr0)

## 🙏 Agraïments

- Comunitat de React per les eines increïbles
- Equip de Tailwind CSS pel framework fantàstic
- Firebase per l'autenticació senzilla
- MongoDB per la flexibilitat de la base de dades

---

<div align="center">
  <sub>Fet amb 💙 per estudiants, per a estudiants</sub>
</div>