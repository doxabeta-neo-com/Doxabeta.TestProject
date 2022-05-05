import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest_ProjectCourseLForm from './forms/i-i-s-test-project-course-l';
import IISTest_ProjectStudentLForm from './forms/i-i-s-test-project-student-l';
import IISTest_ProjectCourseEForm from './forms/i-i-s-test-project-course-e';
import IISTest_ProjectStudentEForm from './forms/i-i-s-test-project-student-e';
import IISTest_ProjectCourseModel from './models/i-i-s-test-project-course';
import IISTest_ProjectStudentModel from './models/i-i-s-test-project-student';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-project-course': IISTest_ProjectCourseModel,
    'i-i-s-test-project-student': IISTest_ProjectStudentModel
  },

  'application-name': 'Test_ project',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test_ project',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test_ project',
          title: 'Test_ project'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'test-project': {
          caption: 'Test_Project',
          title: 'Test_Project',
          'i-i-s-test-project-course-l': {
            caption: 'Course',
            title: ''
          },
          'i-i-s-test-project-student-l': {
            caption: 'Student',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-project-course-l': IISTest_ProjectCourseLForm,
    'i-i-s-test-project-student-l': IISTest_ProjectStudentLForm,
    'i-i-s-test-project-course-e': IISTest_ProjectCourseEForm,
    'i-i-s-test-project-student-e': IISTest_ProjectStudentEForm
  },

});

export default translations;
