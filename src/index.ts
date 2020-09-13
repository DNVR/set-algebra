namespace SetAlgebra {
  function iterable2set<T> ( entry: Iterable<T> ): Set<T> {
    return entry instanceof Set ? entry : new Set( entry )
  }
  function iterable2array<T> ( entry: Iterable<T> ): Array<T> {
    return entry instanceof Array ? entry : [ ...entry ]
  }
  
  function intersectionFilter<T> ( this: Set<T>, e: T ): boolean {
    return this.has( e )
  }
  function intersectionReduction<T> ( accumulator: Set<T>, e: Iterable<T> ): Set<T> {
    return new Set( iterable2array( accumulator ).filter( intersectionFilter, iterable2set( e ) ) )
  }
  
  function differenceFilter<T> ( this: Set<T>, e: T ): boolean {
    return !this.has( e )
  }
  
  export function union<T> ( ...args: Iterable<T>[] ): Set<T> {
    return new Set( args.map( iterable2array ).flat() )
  }
  export const U = union
  
  export function intersection<T> ( ...args: Iterable<T>[] ): Set<T> {
    switch ( args.length ) {
      case 0: {
        return new Set
      }
  
      default: {
        let [ first, ...rest ] = args.map( iterable2set )
        return rest.reduce( intersectionReduction, first )
      }
    }
  }
  export const I = intersection
  
  export function difference<T> ( a: Iterable<T> = [], b: Iterable<T> = [] ): Set<T> {
    return iterable2set( iterable2array( a ).filter( differenceFilter, iterable2set( b ) ) )
  }
  export const D = difference
}