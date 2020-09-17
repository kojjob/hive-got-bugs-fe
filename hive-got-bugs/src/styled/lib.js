import styled from "styled-components";
import { Link } from "@reach/router";
import MainNav from "../components/MainNav";
import MenuNav from "../components/MenuNav";

// <ul>
export const StyledMainNav = styled(MainNav)`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;

  li {
    margin: 0.3em;
  }
`;

// <ul>
export const StyledMenuNav = styled(MenuNav)`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;

  li {
    margin: 0.3em;
  }
`;

// <Link>, sometimes overridden as <Button>
export const StyledHexButton = styled(Link)`
  position: relative;
  width: 70px;
  height: 40.41px;
  background-color: #b8dbd9;
  margin: 20.21px 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 9pt;
  text-align: center;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
  }
  :before {
    bottom: 100%;
    border-bottom: 20.21px solid #b8dbd9;
  }
  :after {
    top: 100%;
    width: 0;
    border-top: 20.21px solid #b8dbd9;
  }
`;
