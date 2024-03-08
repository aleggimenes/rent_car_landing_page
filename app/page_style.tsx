import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Ajusta a proporção das colunas */
  grid-gap: -10px;
  background-color: yellow;
`;

export const Button = styled.button`
background-color: #f55f5f;
color: white;
cursor: pointer;
width: 50%;
height: 70px;
margin-left: 20px;
`