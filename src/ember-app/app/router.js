import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-project-course-l');
  this.route('i-i-s-test-project-course-e',
  { path: 'i-i-s-test-project-course-e/:id' });
  this.route('i-i-s-test-project-course-e.new',
  { path: 'i-i-s-test-project-course-e/new' });
  this.route('i-i-s-test-project-student-l');
  this.route('i-i-s-test-project-student-e',
  { path: 'i-i-s-test-project-student-e/:id' });
  this.route('i-i-s-test-project-student-e.new',
  { path: 'i-i-s-test-project-student-e/new' });
});

export default Router;
