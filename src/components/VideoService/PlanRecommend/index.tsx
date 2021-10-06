import { useMemo, Dispatch, SetStateAction } from 'react';
import { PlanCard } from './PlanCard';
import { PlanNameMap, PlanNameType, RecommendPlans } from './plans';
import { PlanSimpleCard } from './PlanSimpleCard';
import Link from 'next/link';

type PropsType = {
  planIndex: number;
  onReset: () => void;
  setFocusPrice: Dispatch<SetStateAction<PlanNameType>>;
};

export const VideoServicePlanRecommend = ({ planIndex, onReset, setFocusPrice }: PropsType) => {
  const plan = useMemo(() => {
    const planName = PlanNameMap.get(planIndex);
    return RecommendPlans.get(planName);
  }, [planIndex]);

  const AllInclusivePlan = useMemo(() => RecommendPlans.get('AllInclusivePlan'), []);

  return (
    <div className="py-20 md:py-28 mt-10 md:mt-0 bg-green-500">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20">
          <PlanSimpleCard plan={plan} href="#recommend-plan-1" />
          <PlanSimpleCard plan={AllInclusivePlan} href="#recommend-plan-2" />
        </div>
        <div className="my-28" id="recommend-plan-1">
          <PlanCard plan={plan} setFocusPrice={setFocusPrice} />
        </div>
        <div className="my-28" id="recommend-plan-2">
          <PlanCard plan={AllInclusivePlan} setFocusPrice={setFocusPrice} />
        </div>

        <div className="flex justify-center">
          <Link href="#question" passHref>
            <button className="shadow-lg text-center w-full max-w-xl text-lg rounded-md transition duration-150 py-4 text-blue-500 hover:text-white bg-white hover:bg-blue-500" onClick={onReset}>
              もう一度質問に答える
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
