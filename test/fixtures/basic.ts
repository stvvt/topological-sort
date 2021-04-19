/**
 * An example taken from @link https://java2blog.com/topological-sort-java/#Topological_Sort_Algorithm
 */

import { Service } from '../../src/Service';

const components = [
  new Service(
    '40', 
    ['i2', 'i1'],
    []),
  new Service('10', ['i4'], ['i1', 'i3']),
  new Service('20', ['i3', 'i5', 'i6', 'i7',], ['i2']),
  new Service('30', ['i8',], ['i4', 'i5']),
  new Service('50', ['i9',], ['i6',]),
  new Service('60', ['i10',], ['i7', 'i8']),
  new Service('70', [], ['i9', 'i10'], ),
];

export default components;
