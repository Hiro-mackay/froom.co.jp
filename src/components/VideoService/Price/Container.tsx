import { useEffect, useMemo } from 'react';
import { PriceCard } from './PriceCard';
import { PricePlansGroupType, PricePlansNameType, PricePlanType } from './prices';

export type PropsType = {
  position: number;
  prices: PricePlanType[];
  group: PricePlansGroupType;
  focusType: PricePlansNameType;
};

export const PriceContainer = ({ position, prices, group, focusType }: PropsType) => {
  const cardLength = useMemo(() => prices.length, [prices]);

  return (
    <div
      className={`grid min-w-full duration-200 grid-cols-1  ${
        cardLength === 2 ? 'lg:grid-cols-2 gap-6 md:gap-28' : `lg:grid-cols-3 gap-20 lg:gap-6  ${group === 'professional' ? 'display' : "hidden lg:'display"}`
      }`}
      style={{ transform: `translateX(${position}%)` }}
    >
      {prices.map((price) => {
        return <PriceCard key={price.title} price={price} group={group} focusType={focusType} />;
      })}
    </div>
  );
};
