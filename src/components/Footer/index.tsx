import React from 'react';
import { Navigation } from '../Navigation';

export const Footer: React.FC = () => {
  return (
    <div className="pb-8 bg-white">
      <div className="container flex justify-between mx-auto">
        <Navigation isMenuOpen={true} />
        <div>© 2021 Froom, Inc. Make Learn Interesting.</div>
      </div>
    </div>
  );
};
