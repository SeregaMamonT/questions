import MainPage from 'app/pages/main';
import QuestionPage from 'app/pages/question';
import AdminPage from 'app/pages/admin';
import ChangePasswordPage from 'app/pages/change-password';
import EditQuestionPage from 'app/pages/edit-question';
import LoginPage from 'app/pages/login';

export default [
  { path: '/', component: MainPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/admin', component: AdminPage },
  { path: '/change-password', component: ChangePasswordPage },
  { path: '/add-question', component: EditQuestionPage },
  { path: '/edit-question/:id', component: EditQuestionPage },
  { path: '/login', component: LoginPage },
];