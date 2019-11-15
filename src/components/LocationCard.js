import React from "react";
import styled from 'styled-components';

const Card = styled.div`

`;


export default function LocationCard(props) {
  return (
      <Card>
        <Card.Content>
          <h1>Planet: {props.name}</h1>
          <p>Type: {props.type}</p>
          <p>Dimension: {props.dimension}</p>
        </Card.Content>
      </Card>
  );
};