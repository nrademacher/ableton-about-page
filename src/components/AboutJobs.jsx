import React from 'react';

const AboutJobs = () => (
  <>
    <section className="grid col-start-2 col-end-12 place-content-center py-8 gap-[4rem] md:gap-[8rem] md:col-start-4 md:col-end-10 md:py-[8rem]">
      <article className="grid place-items-center gap-5">
        <h2 className="text-xl font-bold md:text-3xl leading-[42px]">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </h2>
        <p className="text-base md:text-xl leading-[30px]">
          If you're joining us in Berlin, we'll help with relocation and
          paperwork. We’ll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it’s not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities.
        </p>
      </article>
    </section>
    <section class="col-start-2 col-end-12 flex flex-col md:flex-row mb-8 md:mb-[8rem]">
      <img
        src="/img/photo-8.jpg"
        alt="about jobs poster"
        className="w-full md:w-1/2"
      />
      <article className="text-3xl leading-[42px] font-bold p-[10%] w-full md:w-1/2 bg-brand-lightblue grid place-items-center">
        <h2 className="flex flex-col text-xl md:text-3xl">
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
          <a href="#" className="mt-8 text-[blue]">
            See latest jobs
          </a>
        </h2>
      </article>
    </section>
  </>
);

export default AboutJobs;
