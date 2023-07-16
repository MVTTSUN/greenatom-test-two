import { object, string } from 'yup';

const schemaCreatePost = object({
  title: string().required('Обязательное поле!!!'),
  content: string().required('Обязательное поле!!!'),
});

const schemaAuth = object({
  email: string()
    .email('Должен быть валидным email')
    .required('Обязательное поле!!!'),
  password: string().required('Обязательное поле!!!'),
});

export { schemaCreatePost, schemaAuth };
