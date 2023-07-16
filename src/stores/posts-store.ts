import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';
import { PostWithId } from '../types';

class PostsStore {
  posts: PostWithId[] = [
    {
      id: nanoid(),
      title: 'Samsung может включить ChatGPT в состав своего браузера',
      content:
        'Крупные технологические компании продолжают борьбу за пирог в виде чат-ботов и алгоритмов искусственного интеллекта. Среди них и Samsung ищет способы распространения ИИ на своих устройствах. Не исключено, что этим способом станет её собственный браузер Samsung Internet, куда должен быть внедрён ChatGPT. Из этого кода следует, что появление ChatGPT в браузере Samsung может быть экспериментальной функцией Labs. Браузер даст возможность обращаться к чат-боту без необходимости переходить на его сайт. В коде упоминаются настройки ChatGPT и выбор версии чат-бота. Пока неизвестно, будут ли отличия между отдельным сервисом ChatGPT и встроенным в браузер Samsung. Не исключено, что можно будет обращаться к чат-боту на уже открытых веб-страницах.',
    },
    {
      id: nanoid(),
      title:
        'JavaScript «заразил» Python хитрой уязвимостью, от которой годами страдает сам',
      content:
        'В Python нашелся недостаток Class Pollution, по своим свойствам напоминающий брешь Prototype Pollution в JavaScript. Обнаруживший его эксперт называет его уязвимостью. В случае Prototype Pollution это целый класс уязвимостей, примеры эксплуатации которых с возможными последствиями эксперты рассматривают регулярно. Использовать Class Pollution в корыстных целях, как показала практика, тоже можно.',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addPost = (title: string, content: string) => {
    this.posts.push({ id: nanoid(), title, content });
  };

  updatePost = (id: string, title: string, content: string) => {
    this.posts = this.posts.map((post) => {
      if (post.id === id) {
        return { ...post, title, content };
      }
      return post;
    });
  };
}

const postsStore = new PostsStore();

export { postsStore };
