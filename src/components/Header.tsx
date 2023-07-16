import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { authStore } from '../stores/auth-store';

type HeaderProps = {
  reset: () => void;
};

export function Header({ reset }: HeaderProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const textSign = pathname === '/sign-in' ? 'Регистрация' : 'Войти';
  const textButtonAuth =
    pathname.split('-')[0] === '/sign' ? textSign : 'Выйти';
  const { authExit, currUserEmail } = authStore;

  const createPost = () => {
    reset();
    navigate('/posts/create');
  };

  const authControl = () => {
    if (pathname.split('-')[0] !== '/sign') {
      authExit();
    } else if (pathname === '/sign-in') {
      navigate('/sign-up');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <HeaderStyled>
      <CenterContainer>
        <LinkStyled to="/">
          <Heading>Блог</Heading>
        </LinkStyled>
        <ToolsContainer>
          {pathname.split('-')[0] !== '/sign' && (
            <>
              <Email>{currUserEmail}</Email>
              <Button type="button" onClick={createPost}>
                Создать пост
              </Button>
            </>
          )}
          <Button type="button" onClick={authControl}>
            {textButtonAuth}
          </Button>
        </ToolsContainer>
      </CenterContainer>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  padding: 20px;
  background-color: #0b635b;
  color: white;
`;

const CenterContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0 auto;
  max-width: 1200px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 100%;
  color: white;
`;

const ToolsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Email = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
`;
