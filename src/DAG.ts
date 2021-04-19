export interface DAG<T> {
  components: T[];

  /**
   * Is c1 dependent on c2?
   */
  isDependent(c1: T, c2: T): boolean;
}