import { Dispatch, SetStateAction, useState } from 'react';
import { replaceLinFeedCodoToHtmlBr } from '../../../lib/replaceLinFeedCodoToHtmlBr';
import { PlanNameType, PlanType } from './plans';
import Link from 'next/link';

type PropsType = {
  plan: PlanType;
  setFocusPrice: Dispatch<SetStateAction<PlanNameType>>;
};

export const PlanCard = ({ plan, setFocusPrice }: PropsType) => {
  const [scheduleIndex, setScheduleIndex] = useState(0);
  return (
    <div className="flex flex-col py-16 bg-white shadow-lg rounded-sm">
      <div className="pb-16 px-10">
        <h3 className="pb-10 text-xl md:text-2xl">{plan.title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{replaceLinFeedCodoToHtmlBr(plan.description)}</p>
      </div>

      <div>
        <h4 className="mb-6 md:pb-16 md:text-xl  px-10">導入スケジュールイメージ</h4>

        <div className="w-full py-6">
          <div className="flex">
            <div className="w-1/4">
              <div className="relative mb-2">
                <div className="w-8 md:w-12 h-8 md:h-12 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-white w-full">
                    <svg className="w-1/2 mx-auto stroke-current stroke-2" fill="none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4M3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="text-xs text-center text-gray-600 md:text-base">お問い合わせ</div>
            </div>

            <div className="w-1/4">
              <div className="relative mb-2">
                <div className="w-2/5 absolute flex align-center items-center align-middle content-center" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div className="w-full bg-green-300 py-1 rounded"></div>
                  </div>
                </div>

                <div
                  className="w-8 md:w-12 h-8 md:h-12 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center cursor-pointer"
                  onClick={() => {
                    setScheduleIndex(0);
                  }}
                >
                  <span className="text-center text-white w-full">
                    <svg className="w-1/2 mx-auto stroke-current stroke-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H15V19L11 15H7C6.73733 15.0003 6.47719 14.9486 6.23453 14.8481C5.99187 14.7475 5.77148 14.6 5.586 14.414M5.586 14.414L9 11H13C13.5304 11 14.0391 10.7893 14.4142 10.4142C14.7893 10.0391 15 9.53043 15 9V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V9C1 9.53043 1.21071 10.0391 1.58579 10.4142C1.96086 10.7893 2.46957 11 3 11H5V15L5.586 14.414Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M4 6H4.01M8 6H8.01M12 6H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="text-xs text-center text-gray-600 md:text-base">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setScheduleIndex(0);
                  }}
                >
                  1ヶ月目
                  <br />
                  打ち合わせ
                </span>
              </div>
            </div>

            <div className="w-1/4">
              <div className="relative mb-2">
                <div className="w-2/5 absolute flex align-center items-center align-middle content-center " style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div className={` bg-green-300 py-1 rounded  ${scheduleIndex > 0 ? 'w-full' : 'w-1/2'}`}></div>
                  </div>
                </div>

                <div
                  className={`w-8 md:w-12 h-8 md:h-12 mx-auto  rounded-full text-lg text-white flex items-center cursor-pointer ${scheduleIndex - 1 >= 0 ? 'bg-green-500' : 'bg-gray-100'}`}
                  onClick={() => {
                    setScheduleIndex(1);
                  }}
                >
                  <span className="text-center text-gray-600 w-full">
                    <svg
                      className={`w-1/2 mx-auto  stroke-current stroke-2 ${scheduleIndex - 1 >= 0 ? 'text-white' : 'text-gray-500'}`}
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H3.93C4.25918 4.00005 4.58329 3.91884 4.87357 3.76359C5.16384 3.60834 5.4113 3.38383 5.594 3.11L6.406 1.89C6.5887 1.61617 6.83616 1.39166 7.12643 1.23641C7.41671 1.08116 7.74082 0.999951 8.07 1H11.93C12.2592 0.999951 12.5833 1.08116 12.8736 1.23641C13.1638 1.39166 13.4113 1.61617 13.594 1.89L14.406 3.11C14.5887 3.38383 14.8362 3.60834 15.1264 3.76359C15.4167 3.91884 15.7408 4.00005 16.07 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V6Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10V10Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="text-xs text-center text-gray-600 md:text-base">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setScheduleIndex(1);
                  }}
                >
                  2ヶ月目
                  <br />
                  撮影
                </span>
              </div>
            </div>

            <div className="w-1/4">
              <div className="relative mb-2">
                <div className="w-2/5 absolute flex align-center items-center align-middle content-center" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div className={`${scheduleIndex - 1 >= 0 ? (scheduleIndex - 2 >= 0 ? 'w-full' : 'w-1/2') : 'w-0'}  bg-green-300 py-1 rounded`}></div>
                  </div>
                </div>

                <div
                  className={`w-8 md:w-12 h-8 md:h-12 mx-auto rounded-full text-lg text-white flex items-center cursor-pointer ${scheduleIndex - 2 >= 0 ? 'bg-green-500' : 'bg-gray-100'}`}
                  onClick={() => {
                    setScheduleIndex(2);
                  }}
                >
                  <span className={`text-center w-full  ${scheduleIndex - 2 >= 0 ? 'text-white' : 'text-gray-500'} `}>
                    <svg className="w-1/2 mx-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="text-xs text-center text-gray-600 md:text-base">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setScheduleIndex(2);
                  }}
                >
                  3ヶ月目
                  <br />
                  動画の完成
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 md:px-20 relative">
          {plan.schedules[scheduleIndex].map((item, i) => {
            return (
              <div className="pt-10 md:pt-16" key={i}>
                <h5 className="pb-5 text-lg">{item.title}</h5>
                <p className="text-gray-600 text-sm md:text-base">{replaceLinFeedCodoToHtmlBr(item.description)} </p>
              </div>
            );
          })}

          <div
            className="absolute cursor-pointer h-8 lg:h-14 w-8 lg:w-14 -left-4"
            style={{
              top: '50%',
            }}
            onClick={() => {
              if (scheduleIndex > 0) {
                setScheduleIndex((index) => index - 1);
              }
            }}
          >
            <div className="w-full h-full bg-white rounded-full absolute top-0 left-0 z-10"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-full h-full absolute top-0 left-0 z-20 ${scheduleIndex > 0 ? 'text-green-500' : 'text-gray-300'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="absolute cursor-pointer h-8 lg:h-14 w-8 lg:w-14 -right-4"
            style={{
              top: '50%',
            }}
            onClick={() => {
              if (scheduleIndex < 2) {
                setScheduleIndex((index) => index + 1);
              }
            }}
          >
            <div className="w-full h-full bg-white rounded-full absolute top-0 left-0 z-10"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-full h-full absolute top-0 left-0 z-20 ${scheduleIndex < 2 ? 'text-green-500' : 'text-gray-300'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-24 px-10">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-32 w-full max-w-4xl">
          <Link href={plan.link} passHref>
            <button className="w-full text-sx md:text-lg text-center text-white rounded-full transition duration-150 py-4 bg-yellow-500 hover:bg-yellow-600">プランについて相談する</button>
          </Link>
          <Link href="#price" passHref>
            <button
              className="w-full text-sx md:text-lg text-center text-white rounded-full transition duration-150 py-4 bg-blue-500 hover:bg-blue-600"
              onClick={() => {
                setFocusPrice(plan.type);
              }}
            >
              プランの金額を確認する
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
