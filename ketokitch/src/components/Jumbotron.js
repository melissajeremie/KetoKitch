import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import asparagus from '../assets/asparagus.jpg';

const Styles = styled.div `

.jumbo {
  background: url(${asparagus}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 200px;
  position: relative;
  z-index: -2;
}

.overlay {
  background-color: black;
  opacity: 0.6;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

`;

export const Jumbotron = () => (

  <Styles>
  <Jumbo fluid className = "jumbo">
    <div className = "overlay"> </div>
    <Container>
    <h1>Keto Kitch</h1>
    <p>Join the community and share what you love!</p>
    </Container>
  </Jumbo>
  </Styles>
)
