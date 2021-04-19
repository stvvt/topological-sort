import { System } from './System';
import basicFixture from '../test/fixtures/basic';
import realFixture from '../test/fixtures/real';

const input = basicFixture;
// const input = realFixture;

const sys = new System(input);

const sorted = sys.sort();

sorted.map(comp => comp.name).forEach(name => console.log(name));

console.log('------------');
console.log(`# input services: ${input.length}`)
console.log(`# services: ${sorted.length}`)