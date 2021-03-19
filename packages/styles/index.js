import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { setTextSize, setTextStyle, setHeadingSize } from "./utils";

import { Button as MuiButton } from "@material-ui/core";

export const globalStyles = css`
  a,
  div {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  a:link {
    text-decoration: none;
  }
`;

export const Text = styled.p`
  ${(props) => setTextSize(props.size)};
  ${(props) => setTextStyle(props.bold)};
  color: ${(props) =>
    props.color ? props.theme.text[props.color] : props.theme.text.primary};
  margin: 0;
`;

export const Heading = styled.h1`
  ${(props) => setHeadingSize(props.type)};
  ${(props) => setTextStyle(props.bold)};
  color: ${(props) =>
    props.color ? props.theme.text[props.color] : props.theme.text.primary};
  margin-bottom: 5px;
  margin-top: 0px;
`;

export const Button = styled(MuiButton)`
  &&& {
    background-color: ${(props) => props.theme.btn[props.type || "primary"].bg};
    color: ${(props) => props.theme.btn[props.type || "primary"].text};
    border-radius: 10px;
    padding-left: 50px;
    padding-right: 50px;
    height: 50px;
  }
`;

const inputField = css`
  ${(props) => setInputStyle(props)}
  outline: none;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: none;
  transition: 0.5s ease-in-out;
  border: 1px solid ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.secondary};
  &:hover, &:focus {
    border: 1.5px solid ${props => props.theme.color.secondary};
    border-color: ${props => props.theme.color.secondary};
  }
`;

export const Input = styled.input`
  ${inputField}
  height: 40px;
`;

export const TextArea = styled.textarea`
  ${inputField}
`;
