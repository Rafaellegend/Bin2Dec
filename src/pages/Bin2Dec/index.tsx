import React, { useEffect, useState } from 'react';
import { useConvertBintoDec } from '../../state/hooks/useConvertBintoDec';
import { useConvertDectBin } from '../../state/hooks/useConvertDectoBin';
import { StyledBin2Dec } from './style';


const Bin2Dec = (props: { modo: any }) => {
  const { modo } = props;
  const [lastModo, setLastModo] = useState('bin2dec');
  const [value, setValue] = useState('');
  const [res, setRes] = useState<string[]|null>([]);

  useEffect(() => {
    lastModo == modo? false: setRes([]);
    setValue('');
  },[modo]);


  const converter = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (modo == 'bin2dec') {     
      const fun = useConvertBintoDec(value);
      document.title = `Bin2Dec - Last Result: ${fun}`;
      setRes([...res!, `${fun}`]);
      setValue('');
    } else {
      const fun = useConvertDectBin(value);
      document.title = `Dec2Bin - Last Result: ${fun}`;
      setRes([...res!, `${fun}`]);
      setValue('');
    }
    setLastModo(modo);
  };

  return (
    <StyledBin2Dec>
      <form onSubmit={converter}>
        <div className='column'>
          <label htmlFor="val"></label>
          <input id="val" type={'text'} value={value} placeholder='00' onChange={evento => {const result = evento.target.value.replace(modo == 'bin2dec'? /[^01]/: /\D/g, '');setValue(result);}}/>
          <button type='submit' disabled={value > '' ? false : true} >Converter!</button>
          <div className='lista'>
            {res!.slice(0).reverse().map((val, index) => <p key={index} className={index == 0 ? 'lastValue' : 'value'}>{!val ? 0 : val}</p>)}
          </div>
        </div>
      </form>
    </StyledBin2Dec>
  );
};

export default Bin2Dec;