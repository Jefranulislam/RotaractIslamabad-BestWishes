import React from 'react';
import BannerGenerator from './BannerGenerator';
import './App.css'; // Optional: Add your custom CSS here if needed

// Header Component
const Header = () => {
  return (
    <header className=" text-pink py-1">
      <div className="container mx-auto text-right">
        <h1 className="text-s Clash">Rotaract Club of Islamabad</h1>
        <p className="text-xs Clash">Digitalizing Islamabad <span>Beta 1.0 </span> </p>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    

<footer class="bg-white rounded-lg ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.facebook.com/rotaractclubIslamabadbd" class="hover:underline">Rotaract Club of Islamabad</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://github.com/jefranulislam" class="hover:underline me-4 md:me-6">Crate by Jefranul </a>
        </li>
        <li>
            <a href=" https://chat.whatsapp.com/CgcMHtuS2gqKsAhLjIEaaB" class="hover:underline me-4 md:me-6">Join Our Whatsapp Group</a>
        </li>
      
    </ul>
    </div>
</footer>

  );
};

// Main App Component
const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-6">
        <div className="container mx-auto px-4">
          <BannerGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
