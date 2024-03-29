import { useSlice } from "@slices";
import Header from "@components/header";
import styled from "styled-components";
import { useEffect } from "react";
import Card from "@components/card";
import Deck from "@components/deck";

const App = () => {
  const [, setHeaderMessage] = useSlice("headerMessage");
  const [whoIAmContent, setWhoIAmContent] = useSlice("whoIAmContent");
  const [cards, setCards] = useSlice("cards");
  const [rcsContent, setRcsContent] = useSlice("reactContextSlicesContent");
  const [, setDeckDimensions] = useSlice("deckDimensions");
  const [otherContent, setOtherContent] = useSlice("otherContent");
  const [howToReachMeContent, setHowToReachMeContent] = useSlice(
    "howToReachMeContent"
  );
  const [rcsSourceContent, setRcsSourceContent] = useSlice("rcsSourceContent");
  useEffect(() => {
    setHeaderMessage(
      <>
        This is personal site of <strong>Roger Gomez Castells</strong> (
        <strong>roggc</strong>)
      </>
    );
  }, [setHeaderMessage]);
  useEffect(() => {
    setWhoIAmContent(
      <WhoIAmContainer>
        <WhoIAmTitle>
          <strong>Who am I</strong>
        </WhoIAmTitle>
        <Body>
          <WhoIAmParagraph>
            I am a <strong>React</strong> (and <strong>React Native</strong>)
            developer.
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            I love React development. I also use javascript, typescript, and
            git.
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            I am the author of <strong>react-context-slices</strong>, a library
            that offers a unique solution to global state management in React by
            seamlessly integrating both <strong>Redux</strong> and{" "}
            <strong>React Context</strong> with{" "}
            <strong>zero-boilerplate</strong>.
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            The library is available through npm (just google it or click the
            link in the section 'How to reach me and links' in this page).
          </WhoIAmParagraph>
        </Body>
      </WhoIAmContainer>
    );
  }, [setWhoIAmContent]);
  useEffect(() => {
    setRcsContent(
      <WhoIAmContainer>
        <WhoIAmTitle>
          <strong>react-context-slices (how to use it)</strong>
        </WhoIAmTitle>
        <Body>
          <Code>
            <strong>{`
// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count1: {
      // Redux slice
      initialState: 0,
      reducers: {
        increment: (state) => state + 1,
      },
    },
    count2: {
      // React Context slice
      initialArg: 0,
    },
    // rest of slices (either Redux or React Context slices)
  },
});
`}</strong>
          </Code>
          <Code>
            <strong>{`
// app.js
import { useSlice } from "./slices";

const App = () => {
  const [count1, dispatchCount1, { increment }] = useSlice("count1");
  const [count2, setCount2] = useSlice("count2");
  return (
    <>
      <div>
        <button onClick={() => dispatchCount1(increment())}>+</button>
        {count1}
      </div>
      <div>
        <button onClick={() => setCount2((c) => c + 1)}>+</button>
        {count2}
      </div>
    </>
  );
};

export default App;
`}</strong>
          </Code>
          <Code>
            <strong>{`
// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./slices";
import App from "./app";

const container = document.getElementById("root");

if (container !== null) {
  createRoot(container).render(
    <StrictMode>
      <Provider>
        <App />
      </Provider>
    </StrictMode>
  );
}
`}</strong>
          </Code>
        </Body>
      </WhoIAmContainer>
    );
  }, [setRcsContent]);
  useEffect(() => {
    setOtherContent(
      <WhoIAmContainer>
        <WhoIAmTitle>
          <strong>Other info</strong>
        </WhoIAmTitle>
        <Body>
          <WhoIAmParagraph>
            I like watching football and having a walk.
          </WhoIAmParagraph>
        </Body>
      </WhoIAmContainer>
    );
  }, [setRcsContent]);
  useEffect(() => {
    setHowToReachMeContent(
      <WhoIAmContainer>
        <WhoIAmTitle>
          <strong>How to reach me and links</strong>
        </WhoIAmTitle>
        <Body>
          <WhoIAmParagraph>roggc9@gmail.com</WhoIAmParagraph>
          <WhoIAmParagraph>
            <a
              href="https://twitter.com/roggc9"
              target="_blank"
              onClick={stopPropagation}
            >
              twitter
            </a>
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            <a
              href="https://www.linkedin.com/in/roggc9"
              target="_blank"
              onClick={stopPropagation}
            >
              linkedin
            </a>
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            <a
              href="https://github.com/roggc"
              target="_blank"
              onClick={stopPropagation}
            >
              github
            </a>
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            <a
              href="https://dev.to/roggc"
              target="_blank"
              onClick={stopPropagation}
            >
              dev.to
            </a>
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            <a
              href="https://medium.com/@roggc9"
              target="_blank"
              onClick={stopPropagation}
            >
              medium.com
            </a>
          </WhoIAmParagraph>
          <WhoIAmParagraph>
            <a
              href="https://www.npmjs.com/package/react-context-slices"
              target="_blank"
              onClick={stopPropagation}
            >
              react-context-slices (npm)
            </a>
          </WhoIAmParagraph>
        </Body>
      </WhoIAmContainer>
    );
  }, [setHowToReachMeContent]);
  useEffect(() => {
    setRcsSourceContent(
      <WhoIAmContainer>
        <WhoIAmTitle>
          <strong>
            react-context-slices (source code, where the magic happens)
          </strong>
        </WhoIAmTitle>
        <Body>
          <Code>
            <strong>{`
          `}</strong>
          </Code>
        </Body>
      </WhoIAmContainer>
    );
  }, [setRcsSourceContent]);
  useEffect(() => {
    !!whoIAmContent &&
      setCards((cs) => [
        ...cs,
        <Card>{whoIAmContent}</Card>,
        <Card>{rcsContent}</Card>,
        <Card>{otherContent}</Card>,
        <Card>{howToReachMeContent}</Card>,
      ]);
  }, [setCards, whoIAmContent, rcsContent, otherContent, howToReachMeContent]);
  useEffect(() => {
    setDeckDimensions({ width: 76, height: 76 });
  }, [setDeckDimensions]);

  const stopPropagation = (e) => e.stopPropagation();
  return (
    <AppContainer>
      <Header />
      <Deck cards={cards} />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  font-family: sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const WhoIAmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: auto;
  background-color: inherit;
  align-self: stretch;
  flex-grow: 1;
  width: 100%;
`;
const WhoIAmTitle = styled.div`
  position: sticky;
  top: 0;
  align-self: stretch;
  text-align: center;
  background-color: inherit;
  padding-bottom: ${({
    theme: {
      content: {
        title: { paddingBottom },
      },
    },
  }) => paddingBottom}px;
`;
const WhoIAmParagraph = styled.div`
  text-align: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;
const Code = styled.div`
  white-space: pre;
  font-family: monospace;
  width: 100%;
`;

export default App;
