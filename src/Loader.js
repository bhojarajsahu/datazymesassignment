import React, { SFC } from "react";
import styled, { keyframes } from "styled-components";

type LoaderProps = {
  fillColour: string,
  loaderWidth: string
};

const fadeInOut = keyframes`
  0 {
    opacity: 1;
  }

  50% {
   opacity: .5;
 }
  100% {
   opacity: 1;
  }
`;

const StyledSVG = styled.svg`
  width: ${(props: LoaderProps) => (props ? `${props.loaderWidth}` : "50px")};
  fill: ${(props: LoaderProps) =>
    props ? `${props.fillColour}` : "slategrey"};
`;

const StyledCircle1 = styled.circle`
  animation: ${fadeInOut} 1s ease-in-out infinite;
`;

const StyledCircle2 = styled.circle`
  animation: ${fadeInOut} 1s ease-in-out 0.33s infinite;
`;

const StyledCircle3 = styled.circle`
  animation: ${fadeInOut} 1s ease-in-out 0.66s infinite;
`;

export const Loader: SFC<LoaderProps> = ({ fillColour, loaderWidth }) => (
  <StyledSVG
    fillColour={fillColour}
    loaderWidth={loaderWidth}
    viewBox="0 0 24 24"
  >
    <StyledCircle1 r="2" cx="2" cy="2" />
    <StyledCircle2 r="2" cx="7" cy="2" />
    <StyledCircle1 r="2" cx="12" cy="2" />
    <StyledCircle2 r="2" cx="2" cy="7" />
    <StyledCircle3 r="2" cx="7" cy="7" />
    <StyledCircle2 r="2" cx="12" cy="7" />
    <StyledCircle1 r="2" cx="2" cy="12" />
    <StyledCircle2 r="2" cx="7" cy="12" />
    <StyledCircle1 r="2" cx="12" cy="12" />
  </StyledSVG>
);
