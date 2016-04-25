export default function calculateMeasurement(value, delta, op = (a, b) => a + b) {
  if (typeof value === 'number') {
    return op(value, delta);
  }

  const matches = value.match(/^(-?\d+)(.*)$/);
  if (matches) {
    return `${op(parseFloat(matches[1]), delta)}${matches[2]}`;
  }

  throw new Error(`Invalid input format: ${value}`);
}
