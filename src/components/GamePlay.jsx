import { RollDice } from "./RollDice";
import { SelectNum } from "./SelectNum";
import { TotalScore } from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

export const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const getRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice = () => {
    if (!selectedNum) {
      setError("You have not selected any number!");
      return;
    }

    const randomNumber = getRandomDice(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNum === randomNumber) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <SelectNum
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentDice={currentDice} roledice={roledice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  padding: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
