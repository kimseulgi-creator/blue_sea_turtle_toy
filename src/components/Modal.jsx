import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

function Modal() {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const clickOutside = (event) => {
    if (modalRef.current === event.target) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);
  return (
    <div>
      <StButton onClick={openModal}>POST</StButton>
      {isOpen && (
        <StModal ref={modalRef}>
          <StModalContents>
            <input
              type="password"
              placeholder="비밀번호 4자리를 입력해주세요"
              maxLength="4"
              minLength="4"
            />
            <textarea placeholder="해양동물을 위해 스스로 어떤 노력을 할 수 있을지 적어봅시다."></textarea>
            <StWrapButton>
              <button onClick={closeModal}>POST</button>
              <button onClick={closeModal}>닫기</button>
            </StWrapButton>
          </StModalContents>
        </StModal>
      )}
    </div>
  );
}

export default Modal;
const StModal = styled.div`
  background-color: #00000081;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
const StModalContents = styled.div`
  background-color: #fff;
  position: absolute;
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 60px;
  box-sizing: border-box;
  & input {
    height: 32px;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    color: #000000;
    &:focus {
      outline: none !important;
      border: 1px solid #0036cd;
    }
  }

  & textarea {
    height: 206px;
    margin: 30px 0;
    padding: 5px;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    color: #000000;
    resize: none;
    &:focus {
      outline: none !important;
      border: 1px solid #0036cd;
    }
  }
`;
const StWrapButton = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    height: 32px;
    width: 150px;
    border-radius: 20px;
    background-color: var(--main-color);
    box-shadow: 1px 1px 5px 0 #99969673;
    transition: all 1s;
    &:hover {
      background-color: #0036cd;
    }
  }
`;
const StButton = styled.button`
  margin: 60px 0;
  width: 170px;
  height: 35px;
  border-radius: 20px;
  background-color: #fff;
  color: var(--main-color);
  font-weight: 700;
  box-shadow: 5px 5px 10px 0 #00000032;
  transition: all 1s;
  &:hover {
    /* background-color: #20c1e0; */
    animation: mainGradation 5s infinite;
    @keyframes mainGradation {
      0% {
        background-color: #fff;
      }
      25% {
        background-color: #20c1e0;
      }
      50% {
        background-color: #2083e0;
        color: #fff;
      }
      25% {
        background-color: #20c1e0;
      }
      100% {
        background-color: #ffffff;
        color: var(--main-color);
      }
    }
  }
`;
