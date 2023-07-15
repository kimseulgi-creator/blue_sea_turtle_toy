import React from 'react';
import { styled } from 'styled-components';

function Layout(props) {
  return (
    <>
      <div></div>
      <div>{props.children}</div>
    </>
  );
}

export default Layout;
