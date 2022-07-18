import React from "react";
import styled from "styled-components";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
    height: 30rem;
  position: relative;
  margin-left: 1.5rem;
  /* z-index: 10; */
  svg {
    width: 30rem;
    height: 30rem;
  }
  @media only Screen and (max-width: 48em) {
    
    width: 15rem;
      height: 10rem;
  }
`;

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`).default;
  //console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
      <img src={SvgIcon} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;
