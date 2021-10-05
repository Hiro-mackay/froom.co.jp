import { replaceLinFeedCodoToHtmlBr } from '../../../lib/replaceLinFeedCodoToHtmlBr';
import { PlanType } from './plans';
import Link from 'next/link';

type PropsType = { plan: PlanType; href: string };
export const PlanSimpleCard = ({ plan, href }: PropsType) => {
  return (
    <div className="flex flex-col py-16 px-10 bg-white shadow-lg rounded-sm">
      <h3 className="text-xl lg:text-2xl pb-10 text-center">{replaceLinFeedCodoToHtmlBr(plan.title)}</h3>
      <p className="text-sm md:text-base text-gray-600 pb-10">{replaceLinFeedCodoToHtmlBr(plan.description)}</p>
      <div className="text-center mt-auto">
        <Link href={href} passHref>
          <button className="text-base inline-block text-center text-white rounded-full transition duration-150 px-12 py-2 bg-blue-600 hover:bg-blue-800">プランを詳しく見る</button>
        </Link>
      </div>
    </div>
  );
};
