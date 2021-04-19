import { Interface } from './Interface';

export class Service {
  constructor(public readonly name: string, public readonly provides: Interface[], public readonly depends: Interface[]) { }
}