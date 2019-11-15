import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-direction: column;
//   margin: 2%;
//   border: 2px solid black;
//   height: 250px;
//   width: 250px;
// `;
// const Title = styled.h1`
//   font-size: 1.5rem;
//   text-align: center;
// `;


export default function CharacterCard(props) {
  return (
  <div>
    <div>
      <h1>Name: {props.name}</h1>
      <img url={props.image} alt=""/>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Origin: {props.origin}</p>
    </div>
  </div>
)}
