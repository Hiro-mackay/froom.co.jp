import React from 'react';
import { InputConfig } from '../../constants/Form.config';
import { useField } from '@unform/core';

interface Props extends InputConfig {
  className?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  id?: string;
}
export const FormItem: React.FC<Props> = React.memo(({ name, ...props }) => {
  const inputRef = React.useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const InputComponent = () => {
    switch (props.tag) {
      case 'input':
        return <input {...props} ref={inputRef} defaultValue={defaultValue} />;

      case 'textarea':
        return (
          <textarea
            ref={inputRef}
            defaultValue={defaultValue}
            {...props}
            cols={props.cols || 30}
            rows={props.rows || 5}
          />
        );
      default:
        return <p>not set a input tag</p>;
    }
  };
  return InputComponent();
});
