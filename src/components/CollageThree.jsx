import React from 'react';

const CollageThree = () => (
  <section className="relative top-0 z-0 col-span-full">
    <div className="absolute left-[16.66667vw] w-[67vw] h-[58.33333vw] z-0 bg-brand-purple" />
    <img
      className="w-[33.33333vw] h-[25vw] ml-[8.33333vw] absolute top-[16.66667vw]"
      src="/img/photo-6-a.jpg"
      alt="collage image 6a"
    />
    <img
      className="w-[41.66667vw] h-[41.66667vw] top-[8.33333vw] right-0 absolute z-10"
      src="/img/photo-7.jpg"
      alt="collage image 7"
    />
  </section>
);

export default CollageThree;
