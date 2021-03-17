import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { setTextSize, setTextStyle, setHeadingSize } from './utils';

const globalStyles = css`
    a, div {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
    a:link {
        text-decoration: none;
    }
`

export const Text = styled.p`
    ${props => setTextSize(props.size)};
    ${props => setTextStyle(props.bold)};
    color: ${props => (props.color) ? props.theme.text[props.color] : props.theme.text.primary};
    margin: 0;
`

export const Heading = styled.h1`
    ${props => setHeadingSize(props.type)};
    ${props => setTextStyle(props.bold)};
    color: ${props => (props.color) ? props.theme.text[props.color] : props.theme.text.primary};
    margin-bottom: 5px;
    margin-top: 0px;
`