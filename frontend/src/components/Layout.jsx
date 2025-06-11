import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen bg-gray-50 text-gray-900'>
      <Navbar></Navbar>
      <main className='flex-1'>
        {children}
      </main>
      <footer className='bg-white shadow-inner px-6 py-4 text-center text-sm text-gray-500'>
        © 2025 Liavi. Fet amb 💙 per estudiants.
      </footer>
    </div>
  );
};

export default Layout;
