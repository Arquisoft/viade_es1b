import styled from 'styled-components';

export const DivStyle1 = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  background-image: url("/fondo2.jpg");
  background-size: cover;
  background-repeat: repeat;
  padding: 40px;
  overflow: hidden;
`;

export const ListaDiv = styled.div`
    opacity: 0.87;
    float:left;
    width: 48%;
    height:100%;
    border: 1px solid grey;
    background-image: linear-gradient(to right, lightgrey, lightgrey);
    margin-left: 1%;
    margin-right: 1%;
    border-radius: .25rem;
    padding: 10px;
`;

export const AmigosDiv = styled.div`
   text-align: left;
   height: auto;
   max-height: 73%;
   overflow: auto;
   border: 1px solid grey;
   background-image: linear-gradient(to right, white, white);
   padding: 10px;
`;

export const MisAmigosDiv = styled.div`
    opacity: 0.85;
    float:left;
    width: 40%;
    height: auto;
    border: 1px solid grey;
    border-radius: .25rem;
    background-image: linear-gradient(to right, lightgrey, lightgrey);
    margin: 10px;
    padding: 10px;
`;
export const InputStyle = styled.input`
    width: 90%;
    border: 1px solid grey;
`;

export const ButtonStyle = styled.button`
    margin-top : 10px;
    border: 1px solid grey;
    margin-left: 5px;
`;

export const ButtonStyle2 = styled.button`
    width: 10%;
    border: 1px solid grey;
`;

