import { CVButton } from '../components/Button';
import { Divide } from '../components/Divide';
import { Head } from '../components/Head';
import FastTime from '../components/svgs/fastTime';
import Paperclip from '../components/svgs/paperclip';
import Learning from '../components/svgs/learning';
import Footer from '../components/Footer';
import Link from 'next/link';
import FroomSVG from '../components/svgs/froom';
import styles from '../styles/header.module.css';
import { useCallback, useState } from 'react';
import NextImg from 'next/image';

const Page = () => {
  const [videoModal, setVideoModal] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement>(null);

  const onVideoRef = useCallback((video: HTMLVideoElement) => {
    setVideoRef(video);
  }, []);

  const offVideoModal = useCallback(() => {
    setVideoModal(false);
    if (videoRef) {
      videoRef.pause();
    }
  }, [videoRef]);

  const onVideoModal = useCallback(() => {
    setVideoModal(true);
  }, []);

  return (
    <div className="relative h-full">
      <Head titlePre="Service" />

      <div
        className="absolute hidden xl:block"
        style={{
          zIndex: -1,
          top: 500,
          right: 0,
          width: 1580,
          height: 2600,
          clipPath: 'polygon(0 70%, 100% 0, 100% 25%, 0% 100%)',
          background: 'linear-gradient(-90deg, rgba(52,152,219,0.06) 0%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div
        className="absolute hidden xl:block"
        style={{
          zIndex: -1,
          bottom: 720,
          right: 0,
          width: 1580,
          height: 2600,
          clipPath: 'polygon(0 0, 100% 70%, 100% 100%, 0 30%)',
          background: 'linear-gradient(-90deg, rgba(52,152,219,0.06) 0%, rgba(255,255,255,0) 100%)',
        }}
      />

      <header className="fixed z-10 flex flex-wrap items-center justify-between w-full box-border md:pl-5 lg:pl-10 md:pr-10 lg:pr-16 xl:pr-28 md:py-2 lg:py-3">
        <div className="flex flex-wrap items-center justify-between w-full box-border">
          <div className="flex items-center flex-shrink-0 mr-6 pl-6 py-3">
            <Link href="/">
              <a>
                <FroomSVG className={`w-20 ${styles.logo}`} />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <section className="service-mv md:h-screen">
        <div className="w-full bg-gradient-to-l to-froomBlue from-froomNavy absolute inset-0 service-mv-clip service-mv" style={{ maxWidth: 2480 }}></div>
        <div className="h-full relative container mx-auto px-5 box-border">
          <div className="pt-20 lg:pt-0 service-mv-copy text-white font-bold text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-normal lg:leading-normal xl:leading-normal">
              現場教育を、
              <br />
              カンタン動画化
            </h1>
            <p className="pt-5 pl-1 text-sm lg:text-lg lg:max-w-xl">
              Froomは、簡単に動画マニュアルを作成できる<span className="inline-block">動画作成プラットフォームです。</span> <br />
              新入社員向けの教育動画や、複雑な工程を動画化する<span className="inline-block">動画編集ツールを提供し、</span>作成した後の動画は
              <span className="inline-block">社内マニュアルとして管理することが可能です。</span>
            </p>
            <p className="pt-5 lg:pt-10">
              <a href="https://forms.gle/LR6CBy3JVEfRwb2D7">
                <CVButton>問い合わせる</CVButton>
              </a>
            </p>
          </div>
          <div className="md:w-2/3 lg:w-1/2 max-w-4xl mx-auto lg:mx-0 pt-10 pb-20 lg:pb-0 lg:pt-0 lg:absolute service-mv-image right-5">
            <NextImg className="w-full" src="/images/product-mock-image.png" width={1980} height={1427} alt="Froom編集画面" />
          </div>
        </div>
      </section>
      <section className="container mx-auto relative py-20 md:py-52 px-5 font-bold">
        <div className="pb-10">
          <h2 className="text-xl lg:text-4xl pb-4 relative">Froomが解決する課題</h2>
          <Divide />
          <p className="text-sm lg:text-lg text-gray-600 pt-6" style={{ lineHeight: 1.7 }}>
            現場教育の様々な課題を解決し、新入社員を最速で一人前の技術者として働けるようサポートします。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-5 pt-5 lg:pt-20 text-center text-xl">
          <div>
            <div className="w-36 h-36 lg:w-44 lg:h-44 bg-froomBlue rounded-full relative mx-auto">
              <FastTime className="w-16 h-16 lg:w-24 lg:h-24 absolute inset-center" style={{ fill: 'white' }} />
            </div>
            <h3 className="pt-6">現場教育に時間をかけられない</h3>
          </div>
          <div>
            <div className="w-36 h-36 lg:w-44 lg:h-44 bg-froomBlue rounded-full relative mx-auto">
              <Learning className="w-16 h-16 lg:w-24 lg:h-24 absolute inset-center" style={{ fill: 'white' }} />
            </div>
            <h3 className="pt-6">熟練技術の継承ができない</h3>
          </div>
          <div className="md:col-span-2 xl:col-span-1 ">
            <div className="w-36 h-36 lg:w-44 lg:h-44 bg-froomBlue rounded-full relative mx-auto">
              <Paperclip className="w-16 h-16 lg:w-24 lg:h-24 absolute inset-center" style={{ fill: 'white' }} />
            </div>
            <h3 className="pt-6">マニュアルを作るのに時間がかかる</h3>
          </div>
        </div>
      </section>
      <section className="container mx-auto pb-20 md:pb-52 px-5 font-bold">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-20 items-center">
          <div className="col-span-2 lg:order-2">
            <h2 className="text-xl lg:text-3xl pb-4 relative">
              未経験でも簡単に
              <br />
              動画マニュアルを作成
            </h2>
            <Divide />
            <p className="text-sm lg:text-lg text-gray-600 pt-8" style={{ lineHeight: 1.7 }}>
              動画を作ったことがない人でも簡単に動画マニュアルの作成が可能です。
              <br />
              新人技術者は熟練工の技を見慣れた「動画」で手軽に学び、技術の理解を深めることができます。
            </p>
            <p className="pt-8">
              <a href="https://forms.gle/LR6CBy3JVEfRwb2D7">
                <CVButton>問い合わせる</CVButton>
              </a>
            </p>
          </div>
          <div className="col-span-3 mt-14 lg:mt-0 lg:order-1 relative">
            <NextImg className="w-full" src="/images/product-mock-image.png" width={1980} height={1427} alt="Froom編集画面" />
            <div className="w-full h-full absolute inset-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 40 }}></div>
            <div className="w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 bg-froomNavy transition duration-150 rounded-full cursor-pointer absolute inset-center hover:bg-orange" onClick={onVideoModal}>
              <div className="w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 absolute inset-center bg-white" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 50%)', left: '55%' }}></div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 md:pb-52 px-5 font-bold">
        <div className="pb-10">
          <h2 className="text-xl lg:text-3xl pb-4 relative">マニュアル作成だけじゃない様々なメリット</h2>
          <Divide />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 pt-20 text-center">
          <div className="w-full">
            <NextImg className="h-52 mx-auto" src="/images/service/undraw_collecting_fjjl.svg" width={500} height={500} alt="作った動画は管理ツールで一元管理" />
            <h3 className="text-xl pt-10">作った動画は管理ツールで一元管理</h3>
            <p className="text-sm lg:text-base inline-block pt-4 text-gray-600">
              作成した動画はすぐにアップロード可能。
              <br />
              プラットフォーム上で作成からアップロード、
              <span className="inline-block">管理まで一気通貫で行えます。</span>
            </p>
          </div>
          <div className="w-full">
            <NextImg className="h-52 mx-auto" src="/images/service/undraw_my_documents_ym8x.svg" width={500} height={500} alt=" 教育用動画が、会社のマニュアルに" />
            <h3 className="text-xl pt-10 text-center">
              教育用動画が、<span className="inline-block">会社のマニュアルに</span>
            </h3>
            <p className="text-sm lg:text-base inline-block pt-4 text-gray-600">
              教育用に作成した動画は、
              <span className="inline-block">マニュアル動画として社内に蓄積されていきます。</span>
              <br />
              <span className="inline-block">新人技術者のために作った動画が</span>
              <span className="inline-block">社内のナレッジとしてもご活用できます。</span>
            </p>
          </div>
          <div className="w-full">
            <NextImg className="h-52 mx-auto" src="/images/service/undraw_stepping_up_g6oo.svg" width={500} height={500} alt="新人技術者の技術向上" />
            <h3 className="text-xl pt-10 text-center">新人技術者の技術向上</h3>
            <p className="text-sm lg:text-base inline-block pt-4 text-gray-600">
              新人技術者は、<span className="inline-block">熟練工の技術を動画で</span>
              <br />
              「いつでも」「何回でも」学習できます。
            </p>
          </div>
          <div className="w-full">
            <NextImg className="h-52 mx-auto" src="/images/service/undraw_Online_calendar_re_wk3t.svg" width={500} height={500} alt="新人の学習管理が可能" />
            <h3 className="text-xl pt-10 text-center">新人の学習管理が可能</h3>
            <p className="text-sm lg:text-base inline-block pt-4 text-gray-600">
              新人技術者が何を学習しているのか、
              <br />
              何を学習していないかを管理して
              <br />
              新人技術者のサポートをしやすい環境を整えます。
            </p>
          </div>
        </div>
      </section>
      <section className="relative text-center lg:text-left ">
        <div className="hidden lg:block absolute bg-right bg-no-repeat right-0 w-full h-full -z-10" style={{ backgroundImage: 'url(images/service-contact.jpg)', backgroundSize: '50%' }}></div>
        <div className="hidden lg:block absolute right-0 w-1/2 h-full -z-10" style={{ background: 'linear-gradient(90deg, rgba(24,62,124,1) 5%, rgba(24,62,124,0.6) 100%)' }}></div>
        <div className="bg-froomNavy absolute w-full lg:w-1/2 h-full -z-10"></div>
        <div className="container px-8 lg:px-0 py-40 mx-auto text-white font-bold z-10">
          <h2 className="text-2xl ">お気軽にお問い合わせください！</h2>
          <p className="text-sm lg:text-base pt-10 leading-loose">
            Froomの導入相談はもちろん、社内マニュアルのDXや社内研修のご相談など
            <br />
            各社に合わせた提案をさせていただきます。
          </p>
          <p>下記からフォームからお気軽にご相談ください。</p>
          <p className="pt-10">
            <a href="https://forms.gle/LR6CBy3JVEfRwb2D7">
              <CVButton>問い合わせる</CVButton>
            </a>
          </p>
        </div>
      </section>
      <div className="pt-10">
        <Footer />
      </div>
      <div className={`fixed inset-0 overflow-y-auto ease-out duration-300 ${videoModal ? 'opacity-100 z-10 ' : 'opacity-0 -z-10'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={offVideoModal}></div>
        <div className="transform transition-all px-2 box-border w-full md:w-4/5 xl:w-3/5 sm:w-full absolute inset-center">
          <video ref={onVideoRef} src="videos/FinalVideo_1619770843.084503.MOV" controls muted></video>
          <div
            className="flex justify-center items-center w-12 h-12 bg-froomNavy text-white absolute right-2 -top-12 transition-opacity duration-100 cursor-pointer hover:opacity-80"
            onClick={offVideoModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
