import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const AboutIntro = () => {
  const img = useMediaQuery(
    '(max-width: 768px)',
    '/img/header-mobile.webp',
    '/img/header.webp'
  );

  return (
    <>
      <section className="grid col-start-2 col-end-12 place-items-center">
        <img
          src={img}
          alt="header"
          className="col-span-full row-span-full bg-header-hero"
        />
        <h1 className="select-none tracking-tight col-span-full row-span-full text-[#fd5948] text-[5rem] md:text-[10rem] font-bold">
          Ableton
        </h1>
      </section>
      <section className="grid col-start-2 md:col-start-4 col-end-12 md:col-end-10 gap-4 place-content-center py-8 md:py-[8rem]">
        <h2 className="text-xl md:text-3xl font-bold leading-[42px]">
          We make <span className="text-brand-blue">Live</span>,{' '}
          <span className="text-brand-blue">Push</span> and{' '}
          <span className="text-brand-blue">Link</span> — unique software and
          hardware for music creation and performance. With these products, our
          community of users creates amazing things.
        </h2>
        <p className="text-base md:text-xl leading-[30px]">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </section>
    </>
  );
};

export default AboutIntro;
