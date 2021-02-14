import React from 'react';
import { FooterNavigation } from '../Navigation';

export const Footer: React.FC = React.memo(() => {
  return (
    <div className="bg-white">
      <div className="container flex flex-wrap justify-between px-4 pb-2 mx-auto md:px-10 box-border">
        <div className="pb-10 lg:max-w-md">
          <FooterNavigation />
        </div>
        <div className=" text-sm">© 2021 Froom, Inc. Make Learn Interesting.</div>
      </div>
    </div>
  );
});
