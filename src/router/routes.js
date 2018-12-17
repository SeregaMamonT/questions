import MainPage from 'app/pages/main-page';
import QuestionPage from 'app/pages/question-page';
import AdminPage from 'app/pages/admin-page';

export default [
  { path: '/', component: MainPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/admin', component: AdminPage },
];