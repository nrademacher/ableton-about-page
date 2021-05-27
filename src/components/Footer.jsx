import React from 'react';
import Logo from './Logo';

const Footer = () => (
  <>
    <div className="col-span-full border-t-2 border-gray-200" />
    <footer className="col-start-2 col-end-12 my-[2rem] md:my-[8rem] ">
      <h2 className="text-5xl font-bold md:text-6xl">Ableton</h2>
      <section className="grid gap-8 md:gap-14 md:grid-cols-3 my-[3rem] md:my-[5rem] ">
        <article className="md:text-xl md:row-start-1 md:col-start-3">
          <div className="mb-4">
            <h3 className="font-bold">Sign up to our newsletter</h3>
            <p>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
          </div>
          <form className="flex w-full">
            <input
              type="email"
              className="bg-[#eee] select-none py-[0.4em] px-[0.75em] w-3/4"
              placeholder="Email Address"
            />
            <button className="font-bold bg-[blue] py-[0.35em] px-[1.5em] w-1/4 min-w-max text-white">
              Sign up
            </button>
          </form>
        </article>
        <article className="md:text-xl md:row-start-1 md:col-start-1">
          <ul>
            <li>
              <a href="#">Register Live or Push &rsaquo;</a>
            </li>
            <li>
              <a href="#">About Ableton &rsaquo;</a>
            </li>
            <li>
              <a href="#">Jobs &rsaquo;</a>
            </li>
          </ul>
          <ul className="flex">
            <li>
              <a
                href="#"
                className="bg-[#3477F2] w-10 h-10 mt-[0.625rem] mr-[0.625rem] bg-center inline-block bg-contain bg-no-repeat text-[0rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Facebook</title>
                  <path
                    d="M33.334 20a13.333 13.333 0 10-15.417 13.167v-9.312h-3.385V20h3.385v-2.933c0-3.342 1.991-5.187 5.036-5.187a20.5 20.5 0 012.985.26v3.277h-1.681a1.927 1.927 0 00-2.173 2.082v2.5h3.7l-.591 3.854h-3.109v9.314A13.337 13.337 0 0033.334 20z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M25.19 23.854L25.781 20h-3.7v-2.5a1.927 1.927 0 012.173-2.082h1.681v-3.283a20.5 20.5 0 00-2.985-.26c-3.046 0-5.036 1.846-5.036 5.188v2.938h-3.383v3.854h3.385v9.32a13.473 13.473 0 004.167 0v-9.317z"
                    fill="#3477f2"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#1DA1F2] w-10 h-10 mt-[0.625rem] mr-[0.625rem] bg-center inline-block bg-contain bg-no-repeat text-[0rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Twitter</title>
                  <path
                    d="M15.362 30.159a14.5 14.5 0 0014.594-14.594c0-.222 0-.443-.015-.663a10.436 10.436 0 002.559-2.655 10.238 10.238 0 01-2.946.807 5.147 5.147 0 002.255-2.837 10.279 10.279 0 01-3.257 1.245 5.134 5.134 0 00-8.741 4.678A14.562 14.562 0 019.24 10.781a5.133 5.133 0 001.588 6.847 5.091 5.091 0 01-2.328-.642v.065a5.131 5.131 0 004.115 5.028 5.121 5.121 0 01-2.316.088 5.135 5.135 0 004.792 3.562 10.292 10.292 0 01-6.37 2.2 10.441 10.441 0 01-1.221-.074 14.521 14.521 0 007.862 2.3"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#FF001D] w-10 h-10 mt-[0.625rem] mr-[0.625rem] bg-center inline-block bg-contain bg-no-repeat text-[0rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Youtube</title>
                  <path
                    d="M32.776 13.601a3.351 3.351 0 00-2.358-2.373C28.339 10.667 20 10.667 20 10.667s-8.339 0-10.418.561a3.351 3.351 0 00-2.358 2.373 35.146 35.146 0 00-.557 6.46 35.146 35.146 0 00.557 6.46 3.351 3.351 0 002.358 2.373c2.08.561 10.418.561 10.418.561s8.339 0 10.418-.561a3.351 3.351 0 002.358-2.373 35.146 35.146 0 00.557-6.46 35.146 35.146 0 00-.557-6.46z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M17.273 24.025l6.97-3.961-6.97-3.969z"
                    fill="#ff001d"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#F77737] w-10 h-10 mt-[0.625rem] bg-center inline-block bg-contain bg-no-repeat text-[0rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Instagram</title>
                  <g transform="translate(-336 -285)">
                    <path
                      d="M356 294.069c3.56 0 3.982.014 5.388.078a7.38 7.38 0 012.476.459 4.416 4.416 0 012.53 2.53 7.38 7.38 0 01.459 2.476c.064 1.406.078 1.828.078 5.388s-.014 3.982-.078 5.388a7.38 7.38 0 01-.459 2.476 4.416 4.416 0 01-2.53 2.53 7.38 7.38 0 01-2.476.459c-1.406.064-1.827.078-5.388.078s-3.982-.014-5.388-.078a7.38 7.38 0 01-2.476-.459 4.416 4.416 0 01-2.53-2.53 7.38 7.38 0 01-.459-2.476c-.064-1.406-.078-1.828-.078-5.388s.014-3.982.078-5.388a7.38 7.38 0 01.459-2.476 4.416 4.416 0 012.53-2.53 7.38 7.38 0 012.476-.459c1.406-.064 1.828-.078 5.388-.078m0-2.4c-3.621 0-4.075.015-5.5.08a9.787 9.787 0 00-3.237.62 6.818 6.818 0 00-3.9 3.9 9.787 9.787 0 00-.62 3.237c-.065 1.422-.08 1.876-.08 5.5s.015 4.075.08 5.5a9.787 9.787 0 00.62 3.237 6.818 6.818 0 003.9 3.9 9.787 9.787 0 003.237.62c1.422.065 1.876.08 5.5.08s4.075-.015 5.5-.08a9.787 9.787 0 003.237-.62 6.818 6.818 0 003.9-3.9 9.787 9.787 0 00.62-3.237c.065-1.422.08-1.876.08-5.5s-.015-4.075-.08-5.5a9.787 9.787 0 00-.62-3.237 6.818 6.818 0 00-3.9-3.9 9.787 9.787 0 00-3.237-.62c-1.422-.065-1.876-.08-5.5-.08z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M356 298.153a6.847 6.847 0 106.847 6.847 6.847 6.847 0 00-6.847-6.847zm0 11.291a4.444 4.444 0 114.444-4.444 4.444 4.444 0 01-4.444 4.444z"
                      fill="#fff"
                    ></path>
                    <circle
                      cx="1.6"
                      cy="1.6"
                      r="1.6"
                      transform="translate(361.517 296.283)"
                      fill="#fff"
                    ></circle>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </article>
        <article className="md:text-xl md:row-start-1 md:col-start-2">
          <h3 className="font-bold">Education</h3>
          <ul>
            <li>
              <a href="#">Offers for students and teachers &rsaquo;</a>
            </li>
            <li>
              <a href="#">Ableton for the Classroom &rsaquo;</a>
            </li>
            <li>
              <a href="#">Ableton for Colleges and Universities &rsaquo;</a>
            </li>
          </ul>
        </article>
        <article className="md:text-xl">
          <h3 className="font-bold">Community</h3>
          <ul>
            <li>
              <a href="#">Find Ableton User Groups &rsaquo;</a>
            </li>
            <li>
              <a href="#">Find Certified Training &rsaquo;</a>
            </li>
            <li>
              <a href="#">Become a Certified Trainer &rsaquo;</a>
            </li>
          </ul>
        </article>
        <article className="md:text-xl">
          <h3 className="font-bold">Distributors</h3>
          <ul>
            <li>
              <a href="#">Find Distributors &rsaquo;</a>
            </li>
            <li>
              <a href="#">Try Push in-store &rsaquo;</a>
            </li>
          </ul>
        </article>
        <article className="md:text-xl">
          <h3 className="mb-3 font-bold">Language and Location</h3>
          <form className="md:flex">
            <select
              name="language"
              className="md:mr-1 mb-1 md:mb-0 bg-[#eee] px-[0.75em] py-[0.35em]"
            >
              <option value="en" selected="">
                English
              </option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="ja">日本語</option>
              <option value="zh-cn">简体中文</option>
            </select>
            <select
              className="w-2/3 bg-[#eee] px-[0.75em] py-[0.35em]"
              name="country"
            >
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="fr">France</option>
              <option value="de" selected="">
                Germany
              </option>
              <option value="ca">Canada</option>
              <option value="jp">Japan</option>
              <option value="cn">China</option>
            </select>
          </form>
        </article>
      </section>
      <section class="flex flex-col justify-between md:flex-row md:items-center">
        <ul className="mb-[3rem] md:mb-0 flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row font-bold text-sm">
          <li>
            <a href="#">Archive</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Press Resources</a>
          </li>
          <li>
            <a href="#">Legal Info</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Settings</a>
          </li>
          <li>
            <a href="#">Imprint</a>
          </li>
        </ul>
        <article className="flex items-center md:flex-row-reverse">
          <Logo className="w-12 mr-4 md:mr-0 md:ml-4" />
          <span className="text-sm font-bold">Made in Berlin</span>
        </article>
      </section>
    </footer>
  </>
);

export default Footer;
