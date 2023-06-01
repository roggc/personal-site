import styled from "styled-components";
import { useSlice } from "@slices";

const Header = () => {
  const [headerMessage] = useSlice("headerMessage");
  return <HeaderContainer>{headerMessage}</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  position: absolute;
  top: ${({
    theme: {
      header: { top },
    },
  }) => top}px;
`;
