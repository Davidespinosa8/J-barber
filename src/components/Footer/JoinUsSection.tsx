"use client"

import React from 'react';

const JoinUsSection: React.FC = () => {
  const sendMessage = () => {
    window.location.href = "https://wa.me/+542364453214/?text=¡Comunícate con nosotros!";
  };

  return (
    <section className="bg-black">
      <div className="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
        <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
          <span className="inline md:block">No dudes</span>
          <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
            Espero tu
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300"> Mensaje</span>
          </span>
        </h1>
        <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
          <button className="bg-tkb border text-sm text-white py-3 px-7 rounded-full" onClick={sendMessage}>
            Enviar mensaje
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
