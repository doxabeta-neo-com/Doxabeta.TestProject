import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tGenderTypeEnum from '../enums/i-i-s-test-project-t-gender-type';

export default FlexberryEnum.extend({
  enum: tGenderTypeEnum,
  sourceType: 'IIS.Test_Project.tGenderType'
});
