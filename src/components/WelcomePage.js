import React from "react";
import styled from 'styled-components';

const HeadStyle = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Pic = styled.img`
    margin: auto;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeadStyle>
        <h1>Welcome to the ultimate fan site!</h1>
        <Pic
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeadStyle>
    </section>
  );
}
