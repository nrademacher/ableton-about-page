import React from 'react';

const AboutMainTwo = () => (
  <>
    <section className="grid col-start-2 col-end-12 place-content-center py-8 gap-[4rem] md:gap-[8rem] md:col-start-4 md:col-end-10 md:py-[8rem]">
      <article className="grid place-items-center gap-5">
        <h2 className="text-xl font-bold md:text-3xl leading-[42px]">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </h2>
        <p className="text-base md:text-xl leading-[30px]">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </article>
    </section>
    <img
      className="col-start-2 col-end-12"
      src="/img/poster-meet-the-makers.webp"
      alt="meet the makers poster"
    />
    <section className="grid col-start-2 col-end-12 place-content-center py-8 gap-[4rem] md:gap-[8rem] md:col-start-4 md:col-end-10 md:py-[8rem]">
      <article className="grid place-items-center gap-5">
        <h2 className="text-xl font-bold md:text-3xl leading-[42px]">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </h2>
        <p className="text-base md:text-xl leading-[30px]">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p className="text-base md:text-xl leading-[30px]">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </article>
    </section>
  </>
);

export default AboutMainTwo;
