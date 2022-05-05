import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  birthDate: DS.attr('date'),
  email: DS.attr('string'),
  gender: DS.attr('i-i-s-test-project-t-gender-type'),
  course: DS.belongsTo('i-i-s-test-project-course', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-test-project-student.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-test-project-student.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  birthDate: {
    descriptionKey: 'models.i-i-s-test-project-student.validations.birthDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-test-project-student.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  gender: {
    descriptionKey: 'models.i-i-s-test-project-student.validations.gender.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  course: {
    descriptionKey: 'models.i-i-s-test-project-student.validations.course.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('StudentE', 'i-i-s-test-project-student', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    birthDate: attr('Birth date', { index: 2 }),
    email: attr('Email', { index: 3 }),
    gender: attr('Gender', { index: 4 }),
    course: belongsTo('i-i-s-test-project-course', 'Course', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('StudentL', 'i-i-s-test-project-student', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    birthDate: attr('Birth date', { index: 2 }),
    email: attr('Email', { index: 3 }),
    gender: attr('Gender', { index: 4 }),
    course: belongsTo('i-i-s-test-project-course', 'Name', {
      name: attr('Name', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
