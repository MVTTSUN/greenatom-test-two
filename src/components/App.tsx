import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainScreen } from '../pages/MainScreen';
import { Header } from './Header';
import { PostScreen } from '../pages/PostScreen';
import styled from 'styled-components';
import { CreateEditPostScreen } from '../pages/CreateEditPostScreen';
import { Resolver, useForm } from 'react-hook-form';
import { Post } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCreatePost } from '../utils/schema';
import { Page404Screen } from '../pages/Page404Screen';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthScreen } from '../pages/AuthScreen';

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<Post>({
    resolver: yupResolver(schemaCreatePost) as Resolver<Post>,
  });

  return (
    <BrowserRouter>
      <Header reset={reset} />
      <CenterContainer>
        <Routes>
          <Route path="/">
            <Route element={<ProtectedRoute />}>
              <Route index element={<MainScreen />} />
              <Route path="posts">
                <Route
                  path="create"
                  element={
                    <CreateEditPostScreen
                      register={register}
                      handleSubmit={handleSubmit}
                      errors={errors}
                      setValue={setValue}
                      type="create"
                    />
                  }
                />
                <Route
                  path=":id/edit"
                  element={
                    <CreateEditPostScreen
                      register={register}
                      handleSubmit={handleSubmit}
                      errors={errors}
                      setValue={setValue}
                      type="edit"
                    />
                  }
                />
                <Route index path=":id" element={<PostScreen />} />
              </Route>
            </Route>
            <Route path="sign-in" element={<AuthScreen type="sign-in" />} />
            <Route path="sign-up" element={<AuthScreen type="sign-up" />} />
            <Route path="*" element={<Page404Screen />} />
          </Route>
        </Routes>
      </CenterContainer>
    </BrowserRouter>
  );
}

const CenterContainer = styled.div`
  box-sizing: border-box;
  padding: 25px;
  background-color: #14ccbb;
  color: white;
  min-height: 100vh;
`;
