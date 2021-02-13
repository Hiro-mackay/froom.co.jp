import React from 'react';

export const Form = () => {
  return (
    <div className="w-full">
      <div className="w-full mb-6">
        <label htmlFor="" className="block px-1 pb-2 font-semibold">
          会社名
        </label>
        <div className="flex">
          <input
            type="text"
            className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded outline-none focus:border-orange-light"
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
            className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded outline-none focus:border-orange-light"
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
            className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded outline-none focus:border-orange-light"
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
            className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded outline-none focus:border-orange-light"
            name="content"
            id=""
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <div className="w-full mt-8 text-center">
          <button className="px-8 py-4 text-base leading-tight text-center text-white rounded transition duration-100 bg-orange-light px-17 md:px-20 md:py-4 hover:bg-orange-dark">
            送信する
          </button>
        </div>
      </div>
    </div>
  );
};
