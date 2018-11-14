import AppComponent from '../components/app-component.vue';
import QuestionPage from '../components/question-page.vue';

export default [
  { path: '/', component: AppComponent },
  { path: '/question/:id', component: QuestionPage },
];