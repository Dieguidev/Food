import React from 'react';

const Forms = () => {
  return (
    <form className='md:container md:mx-auto mx-2 mb-8'>
      <div>Nombre</div>
      <input className='form-control focus:outline-none focus:shadow-outline placeholder-secondary' type="text" placeholder='Name' />
      <div>Email</div>
      <input className='form-control focus:outline-none focus:shadow-outline placeholder-secondary' type="email" placeholder='Email' />
      <div>Comentarios</div>
      <textarea className='form-control focus:outline-none focus:shadow-outline placeholder-secondary' name="" id="" cols="30" rows="10"></textarea>
      <button className='mx-auto block py-1 px-4 rounded shadow-xl hover:shadow-none hover:bg-gray-700 hover:text-white bg-gray-500'>Enviar</button>
    </form>
  );
};

export default Forms;