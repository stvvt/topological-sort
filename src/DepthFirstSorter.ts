import components from '../test/fixtures/basic';
import { DAG } from './DAG';

/**
 * Implementation of @link https://en.wikipedia.org/wiki/Topological_sorting#Depth-first_search
 */
export class DepthFirstSorter<T> {
  private visited = new Set<T>(); // Permanent mark
  private visiting = new Set<T>(); // Temporary mark

  constructor(private readonly dag: DAG<T>) { }

  public sort(): T[] {
    const L: T[] = [];
    for (const c of this.dag.components) {
      this.visit(c, L);
    }
    return L;
  }

  private visit(component: T, L: T[]) {
    if (this.isVisited(component)) {
      return;
    }
    if (this.isVisiting(component)) {
      throw new Error('Not a DAG!');
    }

    this.markVisiting(component);

    for (const dep of this.getDependencies(component)) {
      this.visit(dep, L);
    }

    this.unmarkVisiting(component);
    this.markVisited(component);

    L.push(component);
  }

  /**
  * Return all system's components that depend on the specified one
  * 
  * A component dependencies are all other components, which depend on at least one interface the component provides.
  */
  private getDependencies(component: T) {
    const deps: T[] = []
    for (const c of this.dag.components) {
      if (this.dag.isDependent(component, c)) {
        deps.push(c);
      }
    }

    return deps;
  }

  private isVisited(component: T) {
    return this.visited.has(component);
  }

  private markVisited(component: T) {
    this.visited.add(component);
  }

  private isVisiting(component: T) {
    return this.visiting.has(component);
  }

  private markVisiting(component: T) {
    return this.visiting.add(component);
  }

  private unmarkVisiting(component: T) {
    return this.visiting.delete(component);
  }
}