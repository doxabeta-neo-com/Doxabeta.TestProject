import { Serializer as CourseSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-project-course';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CourseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
