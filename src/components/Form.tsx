import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

type FormProps = PropsWithChildren<{
  onSubmit: () => void;
}>;

export function Form({ onSubmit, children }: FormProps) {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
