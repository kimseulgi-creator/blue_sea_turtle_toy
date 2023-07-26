import React from 'react';
import Footer from './Footer';
import { StPTitle, StSection } from './Main';
import animal1 from '../images/animals/animal1.png';
import animal2 from '../images/animals/animal2.png';
import animal3 from '../images/animals/animal3.png';
import animal4 from '../images/animals/animal4.png';
import animal5 from '../images/animals/animal5.png';
import animal6 from '../images/animals/animal6.png';
import animal7 from '../images/animals/animal7.png';
import animal8 from '../images/animals/animal8.png';
import animal9 from '../images/animals/animal9.png';
import animal10 from '../images/animals/animal10.png';
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
          <img src={animal1} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>돌묵상어</p>
          </StAnimalName>
          <img src={animal2} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>북극곰</p>
          </StAnimalName>
          <img src={animal3} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>산호상어</p>
          </StAnimalName>
          <img src={animal4} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>수마트라 수달</p>
          </StAnimalName>
          <img src={animal5} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>아마존강 돌고래</p>
          </StAnimalName>
          <img src={animal6} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>저어새</p>
          </StAnimalName>
          <img src={animal7} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>지중해 몽크물범</p>
          </StAnimalName>
          <img src={animal8} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>페어리 펭귄</p>
          </StAnimalName>
          <img src={animal9} />
        </StAnimalCard>
        <StAnimalCard>
          <StAnimalName>
            <p>푸른바다 거북</p>
          </StAnimalName>
          <img src={animal10} />
        </StAnimalCard>
      </StAnimalCardWrap>
      <Footer />
    </StSection>
  );
}

export default Animal;
const StAnimalCardWrap = styled.div`
  margin: 60px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
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
  opacity: 0;
  -webkit-backdrop-filter: blur(2px);
  -mos-backdrop-filter: blur(2px);
  -ms-backdrop-filter: blur(2px);
  -o-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.8s;
  &:hover {
    opacity: 100%;
  }
`;
