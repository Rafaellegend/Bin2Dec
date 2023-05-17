import React from 'react';
import { StyledHeader } from './style';
import { BsArrowRightSquareFill } from 'react-icons/bs';
const Header = (props: { modo: string, setModo: any }) => {
  const { modo, setModo } = props;
  return (
    <StyledHeader>
      <h1>{modo == 'bin2dec' ? 'Bin' : 'Dec'}</h1>
      <p onClick={() => setModo(modo == 'bin2dec' ? 'dec2bin' : 'bin2dec')}><BsArrowRightSquareFill/></p>
      <h1>{modo == 'bin2dec' ? 'Dec' : 'Bin'}</h1>
    </StyledHeader>
  );
};

export default Header;