import styled, { useTheme } from "styled-components";
import { useSlice } from "@slices";
import { useState, useEffect, useMemo, useRef } from "react";

const Deck = () => {
  const theme = useTheme();
  const [cards] = useSlice("cards");
  const [{ width, height }] = useSlice("deckDimensions");
  let id = 0;
  const [tops, setTops] = useState([]);
  const [zIndexes, setZIndexes] = useState([]);
  const [isOnTop, setIsOnTop] = useState([]);
  const [isLast, setIsLast] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const isInteractionRef = useRef(false);

  const topsFromCards = useMemo(
    () => cards.map((_, index) => index * theme.deck.separation),
    [cards, theme]
  );
  const zIndexesFromCards = useMemo(
    () => cards.map((_, index, array) => array.length - index),
    [cards]
  );
  const isOnTopFromCards = useMemo(
    () => cards.map((_, index) => index === 0),
    [cards]
  );
  const isLastFromCards = useMemo(
    () => cards.map((_, index, array) => index === array.length - 1),
    [cards]
  );
  const indexesFromCards = useMemo(
    () => cards.map((_, index) => index),
    [cards]
  );

  const wrappedCards = useMemo(
    () =>
      cards.map((card, index, array) => (
        <CardWrapper
          key={id++}
          top={tops[index]}
          topOld={tops[index === array.length - 1 ? 0 : index + 1]}
          zIndex={zIndexes[index]}
          zIndexOld={zIndexes[index === array.length - 1 ? 0 : index + 1]}
          index_={indexes[index]}
          isOnTop={isOnTop[index]}
          isLast={isLast[index]}
          isInteraction={isInteractionRef.current}
          onClick={
            isOnTop[index]
              ? () => {
                  isInteractionRef.current = true;
                  setTops((ts) => ts.slice(-1).concat(ts.slice(0, -1)));
                  setZIndexes((zs) => zs.slice(-1).concat(zs.slice(0, -1)));
                  setIsOnTop((iot) => iot.slice(-1).concat(iot.slice(0, -1)));
                  setIndexes((is) => is.slice(-1).concat(is.slice(0, -1)));
                  setIsLast((ils) => ils.slice(-1).concat(ils.slice(0, -1)));
                }
              : () => {}
          }
        >
          {card}
        </CardWrapper>
      )),
    [cards, tops, zIndexes, indexes, isOnTop, isLast]
  );

  useEffect(() => {
    setTops(topsFromCards);
  }, [topsFromCards]);
  useEffect(() => {
    setZIndexes(zIndexesFromCards);
  }, [zIndexesFromCards]);
  useEffect(() => {
    setIsOnTop(isOnTopFromCards);
  }, [isOnTopFromCards]);
  useEffect(() => {
    setIsLast(isLastFromCards);
  }, [isLastFromCards]);
  useEffect(() => {
    setIndexes(indexesFromCards);
  }, [indexesFromCards]);

  return (
    <DeckContainer width={width} height={height}>
      {wrappedCards.map((wc) => wc)}
    </DeckContainer>
  );
};

const DeckContainer = styled(({ width, height, ...props }) => (
  <div {...props} />
))`
  position: relative;
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
`;

const CardWrapper = styled(
  ({
    top,
    zIndex,
    isOnTop,
    topOld,
    zIndexOld,
    index_,
    isLast,
    isInteraction,
    ...props
  }) => <div {...props} />
)`
  @keyframes goLast${({ index_ }) => index_} {
    0% {
      transform: scaleY(1) scaleX(1);
      opacity: 1;
      top: ${({ topOld }) => topOld}px;
      z-index: ${({ zIndexOld }) => zIndexOld + 1};
    }
    10% {
      transform: scaleY(1.01) scaleX(1.01);

      top: ${({ topOld }) => topOld}px;
      opacity: 0.9;
    }
    60% {
      opacity: 0.9;
      transform: scaleY(1.01) scaleX(1.01);
      top: ${({ topOld }) => topOld - 20}px;
      z-index: ${({ zIndexOld }) => zIndexOld + 1};
    }
    71% {
      z-index: ${({ zIndex }) => zIndex};
    }
    100% {
      transform: scaleY(1) scaleX(1);
      opacity: 1;
      top: ${({ top }) => top}px;
    }
  }
  @keyframes goFirst${({ index_ }) => index_} {
    0% {
      top: ${({ topOld }) => topOld}px;
    }
    100% {
      top: ${({ top }) => top}px;
    }
  }
  ${({ isLast, index_, isInteraction }) =>
    isLast
      ? isInteraction && `animation-name:goLast${index_};animation-duration:1s;`
      : isInteraction &&
        `animation-name:goFirst${index_};animation-duration:1s;animation-fill-mode:none;`}
  ${({ isOnTop }) => (isOnTop ? "cursor:pointer;" : "")}
  position: absolute;
  top: ${({ top }) => top}px;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
  width: 100%;
  height: 100%;
`;

export default Deck;
