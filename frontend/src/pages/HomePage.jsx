import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto text-gray-deschis gap-32 lg:flex-row flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center text-center">
      <div className="flex flex-col flex-3 justify-start">
        <div>Chestia cu animatie si text</div>
        <div>Continua sa inveti si sa te imbunatatesti</div>
        <div>Cursuri recomandate</div>
      </div>

      <div className="flex flex-col justify-end">
        <div>Profilul tau</div>
        <div>Conexiuni, dar pe sm screens nu se afiseaza</div>
      </div>
    </div>
  );
};

export default HomePage;
