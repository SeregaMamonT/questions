import MainPage from '../pages/main-page';
import QuestionPage from '../pages/question-page';
import AdminPage from '../pages/admin-page';

export default [
  { path: '/', component: MainPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/admin', component: AdminPage },
];