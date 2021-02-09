import React from 'react';

type Props = {
  isMenuOpen: boolean;
};

export const Navigation: React.FC<Props> = ({ isMenuOpen }) => {
  return (
    <nav className={`w-full ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:flex lg:items-center lg:w-auto`}>
      <a href="#responsive-header" className="block mt-4 mr-20 lg:inline-block lg:mt-0 hover:text-orange">
        Home
      </a>
      <a href="#responsive-header" className="block mt-4 mr-20 lg:inline-block lg:mt-0 hover:text-orange">
        Service
      </a>
      <a href="#responsive-header" className="block mt-4 mr-20 lg:inline-block lg:mt-0 hover:text-orange">
        Memeber
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-orange">
        Contact
      </a>
    </nav>
  );
};
