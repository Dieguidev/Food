import React from 'react';

const Footer = () => {
  return (
    <footer className='absolute botton-8 w-full bg-secondary text-white md:flex justify-around'>
      <div className='ml-8 mt-4'>
        <div className='hover:text-primary'><i className="fa-brands fa-facebook"></i> /facebook</div>
        <div className='hover:text-primary'><i className="fa-brands fa-twitter"></i> @DieguidevFood</div>
        <div className='hover:text-primary'><i className="fa-brands fa-instagram"></i> @DieguidevFood</div>
      </div>
      <ul className='ml-8 mb-4 mt-4'>
        <li>Soporte</li>
        <li>Acerca de Nosotros</li>
        <li>Registro</li>
        <li>Aviso de Privacidad</li>
      </ul>
    </footer>
  );
};

export default Footer;