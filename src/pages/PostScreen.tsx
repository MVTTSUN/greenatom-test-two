import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { postsStore } from '../stores/posts-store';
import { PostWithId } from '../types';
import { Button } from '../components/Button';

export function PostScreen() {
  const { id } = useParams() as { id: string };
  const { posts } = postsStore;
  const currPost = posts.find((post) => post.id === id) as PostWithId;
  const { title, content } = currPost;
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Button onClick={() => navigate(`/posts/${id}/edit`)}>
        Редактировать
      </Button>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

const Content = styled.p`
  margin: 0;
`;
