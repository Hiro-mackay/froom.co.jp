import { Head } from '../components/Head';
import Link from 'next/link';
import FroomSVG from '../components/svgs/froom';
import styles from '../styles/header.module.css';
import Footer from '../components/Footer';
import { useCallback, useEffect, useState } from 'react';
import { VideoServicePlanQuestion, VideoServicePlanRecommend } from '../components/VideoService';
import { PriceBox } from '../components/VideoService/Price';
import { PricePlansGroupType, PricePlansNameType } from '../components/VideoService/Price/prices';
import servideStyles from '../styles/videoservice.module.css';
import NextImg from 'next/image';
import { ProfessitionalPlan } from '../components/VideoService/PlanRecommend/plans';
import { SmoothScroll } from '../components/SmoothScroll';

const Page = () => {
  const [recommendPlanIndex, setRecommendPlanIndex] = useState<number>();
  const [recommendPlanLoading, setRecommendPlanLoading] = useState(false);
  const [showPriceGroup, setShowPriceGroup] = useState<PricePlansGroupType>('basic');
  const [focusPrice, setFocusPrice] = useState<PricePlansNameType>();

  const setRecommendPlanSeeked = useCallback((plan: number) => {
    setRecommendPlanLoading(true);
    setTimeout(() => {
      setRecommendPlanIndex(plan);
      setRecommendPlanLoading(false);
    }, 1000);
  }, []);

  const selectedRecommendPlan = useCallback((recordDifficulty: boolean, quantity: boolean, highQuality: boolean) => {
    if (recordDifficulty && highQuality) {
      setRecommendPlanSeeked(0);
      return;
    }

    if (!recordDifficulty && highQuality) {
      setRecommendPlanSeeked(1);
      return;
    }

    setRecommendPlanSeeked(2);
  }, []);

  const onReset = useCallback(() => {
    setRecommendPlanIndex(undefined);
  }, []);

  useEffect(() => {
    if (ProfessitionalPlan.includes(focusPrice)) {
      setShowPriceGroup('professional');
    } else {
      setShowPriceGroup('basic');
    }
  }, [focusPrice]);

  return (
    <div className="relative h-full overflow-hidden">
      <Head titlePre="動画作成支援サービス" />
      <SmoothScroll />
      <header className="fixed z-10 flex flex-wrap items-center justify-between w-full box-border md:pl-5 lg:pl-10 md:pr-10 lg:pr-16 xl:pr-28 md:py-2 lg:py-3">
        <div className="flex flex-wrap items-center justify-between w-full box-border">
          <div className="flex items-center flex-shrink-0 mr-6 pl-6 py-3">
            <Link href="/">
              <a>
                <FroomSVG className={`w-20 ${styles.logo}`} />
              </a>
            </Link>
          </div>
        </div>
      </header>

      <section className={`${servideStyles.mv} relative  md:h-screen`}>
        <div className={servideStyles['mv-img']} />

        <div className="h-full relative container mx-auto  box-border">
          <div className={`${servideStyles['mv-copy']} pt-32 lg:pt-0 text-white font-bold text-center lg:text-left z-20`}>
            <h1 className="text-xl md:text-4xl xl:text-5xl leading-normal lg:leading-normal xl:leading-normal">
              動画をビジネスで活用したい企業の
              <br />
              “どうしたらいいかわからない”
              <br />
              を解消する
            </h1>
            <p className="mt-8 md:mt-10 pl-1 text-sm lg:text-lg lg:max-w-xl">
              私たちはあなたの企業に最適な動画作成プランを
              <br />
              お届けします。
            </p>
            <div className="grid grid-cols-2 px-5 md:px-0 gap-4 md:gap-8 max-w-lg mt-10 mx-auto lg:mx-0">
              <Link href="#question" passHref>
                <button className="text-sm md:text-base text-center text-white rounded-full transition duration-150 py-2 bg-yellow-500 hover:bg-yellow-600">最適なプランを探す</button>
              </Link>
              <Link href="https://forms.gle/gZnA2d1WFR2oY7kx9" passHref>
                <button className="text-sm md:text-base text-center text-white rounded-full transition duration-150 py-2 bg-green-500 hover:bg-green-600">無料で相談してみる</button>
              </Link>
            </div>
          </div>
          <div className={servideStyles['mv-item-img']}>
            <NextImg priority={true} className="w-full" src="/images/video_creation/video-creation-mv-item.svg" width={2018} height={1284} />
          </div>
        </div>
      </section>

      <section className="container mx-auto relative py-20 md:py-28 px-5 font-bold">
        <div className="pb-20 text-center">
          <h2 className="text-xl lg:text-4xl pb-4">最適な動画プランを提供します！</h2>
          <p className="text-sm lg:text-lg text-gray-600 pt-6" style={{ lineHeight: 1.7 }}>
            撮影の難しさ、作成する動画のクオリティ、作成する動画の本数などによって、最適な動画作成のプランは異なります。
            <br />
            私たちは、貴社の状況をヒアリングし、最適なプランを提供します。
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-24">
          <div className="flex-grow">
            <NextImg className="w-full" src="/images/video_creation/service-1.svg" width={720} height={720} />
          </div>
          <div className="flex-grow-0">
            <svg className="text-green-500 w-16 md:w-24 transform rotate-90	md:rotate-0" viewBox="0 0 139 143" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect y="52" width="100" height="40" />
              <path d="M139 71.5L72.25 133.421L72.25 9.57919L139 71.5Z" />
            </svg>
          </div>
          <div className="flex-grow">
            <NextImg className="w-full" src="/images/video_creation/service-2.svg" width={720} height={720} />
          </div>
        </div>
      </section>

      <section id="question" className="relative py-20 md:py-28 font-bold">
        <div className="container mx-auto px-5 ">
          <div className="md:pb-20 text-center">
            <h2 className="text-xl lg:text-4xl pb-4">貴社に最適なプランを選ぶのをお手伝いします。</h2>
            <p className="text-sm lg:text-lg text-gray-600 pt-6" style={{ lineHeight: 1.7 }}>
              所要時間１分以内
              <br />
              簡単な質問にお答えしていただくだけで、貴社に最適な動画作成プランを提案させて頂きます。
            </p>
          </div>
          {recommendPlanIndex === undefined && <VideoServicePlanQuestion selectedPlan={selectedRecommendPlan} loading={recommendPlanLoading} />}
        </div>

        {recommendPlanIndex !== undefined && <VideoServicePlanRecommend planIndex={recommendPlanIndex} onReset={onReset} setFocusPrice={setFocusPrice} />}
      </section>

      <section className="container mx-auto relative py-20 md:py-28 px-5 font-bold">
        <div className="md:pb-10 text-center">
          <h2 className="text-xl lg:text-4xl pb-4">導入イメージ</h2>
        </div>

        <div className="py-20 grid  md:grid-cols-2 gap-x-10 gap-y-20">
          <div className="flex gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-yellow-100 flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="building"
                  className="w-10 h-10 text-yellow-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                  ></path>
                </svg>
              </div>
              <h3 className="pt-2">A社</h3>
            </div>
            <div>
              <p className="text-sm pb-2 text-green-500">全部お任せプラン</p>
              <p>
                撮影から編集まで全部お任せしました。
                <br />
                ミーティングで要望を伝えるだけでよく忙しい弊社に最適でした。
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-pink-100 flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="building"
                  className="w-10 h-10 text-pink-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                  ></path>
                </svg>
              </div>
              <h3 className="pt-2">B社</h3>
            </div>
            <div>
              <p className="text-sm pb-2 text-green-500">プロの撮影＋カンタン動画編集ツール導入プラン</p>
              <p>
                難しい撮影だけプロに依頼。
                <br />
                編集はカンタンに動画が作成できるツールを利用して自社で内製化しました。
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="building"
                  className="w-10 h-10 text-indigo-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                  ></path>
                </svg>
              </div>
              <h3 className="pt-2">C社</h3>
            </div>
            <div>
              <p className="text-sm pb-2 text-green-500">動画編集人材の育成プラン</p>
              <p>
                ハイクオリティな動画を数多く制作したかったので、動画の編集ができる人材を育成することにしました。
                <br />
                プロの方が丁寧に教えてくだいました。
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="building"
                  className="w-10 h-10 text-blue-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                  ></path>
                </svg>
              </div>
              <h3 className="pt-2">D社</h3>
            </div>
            <div>
              <p className="text-sm pb-2 text-green-500">カンタン動画編集ツール導入プラン</p>
              <p>最初に撮影だけワンポイントで アドバイスををいただき、その後は自社で動画作成を行いました。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="container mx-auto relative py-20 md:py-28 px-5 font-bold">
        <div className="pb-10 text-center">
          <h2 className="text-xl lg:text-4xl pb-4">料金プラン</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-20 lg:gap-32 max-w-2xl mt-5 mx-auto">
          <button
            className={`text-xs md:text-base text-center border border-green-500 rounded-full transition duration-150 py-2 focus:outline-none ${
              showPriceGroup === 'basic' ? 'bg-green-500 text-white' : 'bg-white text-green-500'
            } `}
            onClick={() => {
              setShowPriceGroup('basic');
            }}
          >
            自社のみで動画作成
          </button>
          <button
            className={`text-xs md:text-base text-center border border-green-500 rounded-full transition duration-150 py-2 focus:outline-none ${
              showPriceGroup === 'professional' ? 'bg-green-500 text-white' : 'bg-white text-green-500'
            } `}
            onClick={() => {
              setShowPriceGroup('professional');
            }}
          >
            プロの力で動画作成
          </button>
        </div>

        <PriceBox group={showPriceGroup} focusType={focusPrice} />
      </section>

      <section className="py-20 md:py-28 px-5 font-bold  text-white text-center" style={{ background: 'linear-gradient(90deg, rgba(28,104,182,1) 0%, rgba(16,185,129,1) 100%)' }}>
        <div className="container mx-auto ">
          <h3 className="text-3xl">動画を活用して、ビジネスを加速させましょう！</h3>
          <p className="py-10">ご不明な点は、お気軽にお問い合わせください。</p>

          <Link href="https://forms.gle/gZnA2d1WFR2oY7kx9" passHref>
            <button className="text-base text-center text-white rounded-full transition duration-150 py-3 w-full max-w-sm bg-yellow-500 hover:bg-yellow-600">お問い合わせはこちらから</button>
          </Link>
        </div>
      </section>

      <section className="pt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Page;
