import React from "react";
import styled from 'styled-components';

const Card = styled.div`

`;


export default function LocationCard(props) {
  return (
      <Card>
        <div>
          <h1>Planet: {props.name}</h1>
          <p>Type: {props.type}</p>
          <p>Dimension: {props.dimension}</p>
        </div>
      </Card>
  );
};