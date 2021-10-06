import { PlanNameType } from '../PlanRecommend/plans';

export type PricePlansNameType = PlanNameType;
export type PricePlansGroupType = 'professional' | 'basic';
export type PricePlanType = {
  title: string;
  description: string;
  professional: boolean;
  group: PricePlansGroupType;
  type: PricePlansNameType;
  ntoes?: string;
  detail?: {
    text: string;
    link: string;
  };
  price: {
    amount: number;
    ntoes: string;
  };
  submit: {
    text: string;
    href: string;
  };
};

export const PricePlansMap = new Map<PricePlansNameType, PricePlanType>();
export const PricePlanGroupMap = new Map<PricePlansGroupType, PricePlanType[]>();

const AllInclusivePlan: PricePlanType = {
  title: '全部お任せプラン',
  description: `動画の撮影から編集まで、丸ごとプロに任せできます。
  撮影や動画編集の工数の手間なく、ハイクオリティな動画を手にしましょう。`,
  professional: true,
  type: 'AllInclusivePlan',
  price: {
    amount: 49.5,
    ntoes: '万円 〜',
  },
  submit: {
    text: 'プランについて問い合わせる',
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E5%85%A8%E9%83%A8%E3%81%8A%E4%BB%BB%E3%81%9B%E3%83%97%E3%83%A9%E3%83%B3',
  },
  group: 'professional',
};

const ProfessionalTrainingPlan: PricePlanType = {
  title: `動画編集人材の育成プラン`,
  description: `動画編集のプロフェッショナル人材を育成できます。
  PRや商品紹介などの高いクオリティが求められる動画を素早く低コストで数多く作成できます。`,
  professional: true,
  type: 'ProfessionalTrainingPlan',
  ntoes: '※研修は全3回で実施いたします。',
  price: {
    amount: 38.5,
    ntoes: '万円 〜',
  },
  submit: {
    text: 'プランについて問い合わせる',
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E3%83%97%E3%83%AD%E3%81%AE%E6%92%AE%E5%BD%B1%EF%BC%8B%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E4%BA%BA%E6%9D%90%E3%81%AE%E8%82%B2%E6%88%90%E3%83%97%E3%83%A9%E3%83%B3',
  },
  group: 'professional',
};

const ProfessionalToolImplementationPlan: PricePlanType = {
  title: `簡単動画作成ツール導入プラン`,
  description: `難しい撮影はプロに依頼。
  編集は”カンタン動画編集ツール”を利用して低コストでたくさんの動画を作成できます。`,
  professional: true,
  type: 'ProfessionalToolImplementationPlan',
  ntoes: '※ツールは年間契約になっております。',
  detail: { text: 'カンタン編集ツールについてはこちら', link: '/service' },
  price: {
    amount: 27.5,
    ntoes: '万円 〜',
  },
  submit: {
    text: 'プランについて問い合わせる',
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E3%83%97%E3%83%AD%E3%81%AE%E6%92%AE%E5%BD%B1%EF%BC%8B%E3%82%AB%E3%83%B3%E3%82%BF%E3%83%B3%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E3%83%84%E3%83%BC%E3%83%AB%E5%B0%8E%E5%85%A5%E3%83%97%E3%83%A9%E3%83%B3',
  },
  group: 'professional',
};

const TrainingPlan: PricePlanType = {
  title: `動画編集人材の
  育成プラン`,
  description: `撮影から編集まで一通りできるプロフェッショナル人材を社内で育成します。
  ハイクオリティな動画を社内メンバーのみで作成できるようになり、ビジネスをより加速させます。`,
  professional: false,
  type: 'TrainingPlan',
  ntoes: '※研修は全3回で実施いたします。',
  price: {
    amount: 22,
    ntoes: '万円',
  },
  submit: {
    text: 'プランについて問い合わせる',
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E4%BA%BA%E6%9D%90%E3%81%AE%E8%82%B2%E6%88%90%E3%83%97%E3%83%A9%E3%83%B3',
  },
  group: 'basic',
};

const ToolImplementationPlan: PricePlanType = {
  title: `簡単動画作成ツール
  導入プラン`,
  description: `誰でも簡単に動画を撮影できるツールを利用して、低コストでたくさんの動画を作成できます。`,
  detail: { text: 'カンタン編集ツールについてはこちら', link: '/service' },
  professional: false,
  type: 'ToolImplementationPlan',
  ntoes: '※ツールは年間契約になっております。',
  price: {
    amount: 11,
    ntoes: '万円 / 年',
  },
  submit: {
    text: 'プランについて問い合わせる',
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E3%82%AB%E3%83%B3%E3%82%BF%E3%83%B3%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E3%83%84%E3%83%BC%E3%83%AB%E5%B0%8E%E5%85%A5%E3%83%97%E3%83%A9%E3%83%B3',
  },
  group: 'basic',
};

PricePlansMap.set('AllInclusivePlan', AllInclusivePlan);
PricePlansMap.set('ProfessionalTrainingPlan', ProfessionalTrainingPlan);
PricePlansMap.set('ProfessionalToolImplementationPlan', ProfessionalToolImplementationPlan);
PricePlansMap.set('TrainingPlan', TrainingPlan);
PricePlansMap.set('ToolImplementationPlan', ToolImplementationPlan);

PricePlanGroupMap.set('basic', [ToolImplementationPlan, TrainingPlan]);
PricePlanGroupMap.set('professional', [ProfessionalToolImplementationPlan, ProfessionalTrainingPlan, AllInclusivePlan]);
