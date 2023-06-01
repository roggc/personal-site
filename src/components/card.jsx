import styled from "styled-components";

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  ${({
    theme: {
      card: {
        border: { width, color },
      },
    },
  }) => `border:${width}px solid ${"white"};`}
  ${({
    theme: {
      card: {
        border: { radius },
      },
    },
  }) => `border-radius:${radius}px;`}
  background-color:${({
    theme: {
      card: { backgroundColor },
    },
  }) => backgroundColor};
  height: inherit;
  overflow: auto;
  box-shadow: 0 0 4px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({
    theme: {
      card: { padding },
    },
  }) => padding}px;
  box-sizing: border-box;
`;

export default Card;
