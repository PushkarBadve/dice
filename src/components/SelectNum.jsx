import { useState } from "react";
import styled from "styled-components";

export const SelectNum = ({ selectedNum, setSelectedNum, error, setError }) => {
  const numberSelectorHandler = (val) => {
    setSelectedNum(val);

    setError("");
  };

  const Arrnum = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p className="e">{error}</p>
      <div className="flex">
        {Arrnum.map((val, i) => (
          <Box
            key={i}
            onClick={() => numberSelectorHandler(val)}
            isSelected={val === selectedNum}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .e {
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24 px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  border: 1px solid black;
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
