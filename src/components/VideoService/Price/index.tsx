import { useEffect, useMemo, useState } from 'react';
import { PriceContainer } from './Container';

import { PricePlanGroupMap, PricePlansGroupType, PricePlansNameType } from './prices';

export type PropsType = {
  group: PricePlansGroupType;
  focusType: PricePlansNameType;
};

export const PriceBox = ({ group, focusType }: PropsType) => {
  const [basicPosition, setBasicPosition] = useState(group === 'basic' ? 0 : -100);
  const [professionalPosition, setProfessionalPosition] = useState(group === 'professional' ? -100 : 0);

  const basicPrices = useMemo(() => PricePlanGroupMap.get('basic'), []);

  const professionalPrices = useMemo(() => PricePlanGroupMap.get('professional'), []);

  useEffect(() => {
    if (group === 'basic') {
      setBasicPosition(0);
      setProfessionalPosition(0);
    } else {
      setBasicPosition(-100);
      setProfessionalPosition(-100);
    }
  }, [group]);

  return (
    <div className="flex flex-nowrap items-start w-full pt-16 md:pt-20 overflow-x-hidden">
      <PriceContainer position={basicPosition} prices={basicPrices} group={group} focusType={focusType} />
      <PriceContainer position={professionalPosition} prices={professionalPrices} group={group} focusType={focusType} />
    </div>
  );
};
