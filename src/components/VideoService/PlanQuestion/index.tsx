import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import { VideoServiceLoading } from '..';
import { ContentOrientedIcon } from '../Asset/ContentOrientedIcon';
import { FewVideosIcon } from '../Asset/FewVideosIcon';
import { HightQualityIcon } from '../Asset/HightQualityIcon';
import { LotsOfVideosIcon } from '../Asset/LotsOfVideosIcon';
import { ProfessitionRecordingIcon } from '../Asset/ProfessitionRecordingIcon';
import { SelfRecordingIcon } from '../Asset/SelfRecordingIcon';

type PropsType = { loading: boolean; selectedPlan: (recordDifficulty: boolean, quantity: boolean, highQuality: boolean) => void };

export const VideoServicePlanQuestion = ({ loading, selectedPlan }: PropsType) => {
  const [recordDifficulty, setRecordDifficulty] = useState<boolean>();
  const [quantity, setQuantity] = useState<boolean>();
  const [highQuality, setHighQuality] = useState<boolean>();

  const [errorMessage, setErrorMessage] = useState<string>();

  const [questionIndex, setQuestionIndex] = useState(0);

  /**
   * questionsはLeftがtrueの回答となるように配置。
   */
  const Question = [
    {
      title: '動画の撮影は？',
      questions: {
        left: { text: '自分たちだけでは不安だ。', icon: <ProfessitionRecordingIcon /> },
        right: { text: '自分たちでもできそうだ。', icon: <SelfRecordingIcon /> },
      },
      answer: recordDifficulty,
      disptch: setRecordDifficulty,
      next: setQuantity,
      btnText: '次の質問へ',
    },
    {
      title: '作りたい動画の本数は？',
      questions: {
        left: { text: '10本以上である。', icon: <LotsOfVideosIcon /> },
        right: { text: '1〜数本程度である。', icon: <FewVideosIcon /> },
      },
      answer: quantity,
      disptch: setQuantity,
      next: setHighQuality,
      btnText: '次の質問へ',
    },
    {
      title: '動画のイメージは？',
      questions: {
        left: { text: '動画マニュアルや研修動画など、クオリティよりも、内容が大事である。', icon: <ContentOrientedIcon /> },
        right: { text: '会社紹介やプロモーション動画など、クオリティの高さが大事である。', icon: <HightQualityIcon /> },
      },
      answer: highQuality,
      disptch: setHighQuality,
      next: undefined,
      btnText: '最適なプランを見つける',
    },
  ];

  const dispatcher = useRef<Dispatch<SetStateAction<boolean>>>(setRecordDifficulty);

  const setDispatcher = useCallback((dispatch: Dispatch<SetStateAction<boolean>>) => {
    dispatcher.current = dispatch;
  }, []);

  const setQuestion = useCallback(
    (dispatch: Dispatch<SetStateAction<boolean>>, index: number) => {
      if (errorMessage) {
        setErrorMessage(undefined);
      }
      setDispatcher(dispatch);
      setQuestionIndex(index);
    },
    [errorMessage]
  );

  const submit = useCallback(() => {
    if (recordDifficulty === undefined || quantity === undefined || highQuality === undefined) {
      setErrorMessage('選択していない質問項目があります。');
      return;
    }

    selectedPlan(recordDifficulty, quantity, highQuality);
  }, [recordDifficulty, quantity, highQuality]);

  return loading ? (
    <VideoServiceLoading />
  ) : (
    <div className="my-20 grid grid-cols-1 md:grid-cols-4">
      <div className=" col-span-1 hidden md:flex items-center">
        <div className="space-y-20">
          <div
            className="flex items-center space-x-1 lg:space-x-2 w-max cursor-pointer"
            onClick={() => {
              setQuestion(Question[0].disptch, 0);
            }}
          >
            <div className={`w-4 lg:w-6 h-4 lg:h-6 rounded-full border border-green-500 ${recordDifficulty !== undefined && 'bg-green-500'}`}></div>
            <p className="text-sm lg:text-lg">動画の撮影は？</p>
          </div>
          <div
            className="flex items-center space-x-1 lg:space-x-2 w-max cursor-pointer"
            onClick={() => {
              setQuestion(Question[1].disptch, 1);
            }}
          >
            <div className={`w-4 lg:w-6 h-4 lg:h-6 rounded-full border border-green-500 ${quantity !== undefined && 'bg-green-500'}`}></div>
            <p className="text-sm lg:text-lg">作りたい動画の本数は？</p>
          </div>
          <div
            className="flex items-center space-x-1 lg:space-x-2 w-max cursor-pointer"
            onClick={() => {
              setQuestion(Question[2].disptch, 2);
            }}
          >
            <div className={`w-4 lg:w-6 h-4 lg:h-6 rounded-full border border-green-500 ${highQuality !== undefined && 'bg-green-500'}`}></div>
            <p className="text-sm lg:text-lg">動画のイメージは？</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 text-center">
        <h3 className="text-lg  md:text-xl lg:text-2xl pb-12">{Question[questionIndex].title}</h3>

        <div className="grid grid-cols-2 gap-4 lg:gap-20">
          <div className="flex flex-col items-center">
            <div className="w-36 lg:w-48 h-36 lg:h-48 mx-auto bg-gray-100 rounded-full">{Question[questionIndex].questions.left.icon}</div>
            <p className="lg:text-xl py-6">{Question[questionIndex].questions.left.text}</p>
            <div
              className="w-8 h-8 mt-auto rounded-full border border-gray-700 cursor-pointer flex justify-center items-center"
              onClick={() => {
                dispatcher.current(true);
              }}
            >
              {Question[questionIndex].answer === true && <div className="w-4/5	h-4/5 rounded-full bg-green-500"></div>}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 lg:w-48 h-36 lg:h-48 mx-auto bg-gray-100 rounded-full">{Question[questionIndex].questions.right.icon}</div>
            <p className="lg:text-xl py-6">{Question[questionIndex].questions.right.text}</p>
            <div
              className="w-8 h-8 mt-auto rounded-full border border-gray-700 cursor-pointer flex justify-center items-center"
              onClick={() => {
                dispatcher.current(false);
              }}
            >
              {Question[questionIndex].answer === false && <div className="w-4/5	h-4/5 rounded-full bg-green-500"></div>}
            </div>
          </div>
        </div>

        <div className="mt-10">
          {errorMessage && (
            <div className="pb-5">
              <p className=" text-red-500">{errorMessage}</p>
            </div>
          )}
          <button
            className={`text-base text-center text-white inline-block rounded-md transition duration-150 py-2 px-4 
            ${Question[questionIndex].answer === undefined ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-700'}
          
          `}
            disabled={Question[questionIndex].answer === undefined}
            onClick={() => {
              const nextIndex = questionIndex + 1;

              if (nextIndex < 3) {
                setQuestion(Question[questionIndex].next, nextIndex);
              } else {
                submit();
              }
            }}
          >
            {Question[questionIndex].btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
