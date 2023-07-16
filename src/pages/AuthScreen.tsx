import { styled } from 'styled-components';
import { Button } from '../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import { AuthData } from '../types';
import { schemaAuth } from '../utils/schema';
import { authStore } from '../stores/auth-store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Form } from '../components/Form';
import { ErrorField } from '../components/ErrorField';
import { Input } from '../components/Input';

type AuthScreenProps = {
  type: string;
};

export function AuthScreen({ type }: AuthScreenProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<AuthData>({
    resolver: yupResolver(schemaAuth) as Resolver<AuthData>,
  });
  const { auth, isLogin, authData, registry } = authStore;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    const { email, password } = data;

    if (type === 'sign-in') {
      auth(email, password);
      if (!isLogin) {
        setError('password', { message: 'Неправильная почта или пароль' });
      }
    } else {
      const isSuccessRegistry = registry(email, password);

      if (isSuccessRegistry) {
        navigate('/sign-in');
      } else {
        setError('email', { message: 'Почта уже зарегистрирована' });
      }
    }
  };

  useEffect(() => {
    isLogin && navigate('/');
  }, [isLogin, navigate]);

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{type === 'sign-in' ? 'Вход' : 'Регистрация'}</Title>
        <Input
          {...register('email')}
          id="email"
          type="email"
          placeholder="Введите почту"
          autocomplete="on"
          labelText={`Почта (тестовая почта: ${authData[0].email})`}
        />
        {errors.email && <ErrorField>{errors.email.message}</ErrorField>}
        <Input
          {...register('password')}
          id="password"
          type="password"
          placeholder="Введите пароль"
          autocomplete="on"
          labelText={`Пароль (тестовый пароль: ${authData[0].password})`}
        />
        {errors.password && <ErrorField>{errors.password.message}</ErrorField>}
        <Button>{type === 'sign-in' ? 'Войти' : 'Зарегистрироваться'}</Button>
      </Form>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 400;
  line-height: 100%;
`;
