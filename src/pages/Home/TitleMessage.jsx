import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 50%;
  top: 22rem;
  z-index: 1;
  margin : -155px 40px 20px 0;
  text-align: center;
  div {
    color: #ff4a57;
    text-shadow:rgb(104, 207, 255);
    font-weight: 100;
    letter-spacing: 7px;
  }
  @media (max-width: 767px) and (min-width: 729px){
  width: 95%;
  div {
    font-weight: 100;
    letter-spacing: 2px;
    font-size: 30px;
  }
}
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div>
      <div>
        <div>
          <Typewriter
            options={{
              strings: ["Developer", "Back-End", "Front-End"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
