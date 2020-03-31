import styled from 'styled-components';

export const ContainerDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, white, lightblue);
    background-repeat: repeat;
    padding: 5px 0;
`;

export const PeticionesDiv = styled.div`
    float:left;
    width: 24%;
    height: 95%;
    border: 1px solid lightgrey;
    background-image: linear-gradient(to right, white, white);
    margin: 5px;

`;

export const MisAmigosDiv = styled.div`
    float:left;
    width: 50%;
    height: 95%;
    border: 1px solid lightgrey;
    background-image: linear-gradient(to right, white, white);
    margin: 5px;
`;

export const MisPeticionesPendientesDiv = styled.div`
    float:right;
    width: 24%;
    height: 95%;
    border: 1px solid lightgrey;
    background-image: linear-gradient(to right, white, white);
    margin: 5px;
`;
