import React from 'react';
const Header = (props:{modo:string,setModo:any}) => {
  const {modo,setModo} = props;
  return (
    <nav>
      <h1>{modo == 'bin2dec'? 'Bin' : 'Dec'}</h1>
      <button onClick={() => setModo(modo == 'bin2dec'? 'dec2bin' : 'bin2dec' )}>2</button>
      <h1>{modo == 'bin2dec'? 'Dec' : 'Bin'}</h1>
    </nav>
  );
};

export default Header;