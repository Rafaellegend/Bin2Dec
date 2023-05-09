import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ModoState } from '../atom';

export const useConverter = () => {
  const setConversion = useSetRecoilState(ModoState);
  const conversion = useRecoilValue(ModoState);
  return conversion == 'bin2dec'? setConversion('dec2bin'):setConversion('bin2dec');
};