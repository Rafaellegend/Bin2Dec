import styled from 'styled-components';
import { ModoState } from './state/atom';
import {useRecoilValue } from 'recoil';
import { useConverter } from './state/hooks/useConverter';

const conversion = useRecoilValue(ModoState);
export const Theme = styled.body`
  background-color: ${useConverter}
`;