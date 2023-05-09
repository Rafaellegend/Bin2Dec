import React, { useState } from 'react';
import { useConvertBintoDec } from '../../state/hooks/useConvertBintoDec';
import { useConvertDectBin } from '../../state/hooks/useConvertDectoBin';
import { StyledBin2Dec } from './style';

const Bin2Dec = () => {
  const [conversion, setConversion] = useState('bin2dec');
  const [value, setValue] = useState('');
  const [res, setRes] = useState('');

  const converter = (conv: string, value: string) => {
    if (conv == 'bin2dec') {
      const fun = useConvertBintoDec(value);
      setValue(value);
      setRes(`${fun}`);
    } else {
      const fun = useConvertDectBin(value);
      setValue(value);
      setRes(`${fun}`);
    }
  };

  return (
    <StyledBin2Dec>
      <div>
        <label htmlFor="val"></label>
        <input id="val" type={'text'} value={value} placeholder='00' onChange={evento => converter(conversion, evento.target.value)} />
        <p>{!res? 0:res}</p>
      </div>
    </StyledBin2Dec>
  );
};

export default Bin2Dec;