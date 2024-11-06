import styled from "styled-components";

export const RollDice = ({ currentDice, roledice }) => {
  return (
    <Dicecontainer>
      <div className="dice" onClick={roledice}>
        <img
          src={`/images/dices/dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll...</p>
    </Dicecontainer>
  );
};

const Dicecontainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
