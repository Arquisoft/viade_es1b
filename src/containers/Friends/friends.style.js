import styled from 'styled-components';

export const ContainerDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, white, lightblue);
    background-repeat: repeat;
    padding: 5px 0;
`;

export const ListaDiv = styled.div`
    float:left;
    width: 50%;
    height:50%;
    border: 1px solid lightgrey;
    background-image: linear-gradient(to right, white, white);
    overflow: auto;
    margin: 5px;
`;

export const AmigosDiv = styled.div`
   text-align: left;
   height: 60%;
   overflow: auto;
   padding: 10px;
`;

export const MisAmigosDiv = styled.div`
    float:left;
    width: 40%;
    height: auto;
    border: 1px solid lightgrey;
    background-image: linear-gradient(to right, white, white);
    margin: 5px;
`;
export const InputStyle = styled.input`
    width: 80%;
    height: auto;
   
`;

