import React from 'react';

const CollageThree = () => (
  <section className="grid grid-cols-12 col-span-full grid-rows-9">
    <div className="grid grid-cols-8 col-start-3 col-end-11 row-span-full bg-brand-purple">
      <img
        className="col-start-4 col-end-8 row-start-2"
        src="/img/photo-7.jpg"
        alt="collage image 7"
      />
    </div>
    <img
      className="col-start-1 col-end-5 row-start-3 row-end-7"
      src="/img/photo-6-a.jpg"
      alt="collage image 6a"
    />
  </section>
);

export default CollageThree;
