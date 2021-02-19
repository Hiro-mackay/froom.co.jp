import React from 'react';
import { MainFormConfig } from '../../constants/Form.config';
import { FormItem } from '../FormItem';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Button';

export const Form: React.FC = React.memo(() => {
  const [UnForm, formStatus] = useForm(MainFormConfig.action);

  return (
    <UnForm className="w-full">
      {MainFormConfig.items.map((inputItem) => {
        return (
          <div className="w-full mb-6" key={inputItem.name}>
            <label htmlFor="" className="block px-1 pb-2 font-semibold">
              {inputItem.label}
            </label>
            <div className="flex">
              <FormItem
                className="w-full px-4 py-2 text-sm bg-gray-100 border-2 border-gray-100 rounded outline-none focus:border-orange-light"
                {...inputItem}
              />
            </div>
          </div>
        );
      })}
      {formStatus.error && <p className="text-red">{formStatus.error.message}</p>}
      {formStatus.status === 'success' && <p className="text-green">送信が完了しました!</p>}
      <div className="w-full mt-8 text-center">
        <Button>送信する</Button>
      </div>
    </UnForm>
  );
});
