import styled from "styled-components";

export const DivStyle1 = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  background-image: url("img/fondo2.png");
  background-size: cover;
  background-repeat: repeat;
  padding: 40px;
  overflow: hidden;
`;

export const DivStyle2 = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  background-image: linear-gradient(white, white);
  background-size: cover;
  background-repeat: repeat;
  padding: 10px;
  overflow: auto;
  border: 1px solid gray;
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
`;

export const DivStyle = styled.div`
  position: relative;
  float: left;
  background-image: linear-gradient(white, white);
  padding: 20px;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 99;
  overflow: auto;
  border-radius: 0.25rem;
`;

export const H4Style = styled.h4`
  position: relative;
  height: auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const H6Style = styled.h6`
  position: relative;
  height: auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

