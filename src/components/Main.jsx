import React from 'react';
import Image from '../assets/ImagenFondo.avif'
import Targets from './Targets';

const Main = () => {
  return (
    <div>
    <div className=" bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')] h-56 md:h-[25rem] bg-cover md:bg-center bg-bottom bg-no-repeat">
    </div>
    <Targets/>
    </div>
  );
};

export default Main;