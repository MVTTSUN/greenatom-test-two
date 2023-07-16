import styled from 'styled-components';
import { postsStore } from '../stores/posts-store';
import { Link } from 'react-router-dom';

export function MainScreen() {
  const { posts } = postsStore;

  return (
    <MainContainer>
      <section aria-label="посты">
        <ListContainer>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <LinkStyled to={`/posts/${post.id}`}>
                <CardContainer>
                  <CardTitle>{post.title}</CardTitle>
                  <CardText>{post.content}</CardText>
                </CardContainer>
              </LinkStyled>
            </ListItem>
          ))}
        </ListContainer>
      </section>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ListItem = styled.li`
  flex-basis: 285px;
`;

const CardContainer = styled.article`
  box-sizing: border-box;
  max-width: 285px;
  height: 140px;
  padding: 20px;
  background-color: white;
  color: black;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-size: 24px;
  font-weight: 400;
  line-height: 143%;
  border-bottom: 2px solid black;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 143%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;
