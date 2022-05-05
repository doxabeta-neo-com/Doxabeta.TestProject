import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test_ project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test_ project',
          title: 'Test_ project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-project-course-l': IISTest_ProjectCourseLForm,
    'i-i-s-test-project-student-l': IISTest_ProjectStudentLForm,
    'i-i-s-test-project-course-e': IISTest_ProjectCourseEForm,
    'i-i-s-test-project-student-e': IISTest_ProjectStudentEForm
  },

});

export default translations;
