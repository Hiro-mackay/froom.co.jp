import React from 'react';

export const MainVisual = ({ title = '' }) => {
  return (
    <section className="pt-14 lg:pt-24 bg-gradient-to-r to-froomYellow  from-orange">
      <div className="container py-20 mx-auto">
        <p className="text-7xl tracking-widest text-white font-bold lg:px-44">{title}</p>
      </div>
    </section>
  );
};
