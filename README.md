# Set Algebra

Perform Set Algebra with JavaScript Sets.

## Install
```
npm install @dnvr/set-algebra
```

## How it works

Set Algebra provides methods to perform Set operations to JavaScript sets.

This includes `union`, `intersection` and `difference` functions and `U`, `I`, `D` which are shorthand aliases for the same functions respectively.

The `difference` operation is binary while `union` and `intersection` allow any number of arguments.

All methods take `Iterable`s as parameters, including `Set`s and `Array`s, and they all return `Set`s.

## Usage
```TS
import {

  union, intersection, difference,

  U, I, D

} from '@dnvr/set-algebra'

const firstFive = [ 1, 2, 3, 4, 5 ]
const evenFive = [ 2, 4, 6, 8, 10 ]
const oddFive = [ 1, 3, 5, 7, 9 ]

const firstFiveSet = new Set( firstFive )
const evenFiveSet = new Set( evenFive )
const oddFiveSet = new Set( oddFive )

// All function allow any iterables as parameters

// The following are equivalent and all return Set { 1, 2, 3, 4, 5, 6, 8, 10 }
union( firstFive, evenFive )
union( firstFiveSet, evenFive )
union( firstFive, evenFiveSet )
union( firstFiveSet, evenFiveSet )

// The following will return Set { 2, 4 }
intersection( firstFive, evenFive )

// The functions union and intersection can take any number of parameters in any order
union() // returns Set {}
union( firstFive ) // returns Set { 1, 2, 3, 4, 5 }
union( firstFive, evenFive, oddFive ) // returns Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

intersection() // returns Set {}
intersection( firstFive ) // returns Set { 1, 2, 3, 4, 5 }
intersection( firstFive, evenFive, oddFive ) // returns Set {}

// The difference function takes 2 parameters and the order matters
// The following will return Set { 1, 3, 5 }
difference( firstFive, evenFive )

// The following will return Set { 6, 8, 10 }
difference( evenFive, firstFive )

// The difference function acts similarly to union and intersection without both parameters present
difference() // returns Set {}
difference( firstFive ) // returns Set { 1, 2, 3, 4, 5 }

// U, I and D are equivalent to union, intersection and difference and can be used instead
U( evenFive, oddFive ) // returns Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
I( evenFive, oddFive ) // returns Set {}
D( evenFive, oddFive ) // returns Set { 2, 4, 6, 8, 10 }
D( oddFive, evenFive ) // returns Set { 1, 3, 5, 7, 9 }
```

