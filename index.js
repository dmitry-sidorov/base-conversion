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



  const convert = (input, source) => {
    const inputArray = input.split('');
    const sourceArray = source.split('');
    const sourceBase = source.length;
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

    const convertFromDec = (valueInDec, targetBase) => {
      let targetIndices = [];
      do {
        valueInDec;

        targetIndices.push(valueInDec % targetBase);
        valueInDec /= targetBase;
      }
      while (valueInDec / targetBase !== 0 && valueInDec % targetBase !== 1 );
      return targetIndices.reverse();
    }
    console.log(convertFromDec(16, 2));








  }





console.log(convert('fdz', Alphabet.ALPHA_LOWER));
