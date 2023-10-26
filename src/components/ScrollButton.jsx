import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const scrollMove = [
  { idx: 0, name: 'Main' },
  { idx: 1, name: 'List' },
  { idx: 2, name: 'Animal' },
];

function ScrollButton({ scrollRef }) {
  const [buttonIndex, setButtonIndex] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    scrollRef.current[buttonIndex]?.scrollIntoView({ behavior: 'smooth' });
    setButtonIndex(null);
  }, [scrollRef, buttonIndex]);

  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach((ref) => {
            ref.className = ref.className.replace(' active', '');
          });

          navRef.current[idx].className += ' active';
        }
      });
    };

    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <ScrollButtonWrap>
      {scrollMove.map(({ idx, name }) => (
        <NavBtn
          key={idx}
          ref={(ref) => (navRef.current[idx] = ref)}
          onClick={() => {
            setButtonIndex(idx);
          }}
        >
          {name}
        </NavBtn>
      ))}
    </ScrollButtonWrap>
  );
}

export default ScrollButton;
const ScrollButtonWrap = styled.div`
  position: fixed;
  z-index: 10;
  top: 45px;
  right: 60px;
  display: flex;
  flex-direction: column;
  & button {
    background-color: transparent;
    font-size: 18px;
    margin: 15px 0;
    color: black;
    text-align: right;
  }
`;

const NavBtn = styled.button`
  &.active {
    border-color: black;
    color: black;
    font-weight: bold;
  }
`;
