import { Ref, forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';
import { styled } from 'styled-components';
import { Label } from './Label';

type InputProps = {
  type?: string;
  id: string;
  placeholder: string;
  name: string;
  onChange: ChangeHandler;
  autocomplete?: 'on' | 'off';
  labelText?: string;
};

export const Input = forwardRef(
  (
    {
      type,
      id,
      placeholder,
      name,
      onChange,
      autocomplete,
      labelText,
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <InputContainer>
      {labelText && <Label htmlFor={id}>{labelText}</Label>}
      <InputStyled
        ref={ref}
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autocomplete}
      />
    </InputContainer>
  )
);

Input.displayName = 'Input';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputStyled = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;

  &:focus {
    outline: 4px dashed #0051a8;
    outline-offset: -4px;
  }
`;
