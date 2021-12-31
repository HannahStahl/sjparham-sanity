import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import gallery from './gallery';
import photo from './photo';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([gallery, photo]),
});