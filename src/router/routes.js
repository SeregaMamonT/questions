import MainPage from '../pages/main-page.vue';
import QuestionPage from '../pages/question-page.vue';
import AdminPage from '../pages/admin-page.vue';

export default [
  { path: '/', component: MainPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/admin', component: AdminPage },
];