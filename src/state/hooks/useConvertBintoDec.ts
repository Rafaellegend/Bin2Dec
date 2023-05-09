export const useConvertBintoDec = (bin: string) => {
  let dec = 0;
  if (isNaN(parseInt(bin))) {
    return 0;
  }
  for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
    if (parseInt(bin[c]) > 1) {
      return 0;
    }
    dec += parseInt(bin[c]) * Math.pow(2, i);
  }

  return dec;
};