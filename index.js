const Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};



  const convert = (input, source, target) => {
    const inputArray = input.split('');
    const sourceArray = source.split('');
    const targetArray = target.split('');
    const sourceBase = source.length;
    const targetBase = target.length;
    inputArray;
    sourceArray;
    const inputWeights = inputArray.map((item, i) => {
      return sourceArray.indexOf(item);
    });
    inputWeights;
    const convertToDec = (weights, base) => {
      return weights.reduce((sum, item, i) => {
        return sum += item * base ** (weights.length - 1 - i);
      }, 0);
    }
    const valueInDec = convertToDec(inputWeights, sourceBase);
    valueInDec;

      const convertFromDec = (value, base, weights = []) => {
        if (Math.floor(value / base) !== 0) {
          weights.push(Math.floor(value % base));
          value /= base;
          base;
          value;
          weights;

          convertFromDec(value, base, weights);
        } else {
          weights.push(Math.floor(value % base));
          return weights;
        }
        weights;
        return (check(weights, valueInDec)) ? weights.reverse() : weights;
      }

      let outputWeights = convertFromDec(valueInDec, targetBase);
      outputWeights;




      const outputArray = outputWeights.reduce((str, item) => {
        return str += targetArray[item];
      }, '');
      outputArray;


      // console.log(convertFromDec(16, 2));



    }














console.log(convert('fdz', Alphabet.ALPHA_LOWER,  Alphabet.OCTAL));
