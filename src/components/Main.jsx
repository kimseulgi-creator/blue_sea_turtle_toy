import React, { forwardRef } from 'react';
import { styled } from 'styled-components';
import logo from '../images/blue_sea_turtle_logo.png';
import mainIcon from '../images/main_icon.svg';

const Main = forwardRef((props, ref) => {
  return (
    <StSection
      ref={(mainRef) => (ref.current[0] = mainRef)}
      background="var(--main-color)"
      paddingbottom="80px"
    >
      <h1>푸른 바다 거북이</h1>
      <StPTitle>
        안녕하세요 저희는 '푸른 바다 거북이'라는 멸종위기 해양동물
        기부단체입니다.
      </StPTitle>
      <StPContents className="contents">
        이 ‘푸른 바다 거북’ 또한 멸종위기종으로 지정되어있는데요.
        <br />
        현재 진행되는 <span>지구 온난화</span>는 바다거북의 개체군 성비의 균형을
        깨뜨릴 위험이 매우 큽니다.
        <br />
        <span>인간이 만들어 놓은</span> 도시의 불빛 또한 바다거북이 달빛을 보고
        위치정향을 하는 일을 방해하므로 큰 문제가 되기도 하고요.
        <br />그 밖에도 대왕고래, 바키타, 듀공, 해달, 물범 등 점점 사라져 가는
        위기에 놓여진 해양동물들을 위해 이제 <span>
          우리가 노력해야할 때
        </span>{' '}
        입니다.
      </StPContents>
      <img className="mainArrow" src={mainIcon} alt="" />
    </StSection>
  );
});

export default Main;
export const StSection = styled.section`
  position: relative;
  background: ${(props) => props.background};
  height: 930px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: ${(props) => props.paddingbottom};
  animation: ${(props) => props.animation || 'mainGradation 10s infinite'};
  background-attachment: fixed;
  @keyframes mainGradation {
    0% {
      background-color: #20c1e0;
    }
    50% {
      background-color: #2083e0;
    }
    100% {
      background-color: #20c1e0;
    }
  }
  & h1 {
    width: 500px;
    height: 360px;
    margin-bottom: 80px;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }
  & .mainArrow {
    position: absolute;
    width: 20px;
    animation: mainAnimation 1s infinite;
    @keyframes mainAnimation {
      0% {
        bottom: 85px;
      }
      100% {
        bottom: 75px;
      }
    }
  }
`;

export const StPTitle = styled.p`
  font-size: 36px;
  margin-bottom: 40px;
`;
export const StPContents = styled.p`
  font-size: 18px;
  line-height: 2.5;
  text-align: center;
  font-weight: 500;
  & span {
    color: rgb(2, 60, 126);
    font-size: 20px;
    margin: 0 5px;
    font-weight: 700;
  }
`;
