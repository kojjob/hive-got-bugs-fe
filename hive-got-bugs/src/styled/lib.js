import styled from "styled-components";
import HexButton from "../components/HexButton";
import { Link } from "@reach/router";

export const StyledHexButton = styled(HexButton)`
  position: relative;
  width: 70px;
  height: 40.41px;
  background-color: #b8dbd9;
  margin: 20.21px 0;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const StyledLink = styled(Link)`
  position: relative;
  width: 70px;
  height: 40.41px;
  background-color: #b8dbd9;
  margin: 20.21px 0;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

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
