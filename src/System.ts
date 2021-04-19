import { Service } from './Service';
import { DAG } from './DAG';
import { DepthFirstSorter } from './DepthFirstSorter';

export class System implements DAG<Service> {
  constructor(public readonly components: Service[]) { }

  public sort(): Service[] {
    const sorter = new DepthFirstSorter<Service>(this);
    return sorter.sort();
  }

  /**
   * Is c1 dependent on c2?
   */
  public isDependent(c1: Service, c2: Service) {
    for (const dep of c1.depends) {
      if (c2.provides.indexOf(dep) >= 0) {
        return true;
      }
    }

    return false;
  }
}
