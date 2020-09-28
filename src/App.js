import React from 'react';

const App = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center text-center'>
      <p className='text-2xl md:text-4xl lg:text-5xl text-teal-500 p-4 font-semibold'>
        You're now up and running with a React Tailwind boilerplate
      </p>
      <h1 className='text-xl md:text-3xl lg:text-4xl text-teal-600 p-8 font-medium'>
        Enjoy your coding !
      </h1>

      <footer className='w-full absolute bottom-0 text-teal-700 font-bold text-xl md:text-2xl lg:text-3xl'>
        Made with Parcel
      </footer>
    </div>
  );
};

export default App;
