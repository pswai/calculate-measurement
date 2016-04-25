calculate-measurement [![npm version](https://badge.fury.io/js/calculate-measurement.svg)](https://badge.fury.io/js/calculate-measurement)
---------
> Mathematical operations with CSS unit

```javascript
import calculateMeasurement from 'calculate-measurement';

// Calculation with unit (default: addition)
let addPixel = calculateMeasurement('300px', 50); // '350px'

// Custom operation
let multiplyPercentage = calculateMeasurement('10%', 2, (value, delta) => value * delta); // '20%'

// Creating shorthand with lodash
let minusWithMinimum = _.partialRight(calculateMeasurement, (value, delta) => {
  return Math.max(value - delta, 100); // result is at least 100
});

let moreThan100 = minusWithMinimum('200px', 90); // '110px'
let lessThan100 = minusWithMinimum('200px', 110); // '100px'
```


### Install
```
npm install calculate-measurement --save
```

### API

#### `calculateMeasurement(value, delta, op)`

##### `value`
Type: `Number` | `String`

The value to be operated on. It can be a primitive number or a string with CSS unit.
See [tests](__tests__/calculate-measurement.spec.js) for supported units.

##### `delta`
Type: `Number`

A unit-less number to indicate how much `value` should be altered.

##### `op` (optional)
Type: `Function`

Default: `(unitlessValue, delta) => unitlessValue + delta`

Custom function to compute end result.
By default it adds `delta` to `unitlessValue`, the unit-less number version of `value`.

```
// Example: Subtraction
calculateMeasurement('50cm', 10, (a, b) => b - a); // '40cm'

// Example: Addition but limit at 100%
calculateMeasurement('80%', '30', (a, b) => Math.min(a + b, 100)); // '100%'
```

##### Returns
Calculation result in the format with `value`.

### Tests
Tests are very important to keep us in good shape.
```
npm test
```


### License
[MIT](LICENSE.txt)


### Changelog

#### v0.1.0
- First release
