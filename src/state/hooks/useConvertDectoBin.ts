export const useConvertDectBin = (dec:string) => {
  let bin = '';
  let rad = parseInt(dec);
  if (isNaN(parseInt(dec))) {
    return 0;
  }
  while (rad > 0){
    console.log(rad);
    bin += rad % 2 == 1 ? '1' : '0';  
    rad = Math.trunc(rad / 2); 
    console.log(bin);
  }
  return bin.split('').reverse().join('');
};