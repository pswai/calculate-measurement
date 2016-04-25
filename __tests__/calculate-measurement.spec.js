import {expect} from 'chai';
import calculateMeasurement from '../src/calculate-measurement';

describe('calculateMeasurement', function() {
  const cases = ['', 'em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc',
    'ch', 'rem', 'vh', 'vw', 'vmin', 'vmax'];

  cases.forEach(unit => {
    let unitName = unit || 'unit-less string';
    
    context(`with ${unitName}`, function() {
      it(`handles ${unitName}`, function() {
        expect(calculateMeasurement(`10${unit}`, 5)).to.equal(`15${unit}`);
      });

      it('handles negative value', function() {
        expect(calculateMeasurement(`-10${unit}`, 5)).to.equal(`-5${unit}`);
      });

      it('accepts different operation function', function() {
        expect(calculateMeasurement(`10${unit}`, 5, (a, b) => b - a)).to.equal(`-5${unit}`);
      });
    });
  });
  
  context('with number-type input', function() {
    it('handles number', function() {
      expect(calculateMeasurement(10, 5)).to.equal(15);
    });

    it('handles negative value', function() {
      expect(calculateMeasurement(-10, 5)).to.equal(-5);
    });

    it('accepts different operation function', function() {
      expect(calculateMeasurement(10, 5, (a, b) => b - a)).to.equal(-5);
    });
  });
  
  it('throws when measurement is invalid', function() {
    expect(() => calculateMeasurement('abc', 1)).to.throw(Error, 'Invalid input format: abc');
  });
});
