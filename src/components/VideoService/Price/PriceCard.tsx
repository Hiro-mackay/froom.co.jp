import { replaceLinFeedCodoToHtmlBr } from '../../../lib/replaceLinFeedCodoToHtmlBr';
import { PricePlansGroupType, PricePlanType } from './prices';
import Link from 'next/link';
import styles from '../../../styles/videoservice.module.css';

export type PropsType = {
  price: PricePlanType;
  group: PricePlansGroupType;
};

const professitionalPlan = ['AllInclusivePlan', 'ProfessionalTrainingPlan', 'ProfessionalToolImplementationPlan'];

export const PriceCard = ({ price, group }: PropsType) => {
  return (
    <div className={`border flex flex-col py-14 px-5 relative ${group === 'professional' ? 'md:px-6' : 'md:px-14'}`}>
      <h3 className="text-2xl text-center">{replaceLinFeedCodoToHtmlBr(price.title)}</h3>

      <p className="text-center pt-6">
        <span className="text-5xl pr-6">{price.price.amount}</span>
        <span className="text-lg">{price.price.ntoes}</span>
      </p>
      <p className={`pt-10 pb-10 text-gray-600`}>
        {replaceLinFeedCodoToHtmlBr(price.description)}
        {price.detail && (
          <>
            <br />
            <Link href={price.detail.link}>
              <a className="text-blue-500 underline">{price.detail.text}</a>
            </Link>
          </>
        )}
      </p>

      <div className="mt-auto relative">
        {price.ntoes && <span className="text-xs text-gray-400 absolute right-0 -bottom-6">{replaceLinFeedCodoToHtmlBr(price.ntoes)}</span>}
        <Link href={price.submit.href} passHref>
          <button className="w-full text-base text-center text-white rounded-sm transition duration-150 mt-auto py-2 bg-green-500">{price.submit.text}</button>
        </Link>
      </div>

      {professitionalPlan.includes(price.type) && (
        <div className="absolute -top-10 left-0 text-xs flex">
          <div className={`${styles.badge} ${styles.gold} relative`}>
            <div className={styles.circle}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="award" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"
                ></path>
              </svg>
            </div>
            <div className={styles.ribbon}>
              <span className="text-xs">プロの撮影</span>
            </div>
          </div>

          {price.type === 'AllInclusivePlan' && (
            <div className={`${styles.badge} ${styles.purple} relative`}>
              <div className={styles.circle}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magic" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"
                  ></path>
                </svg>
              </div>
              <div className={styles.ribbon}>
                <span className="text-xs">プロの編集</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
