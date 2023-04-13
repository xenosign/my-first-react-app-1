import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  background-color: ${(props) => props.color};
`;

export default function PropsStyle({ color = 'blue' }) {
  return <MyDiv color={color}>PropsStyle</MyDiv>;
}
