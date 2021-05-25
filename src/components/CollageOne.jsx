import React from 'react';

const CollageOne = () => (
  <section className="grid grid-cols-12 col-span-full grid-rows-6 row-start-5">
    <div className="grid grid-cols-7 col-start-6 col-end-13 row-span-full bg-brand-yellow">
      <img
        className="col-start-3 col-end-7 row-start-2"
        src="/img/photo-2.jpg"
        alt="collage image 2"
      />
    </div>
    <img
      className="col-start-2 col-end-7 row-start-2 row-end-6"
      src="/img/photo-1.jpg"
      alt="collage image 1"
    />
  </section>
);

export default CollageOne;
