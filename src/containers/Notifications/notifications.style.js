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

export const DivStyle2 = styled.div`
    position: relative;
    width: 100%;
    height: 93%;
    background-image: linear-gradient( white, white);
    background-size: cover;
    background-repeat: repeat;
    padding: 10px;
    overflow: auto;
    border: 1px solid gray;
    border-radius: .25rem .25rem .25rem .25rem;
`;

export const ButtonStyle3 = styled.button`
    width: 5%;
    border: 1px solid grey;
`;

export const DivStyle = styled.div`
    position: relative;
    opacity: 0.8;
    float: left;
    background-image: linear-gradient( lightgrey, lightgrey);
    padding: 20px;
    width: 50%;
    height:100%;
    text-align: left;
    z-Index: 99;
    overflow: auto;
    border-radius: .25rem;  
  `;

export const H3Style = styled.h3`
  position: relative;
  height: 5%;
  text-align:center;
  font-family: Arial, Helvetica, sans-serif;
`;
