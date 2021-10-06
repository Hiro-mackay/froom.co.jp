export type PlanNameType = 'AllInclusivePlan' | 'ProfessionalTrainingPlan' | 'ProfessionalToolImplementationPlan' | 'TrainingPlan' | 'ToolImplementationPlan';
export const ProfessitionalPlan = ['AllInclusivePlan', 'ProfessionalTrainingPlan', 'ProfessionalToolImplementationPlan'];

type PlanContnetType = { title: string; description: string };
export type PlanType = {
  link: string;
  type: PlanNameType;
  schedules: { [key: number]: PlanContnetType[] };
} & PlanContnetType;

export const RecommendPlans = new Map<PlanNameType, PlanType>();

export const PlanNameMap = new Map<number, PlanNameType>();
PlanNameMap.set(0, 'ProfessionalTrainingPlan');
PlanNameMap.set(1, 'TrainingPlan');
PlanNameMap.set(2, 'ToolImplementationPlan');
PlanNameMap.set(3, 'AllInclusivePlan');

const ProfessionalTrainingPlan: PlanType = {
  title: `プロの撮影
  ＋
  動画編集人材の育成プラン`,
  description: `動画編集のプロフェッショナル人材を社内にて育成できるプランです。
    撮影はプロに任せて、その後の動画編集を社内内製化を行うことで、継続的な動画活用を行なっていける体制を社内で整えます。
    PRや商品紹介などの高いクオリティが求められる動画を素早く作成できます。
    `,
  link:
    'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E3%83%97%E3%83%AD%E3%81%AE%E6%92%AE%E5%BD%B1%EF%BC%8B%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E4%BA%BA%E6%9D%90%E3%81%AE%E8%82%B2%E6%88%90%E3%83%97%E3%83%A9%E3%83%B3',
  type: 'ProfessionalTrainingPlan',
  schedules: {
    0: [
      {
        title: 'オンライン打ち合わせ①',
        description: `お問い合わせ頂いた後に、担当者様および関係者様に現状のヒアリングを実施いたします。
      お客様の現状や、必要な情報などの整理を行うことで、お客様に最適なプランとプランによりお客様が得られるビジネス価値の
      ご提案をさせて頂きます。`,
      },
      {
        title: 'オンライン打ち合わせ②',
        description: `１度目のオンライン打ち合わせの後、再度オンライン打ち合わせを行い、最終的なプランの決定と目標設定、スケジュールの見積もりを行います。
        この打ち合わせでは、最終的にお客様が求めるビジネス価値と、そのための目標設定を行います。
        `,
      },
    ],
    1: [
      {
        title: '撮影の打ち合わせ',
        description: `実際に撮影を行うための打ち合わせを行います。
        この打ち合わせでは、具体的な撮影物の決定や撮影の構成、撮影に必要な機材を選定します。
        信頼できるプロと一緒に進めるので、安心して全てお任せください。`,
      },
      {
        title: '撮影の実施',
        description: `実施に撮影を行います。
        当日は、撮影のプロがリードしながら撮影を行うので、スムーズでいながらハイクオリティな動画を撮影します。`,
      },

      {
        title: '編集人材の育成研修',
        description: `撮影を行う傍ら、動画編集人材を育成するための研修を実施します。
        Premiere ProやAftter Effectといったプロの動画編集者が使用するソフトウェアを使い、ハイクオリティな動画を編集・作成するためのレクチャを行います。
       基本的な操作方法や応用的な技術までをカバーし、初心者の方でも自走して動画編集を行なっていけるまでをサポートします。`,
      },
    ],
    2: [
      {
        title: '編集作業',
        description: `実際に編集作業を行なって頂きます。
        研修期間中の編集作業については、専任のサポーターをお付けします。
        実作業を通して、編集人材をプロの編集へと成長させるお手伝いをさせて頂きます。`,
      },
      {
        title: '動画の完成',
        description: `最終的に完成した動画を活用して、ビジネスを加速させてください！`,
      },
    ],
  },
};

const TrainingPlan: PlanType = {
  title: '動画編集人材の育成プラン',
  description: `動画編集のプロフェッショナル人材を社内にて育成できるプランです。
  撮影から動画編集までを社内で内製化を行い、いつでも動画撮影から編集までを社内で一気通貫で行える体制を整えることができます。`,
  link:
    'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E4%BA%BA%E6%9D%90%E3%81%AE%E8%82%B2%E6%88%90%E3%83%97%E3%83%A9%E3%83%B3',

  type: 'TrainingPlan',
  schedules: {
    0: [
      {
        title: 'オンライン打ち合わせ①',
        description: `お問い合わせ頂いた後に、担当者様および関係者様に現状のヒアリングを実施いたします。
        お客様の現状や、必要な情報などの整理を行うことで、お客様に最適なプランとプランによりお客様が得られるビジネス価値のご提案をさせて頂きます。`,
      },
      {
        title: 'オンライン打ち合わせ②',
        description: `１度目のオンライン打ち合わせの後、再度オンライン打ち合わせを行い、最終的なプランの決定と目標設定、スケジュールの見積もりを行います。
        この打ち合わせでは、最終的にお客様が求めるビジネス価値と、そのための目標設定を行います。
        `,
      },
    ],
    1: [
      {
        title: '編集人材の育成研修',
        description: `撮影を行う傍ら、動画編集人材を育成するための研修を実施します。
        Premiere ProやAftter Effectといったプロの動画編集者が使用するソフトウェアを使い、ハイクオリティな動画を編集・作成するためのレクチャを行います。
        基本的な操作方法や応用的な技術までをカバーし、初心者の方でも自走して動画編集を行なっていけるまでをサポートします。`,
      },
      {
        title: '撮影の打ち合わせ',
        description: `実際に撮影を行うための打ち合わせを行います。
        この打ち合わせでは、具体的な撮影物の決定や撮影の構成、撮影に必要な機材を選定します。`,
      },
      {
        title: '撮影の実施',
        description: `実施に撮影を行います。
        撮影はお客様の社内にて、お客様自身で行なって頂きます。`,
      },
    ],
    2: [
      {
        title: '編集作業',
        description: `実際に編集作業を行なって頂きます。
        研修期間中の編集作業については、専任のサポーターをお付けします。
        実作業を通して、編集人材をプロの編集へと成長させるお手伝いをさせて頂きます。`,
      },
      {
        title: '動画の完成',
        description: `最終的に完成した動画を活用して、ビジネスを加速させてください！`,
      },
    ],
  },
};

const ToolImplementationPlan: PlanType = {
  title: 'カンタン動画編集ツール導入プラン',
  description: `カンタン動画編集ツールを社内に導入して、動画編集を簡単に内製化できるプランです。
  撮影から動画編集までを社内で内製化を行います。
  カンタン動画編集ツールは、初心者の方でも直感的に動画編集を行うことができるツールです。
  継続的な動画活用を行なっていける体制を低コストで整えることができます。`,
  link:
    'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E3%82%AB%E3%83%B3%E3%82%BF%E3%83%B3%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E3%83%84%E3%83%BC%E3%83%AB%E5%B0%8E%E5%85%A5%E3%83%97%E3%83%A9%E3%83%B3',

  type: 'ToolImplementationPlan',
  schedules: {
    0: [
      {
        title: 'オンライン打ち合わせ①',
        description: `お問い合わせ頂いた後に、担当者様および関係者様に現状のヒアリングを実施いたします。
        お客様の現状や、必要な情報などの整理を行うことで、お客様に最適なプランとプランによりお客様が得られるビジネス価値のご提案をさせて頂きます。`,
      },
      {
        title: 'オンライン打ち合わせ②',
        description: `１度目のオンライン打ち合わせの後、再度オンライン打ち合わせを行い、最終的なプランの決定と目標設定、スケジュールの見積もりを行います。
        この打ち合わせでは、最終的にお客様が求めるビジネス価値と、そのための目標設定を行います。
        `,
      },
    ],
    1: [
      {
        title: '撮影の打ち合わせ',
        description: `実際に撮影を行うための打ち合わせを行います。
        この打ち合わせでは、具体的な撮影物の決定や撮影の構成、撮影に必要な機材を選定します。
        信頼できるプロと一緒に進めるので、安心して全てお任せください。`,
      },
      {
        title: '撮影の実施',
        description: `実施に撮影を行います。
        撮影はお客様の社内にて、お客様自身で行なって頂きます。`,
      },
      {
        title: 'カンタン動画編集ツールの導入',
        description: `撮影を行なった動画を編集するための”カンタン動画編集ツール”の導入を行います。
        ツールの導入にあたって、ツールの基本的な使い方や動画編集の基礎をレクチャーいたします。`,
      },
    ],
    2: [
      {
        title: 'カンタン動画編集ツールで編集',
        description: `”カンタン動画編集ツール”で動画編集を行なって頂きます。
        このツールは、初心者の方でも直感的に動画編集を行うことができます。直感的な操作感で質の高い動画を作成することができます。`,
      },
      {
        title: '動画の完成',
        description: `最終的に完成した動画を活用して、ビジネスを加速させてください！`,
      },
    ],
  },
};

const AllInclusivePlan: PlanType = {
  title: '全部お任せプラン',
  description: `動画の撮影から編集までを丸ごとプロにお任せできるプランです。
  撮影の構成から実際の撮影、その後の動画編集にまで一貫して信頼できるプロに任せることで、
  動画のクオリティを最大化し、時間と工数を割くことなく、動画を作成することができます。`,
  link:
    'https://docs.google.com/forms/d/e/1FAIpQLScu1q4Faavi7QnZ6xmPOss3KDNA7eQ0vLGGdqlQJoxhxNaR2w/viewform?usp=pp_url&entry.1254271756=%E5%85%A8%E9%83%A8%E3%81%8A%E4%BB%BB%E3%81%9B%E3%83%97%E3%83%A9%E3%83%B3',

  type: 'AllInclusivePlan',
  schedules: {
    0: [
      {
        title: 'オンライン打ち合わせ①',
        description: `お問い合わせ頂いた後に、担当者様および関係者様に現状のヒアリングを実施いたします。
        お客様の現状や、必要な情報などの整理を行うことで、お客様に最適なプランとプランによりお客様が得られるビジネス価値のご提案をさせて頂きます。`,
      },
      {
        title: 'オンライン打ち合わせ②',
        description: `１度目のオンライン打ち合わせの後、再度オンライン打ち合わせを行い、最終的なプランの決定と目標設定、スケジュールの見積もりを行います。
        この打ち合わせでは、最終的にお客様が求めるビジネス価値と、そのための目標設定を行います。
        `,
      },
    ],
    1: [
      {
        title: '撮影の打ち合わせ',
        description: `実際に撮影を行うための打ち合わせを行います。
        この打ち合わせでは、具体的な撮影物の決定や撮影の構成、撮影に必要な機材を選定します。
        信頼できるプロと一緒に進めるので、安心して全てお任せください。`,
      },
      {
        title: '撮影の実施',
        description: `実施に撮影を行います。
        当日は、撮影のプロがリードしながら撮影を行うので、スムーズでいながらハイクオリティな動画を撮影します。`,
      },
    ],
    2: [
      {
        title: '編集作業および完成イメージの共有',
        description: `撮影を行なった動画の編集作業に入ります。
        作業編集中は、最終的な動画の完成に向けて、お客様に完成のイメージを共有しながら作業を進めていきます。
        最後に納品される動画がイメージと違う、ということが起こらないように積極的に共有を行います。`,
      },
      {
        title: '完成動画の納品',
        description: `最終的な完成動画を納品いたします。
        動画を活用して、ビジネスを加速させます。`,
      },
    ],
  },
};

RecommendPlans.set('ProfessionalTrainingPlan', ProfessionalTrainingPlan);
RecommendPlans.set('TrainingPlan', TrainingPlan);
RecommendPlans.set('ToolImplementationPlan', ToolImplementationPlan);
RecommendPlans.set('AllInclusivePlan', AllInclusivePlan);
