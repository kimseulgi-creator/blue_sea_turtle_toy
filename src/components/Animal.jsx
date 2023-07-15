import React from 'react';
import Footer from './Footer';
import { StPTitle, StSection } from './Main';
import animal from '../images/animals/animal1.png';
import { styled } from 'styled-components';

function Animal() {
  return (
    <StSection background={`var(--blue-color)`} animation="none">
      <StPTitle as={'h2'}>멸종 위기에 놓인 해양 동물들</StPTitle>
      <StAnimalCardWrap>
        <StAnimalCard>
          <StAnimalName>
            <p>갈라파고스 물개</p>
          </StAnimalName>
          <img src={animal} />
        </StAnimalCard>
      </StAnimalCardWrap>
      <Footer />
    </StSection>
  );
}

export default Animal;
const StAnimalCardWrap = styled.div`
  margin: 60px 0;
`;
const StAnimalCard = styled.div`
  width: 216px;
  height: 216px;
  position: relative;
  & img {
    width: 100%;
  }
`;
const StAnimalName = styled.div`
  width: 216px;
  height: 216px;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
