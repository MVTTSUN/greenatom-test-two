import { styled } from 'styled-components';

export function Page404Screen() {
  return (
    <MainContainer>
      <Title>404</Title>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 144px;
  font-weight: 700;
  line-height: 100%;
`;
