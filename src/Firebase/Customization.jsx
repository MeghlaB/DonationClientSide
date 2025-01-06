import { keyframes } from '@emotion/react';
import React from 'react'
import Reveal from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Customization({children}) {
    return <Reveal keyframes={customAnimation}>{children}</Reveal>;
}
