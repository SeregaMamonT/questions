import MainPage from 'app/pages/main';
import QuestionPage from 'app/pages/question';
import AdminPage from 'app/pages/admin';
import ChangePasswordPage from 'app/pages/change-password';

export default [
  { path: '/', component: MainPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/admin', component: AdminPage },
  { path: '/change-password', component: ChangePasswordPage },
];