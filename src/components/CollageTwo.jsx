import React from 'react';

const CollageTwo = () => (
  <section className="grid grid-cols-12 col-span-full grid-rows-6 row-start-7">
    <div className="grid grid-cols-7 col-start-1 col-end-8 row-span-full bg-brand-green">
      <img
        className="col-start-2 col-end-6 row-start-2"
        src="/img/photo-3.jpg"
        alt="collage image 3"
      />
      <img
        className="col-start-2 col-end-6 row-start-3"
        src="/img/photo-4.jpg"
        alt="collage image 4"
      />
    </div>
    <img
      className="col-start-7 col-end-12 row-start-2 row-end-6"
      src="/img/photo-5.jpg"
      alt="collage image 5"
    />
  </section>
);

export default CollageTwo;
