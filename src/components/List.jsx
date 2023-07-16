import React from 'react';
import { styled } from 'styled-components';
import listBackground from '../images/post_background.png';
import { StPContents, StPTitle, StSection } from './Main';
import Modal from './Modal';

function List() {
  return (
    <StSection background={`url(${listBackground})`}>
      <StPTitle as={'h2'}>Post를 작성해서 해양동물들을 도와주세요.</StPTitle>
      <StPContents>
        해양동물을 위해 스스로 어떤 노력을 할 수 있을지 적어봅시다.
      </StPContents>
      <StPEtc>( post 하나 당 해양 동물에게 500원씩 기부가 됩니다. )</StPEtc>
      <Modal />
      <StCardWrap>
        <StPostCard>a</StPostCard>
        <StPostCard>b</StPostCard>
        <StPostCard>c</StPostCard>
        <StPostCard>d</StPostCard>
        <StPostCard>e</StPostCard>
      </StCardWrap>
    </StSection>
  );
}

export default List;
// const Stsection = styled.section`
//   background: ${(props) => props.background};
//   height: 930px;
// `;

const StCardWrap = styled.div`
  display: flex;
  height: 355px;
  width: 1600px;
  overflow-x: auto;
  padding-bottom: 50px;
  &::-webkit-scrollbar {
    height: 15px;
    box-shadow: 5px 5px 10px 0 #00000032;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: var(--main-color);
  }
  &::-webkit-scrollbar-track {
    border-radius: 30px;
    background-color: #ffffff75;
  }
`;

const StPostCard = styled.div`
  background-color: #ffffffad;
  flex: 0 0 355px;
  margin-right: 60px;
  box-shadow: 5px 5px 10px 0 #00000032;
`;

const StPEtc = styled.p`
  font-weight: 300;
`;
