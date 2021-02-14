export type InputTagConfig = 'input' | 'select' | 'textarea';

export interface InputConfig {
  label: string;
  name: string;
  type: string;
  tag: InputTagConfig;
  required: boolean;
  placeholder?: string;
}

export interface FormConfig {
  action: string; // form action url
  items: InputConfig[]; // form meta data of input items
}

export const MainFormConfig: FormConfig = {
  action: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc4o7VrLxKJO1oc47E7777oQO9msZIHIeLxtbofolxNshpaOw/formResponse',
  items: [
    {
      label: '会社名',
      name: 'entry:1368563690',
      type: 'text',
      tag: 'input',
      required: true,
      placeholder: '株式会社Froom',
    },
    {
      label: 'メールドレス',
      name: 'entry:523804216',
      type: 'email',
      tag: 'input',
      required: true,
      placeholder: 'your-email@froom.co.jp',
    },
    {
      label: '担当者名',
      name: 'entry:866013344',
      type: 'text',
      tag: 'input',
      required: false,
      placeholder: 'フルーム 太郎',
    },
    {
      label: '問い合わせ内容',
      name: 'entry:1498240417',
      type: 'textarea',
      tag: 'textarea',
      required: true,
    },
  ],
};
