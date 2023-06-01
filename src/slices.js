import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  headerMessage: { initialState: null },
  whoIAmContent: { initialState: null },
  cards: { initialState: [] },
  reactContextSlicesContent: { initialState: null },
  rcsSourceContent: { initialState: null },
  deckDimensions: { initialState: { width: 0, height: 0 } },
  otherContent: { initialState: null },
  howToReachMeContent: { initialState: null },
});
