import portfolioIcon from '../image/arrow.svg';
import examplepic from '../image/examplepic.png';

const techs = [
  { titile: 'HTML', id: 1 },
  { titile: 'CSS', id: 2 },
  { titile: 'JS', id: 3 },
  { titile: 'React', id: 4 },
  { titile: 'Git', id: 5 },
  { titile: 'Express.js', id: 6 },
  { titile: 'mongoDB', id: 7 },
];

const portfolio = [
  {
    title: 'Статичный сайт',
    icon: portfolioIcon,
    id: 1,
    link: 'https://oxitenko.github.io/how-to-learn/',
  },
  {
    title: 'Адаптивный сайт',
    icon: portfolioIcon,
    id: 2,
    link: 'https://oxitenko.github.io/russian-travel/',
  },
  {
    title: 'Одностраничное приложение',
    icon: portfolioIcon,
    id: 3,
    link: 'https://oxitenko.github.io/react-mesto-auth/',
  },
];

const student = {
  name: 'Оксана',
  profi: 'Фронтенд-разработчик, 30 лет',
  summary:
    'Хочу стать крутым Frontend разработчиком - создавать эффективные приложения с отзывчивым интерфейсом. Для меня важно, чтобы в приложении можно было быстро и интуитивно разобраться любому человеку. Интересна сфера UI/UX. В свободное время люблю играть в игры на Playstation и смотреть/читать материалы о игровой индустрии',
  email: 'oxitenko@mail.com',
};

const savedMovies = [
  { title: 'В погоне за Бенкси', time: '27', pic: examplepic, id: 1 },
  { title: 'В погоне за Бенкси', time: '27', pic: examplepic, id: 2 },
  { title: 'В погоне за Бенкси', time: '27', pic: examplepic, id: 3 },
];

export { portfolio, techs, student, savedMovies };
