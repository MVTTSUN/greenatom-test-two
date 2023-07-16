import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

export function ErrorField({ children }: PropsWithChildren) {
  return <ErrorFieldStyled>{children}</ErrorFieldStyled>;
}

const ErrorFieldStyled = styled.p`
  margin: 0;
  color: #a80019;
`;
