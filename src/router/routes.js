import MainPage from '../components/main-page.vue';
import QuestionPage from '../components/question-page.vue';

export default [
  { path: '/', component: MainPage },
  { path: '/question/:id', component: QuestionPage },
];