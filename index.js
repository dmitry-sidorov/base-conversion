function convert(input, source, target) {
  const sourceBase = source.length;
  const targetBase = target.length;
  const inputWeights = input.split('').map((item, i) => {
    return source.split('').indexOf(item);
  });
  const convertToDec = (weights, base) => {
    return weights.reduce((sum, item, i) => {
      return sum += item * base ** (weights.length - 1 - i);
    }, 0);
  }
  const valueInDec = convertToDec(inputWeights, sourceBase);
  const convertFromDec = (value, base, weights = []) => {
    const check = (weights, value, target) => {
      const current = weights.reduce((sum, item, i) => {
        return sum += item * 10 ** (weights.length - 1 -i);
      }, 0);
      return (current === value) || false;
    }
    if (Math.floor(value / base) !== 0) {
      weights.push(Math.floor(value % base));
      value /= base;
      convertFromDec(value, base, weights);
    } else {
      weights.push(Math.floor(value % base));
      return weights;
    }
    return (check(weights, value, target)) ? weights.reverse() : weights;
    }
    const outputWeights = convertFromDec(valueInDec, targetBase);
    const output = outputWeights.reduce((str, item) => {
      return str += target.split('')[item];
    }, '');
    const reverseString = string => {
      let reversed = [];
      string.split('').forEach((item, i) => {
        reversed.unshift(item);
      });
      return reversed.join('');
    }
    if (valueInDec === convertToDec(outputWeights, targetBase)) {
      return output;
    } else {
      return reverseString(output);
   }
 }
