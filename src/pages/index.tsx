import React from 'react';
import WebFont from 'webfontloader';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Index: React.FC = () => {
  return (
    <div className="bg-orange font-main">
      <Header />
      <section className="relative w-screen h-screen bg-white">
        <div className="w-1/2 inset-center">
          <svg id="Froom" className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 192">
            <defs>
              <style>
                {
                  '.cls-1{fill:#ffc843;}.cls-2{fill:#00b3e3;}.cls-3{fill:#008c3c;}.cls-4{fill:#da3ab3;}.cls-5{fill:#00299f;}.cls-6{fill:#da2d2f;}'
                }
              </style>
            </defs>
            <path className="cls-1" d="M16.66,61.34h0V180h29V106.23a49.31,49.31,0,0,1-29-44.89" />
            <path
              className="cls-2"
              d="M45.68,61.34h0v44.89a49.06,49.06,0,0,0,20.21,4.34h53.66v-29H65.88a20.22,20.22,0,0,1-20.2-20.2"
            />
            <path
              className="cls-3"
              d="M119.55,12.11H65.88a49.23,49.23,0,0,0-20.2,94.12V61.34a20.22,20.22,0,0,1,20.2-20.2h53.67v-29"
            />
            <path className="cls-4" d="M158.23,74.3h-29v39.31a39.37,39.37,0,0,1,29-38V74.3" />
            <path
              className="cls-2"
              d="M168.52,74.3a39.77,39.77,0,0,0-10.29,1.35v38a10.29,10.29,0,0,1,17.57-7.27l20.52-20.53a39,39,0,0,0-27.8-11.51"
            />
            <path className="cls-5" d="M158.23,75.65a39.37,39.37,0,0,0-29,38V180h29V75.65" />
            <path
              className="cls-1"
              d="M249.22,74.31A52.81,52.81,0,1,0,302,127.12a52.81,52.81,0,0,0-52.82-52.81m0,76.59A23.79,23.79,0,1,1,273,127.11a23.77,23.77,0,0,1-23.79,23.79"
            />
            <path
              className="cls-1"
              d="M364.42,74.31a52.81,52.81,0,1,0,52.81,52.81,52.81,52.81,0,0,0-52.81-52.81m0,76.59a23.78,23.78,0,1,1,23.79-23.79,23.77,23.77,0,0,1-23.79,23.79"
            />
            <path className="cls-2" d="M455.83,74.37h-29v46.34a46.48,46.48,0,0,1,29-43v-3.3" />
            <path
              className="cls-4"
              d="M473.21,74.3a46.08,46.08,0,0,0-17.38,3.38v43a17.38,17.38,0,1,1,34.76,0v0A46.33,46.33,0,0,1,505.1,87,46.22,46.22,0,0,0,473.21,74.3"
            />
            <path className="cls-5" d="M455.83,77.67a46.5,46.5,0,0,0-29,43V180h29V77.67" />
            <path
              className="cls-1"
              d="M537,74.3A46.25,46.25,0,0,0,505.11,87a46.35,46.35,0,0,1,14.51,33.68h0a17.38,17.38,0,0,1,34.76,0V180h29V120.71A46.46,46.46,0,0,0,537,74.3"
            />
            <path
              className="cls-6"
              d="M505.1,87a46.35,46.35,0,0,0-14.51,33.68V180h29V120.71A46.3,46.3,0,0,0,505.1,87"
            />
          </svg>
        </div>
      </section>
      
      <section className="container mx-auto font-bold text-center text-white">
        <div className="py-60">
          <h2 className="pb-20 text-5xl">Why Do</h2>
          <h3 className="pb-10 font-extrabold text-7xl">Make Learn Interesting</h3>
          <p className="text-2xl text-gray-100">Interestingな学びを実現する</p>
        </div>
        <div className="pb-60">
          <h2 className="pb-20 text-5xl">What Do</h2>
          <h3 className="pb-10 text-6xl font-extrabold">製造業の人材育成をDXする</h3>
          <p className="text-2xl text-gray-100 leading-10">
            人生100年時代、生涯学び続ける時代。
            <br />
            Froomは「人材育成のデジタル化」を手段に
            <br />
            ハイブリッド型の学びを支援します
          </p>
        </div>
      </section>
      <section className="w-11/12 mb-1 ml-auto font-bold bg-white shadow-xl p-36">
        <h2 className="pb-16 text-4xl">Service</h2>
        <h3 className="pb-20 text-5xl">現場教育を、カンタン動画化</h3>
        <div className="flex flex-wrap justify-between">
          <div className="w-1/2 text-2xl leading-10">
            <p className="pb-10">
              Froomは、未経験者でも簡単に 動画マニュアルを作成できる 現場特化の教育プラットフォームです。
            </p>
            <p>
              タブレット一台で、教育コンテンツの作成・編集・公開まで一気通貫に行い、現場の社員は、スマホから簡単に動画を見ることができます。
            </p>
          </div>
          <div className="w-1/2 pl-14">
            <img className="w-full" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          </div>
        </div>
        <p></p>
      </section>
      <section className="w-11/12 font-bold bg-white shadow-xl p-36">
        <h2 className="pb-16 text-4xl">About us</h2>
        <h3 className="pb-20 text-5xl">未来の教育を今作るために</h3>
        <p className="text-2xl leading-10">
          我々は宇宙人我々は宇宙人我々は宇宙人我々は宇宙人我々は宇宙人 我々は宇宙人我々は宇宙人我々は宇宙人我々は宇宙人
          我々は宇宙人我々は宇宙人我々は宇宙人 我々は宇宙人我々は宇宙人我々は宇宙人 我々は宇宙人我々は宇宙人
        </p>
      </section>
      <section className="container w-10/12 mx-auto my-40">
        <div className="pt-32 pb-24 bg-white shadow-xl px-36">
          <h2 className="pb-16 text-4xl font-bold">News</h2>
          <article className="flex pb-8 text-xl">
            <time className="pr-10">2020/01/27</time>
            <h3 className="flex-grow text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          </article>
          <article className="flex pb-8 text-xl">
            <time className="pr-10">2020/01/27</time>
            <h3 className="flex-grow text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          </article>
          <article className="flex pb-8 text-xl">
            <time className="pr-10">2020/01/27</time>
            <h3 className="flex-grow text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          </article>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="container pt-40 pl-48 pr-24 mx-auto pb-28">
          <h3 className="pb-16 text-4xl font-bold">Contact</h3>
          <div className="flex items-center">
            <div className="w-1/2 pr-14">
              <div className="w-full mb-6">
                <label htmlFor="" className="block px-1 pb-2 font-semibold">
                  会社名
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded-lg outline-none focus:border-orange-light"
                    name="company"
                    placeholder="株式会社Froom"
                  />
                </div>
              </div>
              <div className="w-full mb-6">
                <label htmlFor="" className="block px-1 pb-2 font-semibold">
                  メールアドレス
                </label>
                <div className="flex">
                  <input
                    type="email"
                    className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded-lg outline-none focus:border-orange-light"
                    name="email"
                    placeholder="your.email@froom.co.jp"
                  />
                </div>
              </div>
              <div className="w-full mb-6">
                <label htmlFor="" className="block px-1 pb-2 font-semibold">
                  担当者名
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded-lg outline-none focus:border-orange-light"
                    name="sender"
                    placeholder="フルーム 太郎"
                  />
                </div>
              </div>
              <div className="w-full mb-6">
                <label htmlFor="" className="block px-1 pb-2 font-semibold">
                  問い合わせ内容
                </label>
                <div className="flex">
                  <textarea
                    className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded-lg outline-none focus:border-orange-light"
                    name="content"
                    id=""
                    cols={30}
                    rows={5}
                  ></textarea>
                </div>
                <div className="w-full mt-8 text-center">
                  <button className="py-4 text-xl leading-tight text-center text-white rounded bg-orange-light px-17 md:px-20 md:py-4 md:text-base hover:bg-orabge-dark">
                    送信する
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-14">
              <div className="flex items-center pb-14">
                <div className="pr-8">
                  <svg className="w-6 h-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M27.5 21.1501V24.9001C27.5015 25.2483 27.4301 25.5928 27.2907 25.9118C27.1512 26.2308 26.9467 26.5171 26.6901 26.7525C26.4336 26.9878 26.1308 27.167 25.801 27.2785C25.4712 27.39 25.1218 27.4315 24.775 27.4001C20.9286 26.9822 17.2338 25.6678 13.9875 23.5626C10.9673 21.6435 8.40671 19.0828 6.48754 16.0626C4.37501 12.8016 3.06034 9.08886 2.65004 5.22512C2.6188 4.87946 2.65988 4.53107 2.77066 4.20215C2.88145 3.87323 3.0595 3.57098 3.2935 3.31465C3.52749 3.05831 3.81229 2.85351 4.12978 2.71327C4.44726 2.57304 4.79046 2.50045 5.13754 2.50012H8.88754C9.49417 2.49415 10.0823 2.70897 10.5422 3.10454C11.0022 3.5001 11.3026 4.04943 11.3875 4.65012C11.5458 5.8502 11.8394 7.02853 12.2625 8.16262C12.4307 8.61003 12.4671 9.09627 12.3674 9.56372C12.2677 10.0312 12.0361 10.4603 11.7 10.8001L10.1125 12.3876C11.892 15.5171 14.4831 18.1082 17.6125 19.8876L19.2 18.3001C19.5399 17.964 19.969 17.7324 20.4364 17.6327C20.9039 17.533 21.3901 17.5694 21.8375 17.7376C22.9716 18.1608 24.15 18.4543 25.35 18.6126C25.9573 18.6983 26.5118 19.0041 26.9082 19.472C27.3046 19.9399 27.5153 20.5371 27.5 21.1501Z"
                      stroke="#25282B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <a className="pb-1 text-xl border-b-2 border-gray-300" href="tel:+052-485-8760">
                    052-485-8760
                  </a>
                </div>
              </div>
              <div className="flex items-center pb-14">
                <div className="pr-8">
                  <svg className="w-6 h-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z"
                      stroke="#25282B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.5 7.5L15 16.25L2.5 7.5"
                      stroke="#25282B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <a className="pb-1 text-xl border-b-2 border-gray-300" href="mailto:info@froom.co.jp">
                    info@froom.co.jp
                  </a>
                </div>
              </div>
              <div className="flex ">
                <div className="pt-2 pr-8">
                  <svg className="w-6 h-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51632 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51632 26.25 12.5Z"
                      stroke="#25282B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z"
                      stroke="#25282B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    className="text-lg leading-9"
                    href="https://goo.gl/maps/rVGtWztXw5MyrxhR8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    〒450-6627
                    <br />
                    愛知県名古屋市中村区名駅１丁目１−3
                    <br />
                    JRゲートタワー 27階 2702
                    <br />
                    名古屋大学 オープン・イノベーション拠点
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
