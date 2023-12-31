import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translate(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;
const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 80px;
    align-items: center;
    justify-content: center;

  }

  @media screen and (max-width: 640px) {
    order: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

function Hero() {
  return (
    <div id="about">
      <heroContainer>
        <heroBG></heroBG>
        <heroContainer>
          <heroLeftContainer></heroLeftContainer>
          <heroLeftContainer></heroLeftContainer>
        </heroContainer>
      </heroContainer>
      Portfolio
    </div>
  );
}

export default Hero;
