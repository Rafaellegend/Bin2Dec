import styled from 'styled-components';

export const StyledBin2Dec = styled.section`
  font-family: 'Roboto Mono', monospace;
  display: flex;
  justify-content: center;
  .column{
    flex-direction: column;
  }
  button{
    display: flex;
    align-items: center;
    margin: 20px auto;
    justify-content: center;
    border-radius: 50px;
    font-size: 30px;
    height: 50px;
    width:300px;
    background-color: black;
    color: #f2f2f2;
  }
  button:hover{
    background-color: #323232;
  }
  button:disabled{
    background-color: #7f7f7f;
  }
  input{
    font-weight: 300;
    font-size: 50px;
    background-color: #f2f2f2;
    height: 60px;
    width: 400px;
    border-radius: 50px;
    text-align: center;
  }
  .lista{
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 20px;
    font-weight: 600;
    font-size: 50px;
    height: 362px;
    width: 400px;
    text-align: center;
    vertical-align: middle;
    overflow: auto;
    .lastValue{
      height: 70px;
      margin: 0;
    }
    .value{
      height: 50px;
      font-size: 40px;
      margin: 0;
      opacity: 50%;
    }
  }
`;