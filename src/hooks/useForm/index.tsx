import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import axios, { AxiosError } from 'axios';
import { SubmitHandler, FormHandles } from '@unform/core';

export interface FormStatus {
  status: 'standby' | 'submit' | 'success' | 'error';
  error: Error | null;
}

export const useForm = (action: string): [React.FC<{ className: string }>, FormStatus] => {
  // axios initialization
  if (typeof window !== `undefined`) {
    const CORS_PROXY = window.location.origin;
    axios.defaults.baseURL = CORS_PROXY;
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  }

  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: 'standby',
    error: null,
  });

  const UnForm: React.FC<{ className: string }> = ({ children, className }) => {
    const formRef = useRef<FormHandles>(null);
    return (
      <Form className={className} ref={formRef} onSubmit={onSubmit}>
        {children}
      </Form>
    );
  };

  const onSubmit = (refData: SubmitHandler) => {
    setFormStatus({
      status: 'submit',
      error: null,
    });
    console.log('Submit');
    axios
      .post(action, refData)
      .then((d) => {
        setFormStatus({
          status: 'success',
          error: null,
        });
      })
      .catch((err: AxiosError) => {
        setFormStatus({
          status: 'error',
          error: err,
        });
      });
  };

  return [UnForm, formStatus];
};
