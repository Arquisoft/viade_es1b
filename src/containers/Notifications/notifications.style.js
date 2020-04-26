import styled from 'styled-components';

export const ContainerDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, white, lightblue);
    background-repeat: repeat;
    padding: 5px 0;
`;
export const NotificationsDiv = styled.div`
   height: 100%;
   opacity: 0.8;
   text-align: left;
   background-image: linear-gradient(to right, white, white);
`;

export const MisNotificaciones = styled.div`
    float:left;
    width: 99%;
    height: auto;
    border: 1px solid lightgrey;
    background-image: linear-gradient(to right, white, white);
    margin: 5px;
`;

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

export const DivStyle = styled.div`
    position: relative;
    opacity: 0.8;
    float: left;
    background-image: linear-gradient( white, white);
    padding: 20px;
    width: 50%;
    height:100%;
    text-align: left;
    z-Index: 99;
    overflow: auto;
    border-radius: .25rem;
        
  `;