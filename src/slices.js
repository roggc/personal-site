import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  headerMessage: { initialArg: null },
  whoIAmContent: { initialArg: null },
  cards: { initialArg: [] },
  reactContextSlicesContent: { initialArg: null },
  rcsSourceContent: { initialArg: null },
  deckDimensions: { initialArg: { width: 0, height: 0 } },
  otherContent: { initialArg: null },
  howToReachMeContent: { initialArg: null },
});
