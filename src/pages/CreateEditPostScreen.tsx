import styled from 'styled-components';
import { Button } from '../components/Button';
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { Post } from '../types';
import { postsStore } from '../stores/posts-store';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Form } from '../components/Form';
import { ErrorField } from '../components/ErrorField';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';

type CreateEditPostScreenProps = {
  type: string;
  register: UseFormRegister<Post>;
  handleSubmit: UseFormHandleSubmit<Post>;
  errors: FieldErrors<Post>;
  setValue: UseFormSetValue<Post>;
};

export function CreateEditPostScreen({
  type,
  register,
  handleSubmit,
  errors,
  setValue,
}: CreateEditPostScreenProps) {
  const { addPost, updatePost, posts } = postsStore;
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Post> = (data) => {
    if (type === 'edit') {
      updatePost(id, data.title, data.content);
      navigate(`/posts/${id}`);
    } else {
      addPost(data.title, data.content);
      navigate('/');
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      setValue('title', posts.find((post) => post.id === id)?.title as string);
      setValue(
        'content',
        posts.find((post) => post.id === id)?.content as string
      );
    } else {
      setValue('title', '');
      setValue('content', '');
    }
  });

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          {...register('title')}
          placeholder="Напишите название"
          labelText="Заголовок"
        />
        {errors.title && <ErrorField>{errors.title.message}</ErrorField>}
        <Textarea
          id="content"
          {...register('content')}
          placeholder="Напишите текст"
          labelText="Содержание"
        />
        {errors.content && <ErrorField>{errors.content.message}</ErrorField>}
        <Button>
          {type === 'edit' ? 'Сохранить и посмотреть' : 'Создать'}
        </Button>
      </Form>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
`;
