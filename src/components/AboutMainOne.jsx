import React from 'react';

const AboutMainOne = () => (
  <section className="grid col-start-2 col-end-12 row-start-6 gap-[4rem] md:gap-[8rem] place-content-center py-8 md:col-start-4 md:col-end-10 md:py-[8rem]">
    <article className="grid place-items-center gap-5">
      <h2 className="text-xl font-bold md:text-3xl leading-[42px]">
        Making music isn’t easy. It takes time, effort, and learning. But when
        you’re in the flow, it’s incredibly rewarding.
      </h2>
      <p className="text-btext-base md:text-xl leading-[30px]">
        We feel the same way about making Ableton products. The driving force
        behind Ableton is our passion for what we make, and the people we make
        it for.
      </p>
    </article>
    <article class="md:w-full md:h-[28rem]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/9SbnhgjeyXA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-sm mt-2 font-bold">Why Ableton - Juanpe Bolivar</p>
    </article>
    <article className="grid place-items-center gap-5">
      <h2 className="text-xl font-bold md:text-3xl leading-[42px]">
        We are more than 350 people from 30 different countries divided between
        our headquarters in Berlin and our offices in Los Angeles and Tokyo.
      </h2>
      <p className="text-btext-base md:text-xl leading-[30px]">
        Most of us are active musicians, producers, and DJs, and many of us use
        Live and Push every day. We come from a wide range of cultural and
        professional backgrounds. Some of us have PhDs, some are self-taught,
        and most of us are somewhere in between. What connects us is the shared
        belief that each of us has the skills and knowledge to contribute to
        something big: helping to shape the future of music culture.
      </p>
    </article>
  </section>
);

export default AboutMainOne;
