import React from 'react';

const currentYear = new Date().getFullYear()
const Footer = () => {

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">&copy;Copyright by <i class="fa-solid fa-terminal"></i> Fabiola Castaneda Gamboa {currentYear}</div>
    </footer>
  );
};

export default Footer;
