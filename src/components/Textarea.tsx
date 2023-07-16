import { Ref, forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';
import { styled } from 'styled-components';
import { Label } from './Label';

type InputProps = {
  id: string;
  placeholder: string;
  name: string;
  onChange: ChangeHandler;
  labelText?: string;
};

export const Textarea = forwardRef(
  (
    { id, placeholder, name, onChange, labelText }: InputProps,
    ref: Ref<HTMLTextAreaElement>
  ) => (
    <InputContainer>
      {labelText && <Label htmlFor={id}>{labelText}</Label>}
      <TextareaStyled
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  )
);

Textarea.displayName = 'Textarea';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextareaStyled = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  min-height: 300px;

  &:focus {
    outline: 4px dashed #0051a8;
    outline-offset: -4px;
  }
`;
